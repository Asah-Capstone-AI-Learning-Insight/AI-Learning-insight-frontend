export function calcPercentChange(today, yesterday) {
  const t = Number(today ?? 0);
  const y = Number(yesterday ?? 0);

  if (y == 0) {
    if (t == 0) return { percentText: "0%", isUp: false };
    return { percentText: "100%+", isUp: true };
  }

  const pct = ((t - y) / y) * 100;
  const rounded = Math.round(pct);

  return {
    percentText: `${Math.abs(rounded)}%`,
    isUp: rounded > 0,
    isDown: rounded < 0,
    isSame: rounded === 0,
  };
}
