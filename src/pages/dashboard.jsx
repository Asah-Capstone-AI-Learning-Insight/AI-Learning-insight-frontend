import { SideNavigation } from '../components/SideNavigation';
import { InsightContainer } from '../components/InsightContainer';

import NavigationList from '../components/NavigationList';
import UserNavigation from '../components/UserNavigation';
function Dashboard() {
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
        <InsightContainer />
      </div>
    </>
  );
}

export default Dashboard;
