import React from 'react';

import NavigationList from './NavigationList';
import UserNavigation from './UserNavigation';

export function TopNavigation() {
  return (
    <div className="top-navigation">
      <div className="dicoding-logo">
        <img src="../../public/images/dicoding.png" alt="" />
      </div>
      <div className="nav-menu">
        <NavigationList />
        <UserNavigation />
      </div>
    </div>
  );
}
