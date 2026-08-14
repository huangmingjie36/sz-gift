// 部署脚本：npm run build → 推 gh-pages 分支（GitHub Pages）
import { execSync } from "node:child_process";
import { existsSync, rmSync, mkdirSync, readdirSync, copyFileSync, statSync } from "node:fs";
import { join } from "node:path";

const run = (cmd) => execSync(cmd, { stdio: "inherit" });
const TMP = ".deploy-tmp";

// 1) build
run("npm run build");

// 2) 确保 gh-pages 分支存在
try {
  execSync("git rev-parse --verify gh-pages", { stdio: "ignore" });
} catch {
  run("git checkout --orphan gh-pages");
  execSync("git rm -rf .", { stdio: "ignore" });
  execSync("git commit --allow-empty -m 'init gh-pages'", { stdio: "ignore" });
  run("git checkout main");
}

// 3) worktree 更新
if (existsSync(TMP)) rmSync(TMP, { recursive: true, force: true });
run(`git worktree add ${TMP} gh-pages`);
rmSync(join(TMP, "*"), { recursive: true, force: true });
// 清空 worktree（保留 .git）
for (const f of readdirSync(TMP)) {
  if (f !== ".git") rmSync(join(TMP, f), { recursive: true, force: true });
}
// 复制 dist
const copyDir = (src, dst) => {
  mkdirSync(dst, { recursive: true });
  for (const f of readdirSync(src)) {
    const s = join(src, f), d = join(dst, f);
    if (statSync(s).isDirectory()) copyDir(s, d);
    else copyFileSync(s, d);
  }
};
copyDir("dist", TMP);

// 4) commit + push
run(`cd ${TMP} && git add -A && git commit -m 'deploy $(date +%s)' --allow-empty && git push origin gh-pages`);
run("git worktree remove --force " + TMP);
console.log("DEPLOYED → gh-pages");
