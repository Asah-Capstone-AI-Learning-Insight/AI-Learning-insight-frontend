import React from 'react';
import { SideNavigation } from '../components/SideNavigation';
import { MainContainer } from '../components/MainContainer';

import NavigationList from '../components/NavigationList';
import UserNavigation from '../components/UserNavigation';
import { getInsight, getUserLogged } from '../utils/api';

function Dashboard() {
  const [insight, setInsight] = React.useState(null);

  // React.useEffect(() => {
  //   getInsight().then(({ data }) => {
  //     setInsight(data);
  //   });
  // }, []);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { error: userError, data: userData } = await getUserLogged();

        if (userError) {
          console.log('Gagal ambil user');
          return;
        }

        if (userData) {
          const { error: insightError, data: insightData } = await getInsight(
            userData.id
          );

          if (!insightError && insightData) {
            setInsight(insightData.insight);
          }
        }

        // if (!userError && userData) {
        //   const { error: insightError, data: insightData } = await getInsight(
        //     userData.id
        //   );

        //   if (!insightError && insightData) {
        //     setInsight(insightData.insight);
        //   }
        // }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <div className="dicoding-logo">
          <img src="../../public/images/dicoding.png" alt="" />
        </div>
        <div className="nav-menu">
          <NavigationList />
          <UserNavigation />
        </div>
        <SideNavigation />
        <MainContainer insight={insight} />
      </div>
    </>
  );
}

export default Dashboard;
