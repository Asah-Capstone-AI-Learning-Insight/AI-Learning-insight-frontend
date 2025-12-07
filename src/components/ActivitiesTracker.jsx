import React from 'react';

import { DailyLineChart } from './DailyLineChart';
import { ActivitiesTrackHead } from './ActivitiesTrackHead';

export function ActivitiesTracker(minute) {
  return (
    <>
      <div className="activities-container">
        <ActivitiesTrackHead minute={minute} />
        <DailyLineChart />
      </div>
    </>
  );
}
