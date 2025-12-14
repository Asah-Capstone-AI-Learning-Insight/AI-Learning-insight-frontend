import React from "react";
import { InsightSummaries } from "./InsightSummaries";
import { AchievementProgress } from "./AchievementProgress";

export function InsightDetails({
  insightLabels,
  insightCategories,
  insightSummaries,
  insightAction,
  completedCourse,
  totalLearningHours,
  insight,
  summary,
}) {
  return (
    <>
      <div className="insight-details">
        <InsightSummaries
          insight={insight}
          // labels={insightLabels}
          // categories={insightCategories}
          // summaries={insightSummaries}
          // action={insightAction}
        />
        <AchievementProgress
          summary={summary}
          // completedCourse={completedCourse}
          // totalLearningHours={totalLearningHours}
        />
      </div>
    </>
  );
}
