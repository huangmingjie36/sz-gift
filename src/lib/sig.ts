/** 首次选择专辑时显示一次签名（ppppettis picked this.） */
export function shouldShowPickSignature(): boolean {
  try {
    if (localStorage.getItem("ppp-pick-sig")) return false;
    localStorage.setItem("ppp-pick-sig", "1");
    return true;
  } catch {
    return false;
  }
}
