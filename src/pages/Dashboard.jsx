import React from "react";
import { SideNavigation } from "../components/SideNavigation";
import { MainContainer } from "../components/MainContainer";
import NavigationList from "../components/NavigationList";
import UserNavigation from "../components/UserNavigation";

import { getDashboardSummary, getUserLearningInsight } from "../utils/api";

function Dashboard() {
  const [insight, setInsight] = React.useState(null);
  const [summary, setSummary] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState("");

  React.useEffect(() => {
    const run = async () => {
      const s = await getDashboardSummary();
      if (s.error) {
        setErrorMsg(s.message);
        return;
      }
      setSummary(s.data);

      const i = await getUserLearningInsight();
      if (i.error) {
        setErrorMsg(i.message);
        return;
      }
      setInsight(i.data);
    };

    run();
  }, []);

  const mergedSummary = {
    ...summary,
    courses: insight?.total_course_count ?? summary?.courses ?? 0,
    learningHours: insight
      ? Math.round((insight.total_duration_hours + Number.EPSILON) * 10) / 10
      : summary?.learningHours ?? 0,
  };

  return (
    <>
      <div className="dashboard-container">
        <div className="dicoding-logo">
          <img src="/images/dicoding.png" alt="" />
        </div>

        <div className="nav-menu">
          <NavigationList />
          <UserNavigation displayName={insight?.display_name} />
        </div>

        <SideNavigation />
        <MainContainer
          insight={insight}
          errorMsg={errorMsg}
          summary={mergedSummary}
        />
      </div>
    </>
  );
}

export default Dashboard;

