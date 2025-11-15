import React from 'react';
import { InsightSummaries } from './InsightSummaries';
import { AchievementProgress } from './AchievementProgress';

export function InsightDetails() {
  return (
    <>
      <div className="insight-details">
        <InsightSummaries />
        <AchievementProgress />
      </div>
    </>
  );
}
