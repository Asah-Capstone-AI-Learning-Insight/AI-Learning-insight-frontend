import React from "react";
import { FaCircleArrowUp, FaCircleArrowDown } from "react-icons/fa6";

import { calcPercentChange } from "../utils/metrics";

export function ActivitiesTrackHead({ summary }) {
  const series = summary?.minutesSeries ?? [];

  const todayMinutes = Number(series.at(-1) ?? 0);
  const yesterdayMinutes = Number(series.at(-2) ?? 0);

  const diff = calcPercentChange(todayMinutes, yesterdayMinutes);

  const trendClass = diff.isUp ? "trend-up" : diff.isDown ? "trend-down" : "";
  const TrendIcon = diff.isUp ? FaCircleArrowUp : FaCircleArrowDown;
  return (
    <>
      <div className="activities-head">
        <span>
          <h1>{todayMinutes} Menit</h1>
          <span className={trendClass}>
            {!diff.isSame && <TrendIcon />}
            {diff.percentText}
          </span>
        </span>
        <p>Perbandingan dengan hari sebelumnya</p>
      </div>
    </>
  );
}
