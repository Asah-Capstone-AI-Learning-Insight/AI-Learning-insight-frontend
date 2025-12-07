import React from 'react';
import { InsightSummaries } from './InsightSummaries';
import { AchievementProgress } from './AchievementProgress';

export function InsightDetails({
  insightLabels,
  insightCategories,
  insightSummaries,
  insightAction,
  completedCourse,
  totalLearningHours,
}) {
  return (
    <>
      <div className="insight-details">
        <InsightSummaries
        // labels={insightLabels}
        // categories={insightCategories}
        // summaries={insightSummaries}
        // action={insightAction}
        />
        <AchievementProgress
        // completedCourse={completedCourse}
        // totalLearningHours={totalLearningHours}
        />
      </div>
    </>
  );
}
