type TickerProps = {
  items: string[];
  tone?: "ink" | "paper";
  speed?: number;
};

/** 横向跑马灯 —— 杂志式节奏分隔带 */
export function Ticker({ items, tone = "ink", speed = 44 }: TickerProps) {
  const row = items.join("  ♢  ");
  return (
    <div className={`ticker ticker--${tone}`} aria-hidden="true">
      <div className="ticker__track" style={{ animationDuration: `${speed}s` }}>
        <span>{row}</span>
        <span>{row}</span>
      </div>
    </div>
  );
}
