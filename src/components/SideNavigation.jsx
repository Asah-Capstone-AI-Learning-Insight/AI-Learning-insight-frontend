import React from 'react';

import { FiCalendar } from 'react-icons/fi';

export function SideNavigation() {
  return (
    <div className="side-nav">
      <div className="academy-container">
        <span>Academy</span>
      </div>
      <div className="learn-activity">
        <FiCalendar />
        <span>Aktivitas Belajar</span>
      </div>
    </div>
  );
}
