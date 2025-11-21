import React from "react";

import { DailyLineChart } from "./DailyLineChart";
import { ActivitiesTrackHead } from "./ActivitiesTrackHead";

export function ActivitiesTracker() {
  return (
    <>
      <div className="activities-container">
        <ActivitiesTrackHead />
        <DailyLineChart />
      </div>
    </>
  );
}
