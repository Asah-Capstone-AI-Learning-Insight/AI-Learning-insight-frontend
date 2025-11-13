import { SideNavigation } from '../components/SideNavigation';
import { MainContainer } from '../components/MainContainer';

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
        <MainContainer />
      </div>
    </>
  );
}

export default Dashboard;
