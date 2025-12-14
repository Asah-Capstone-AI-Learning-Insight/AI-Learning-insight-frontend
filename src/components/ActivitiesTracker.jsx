import React from "react";

import { DailyLineChart } from "./DailyLineChart";
import { ActivitiesTrackHead } from "./ActivitiesTrackHead";

export function ActivitiesTracker({ minute, summary }) {
  return (
    <>
      <div className="activities-container">
        <ActivitiesTrackHead summary={summary} />
        <DailyLineChart
          labels={summary?.labels ?? []}
          data={summary?.minutesSeries ?? []}
        />
      </div>
    </>
  );
}
