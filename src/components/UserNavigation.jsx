import React from 'react';
import { FaBell } from 'react-icons/fa';

function UserNavigation() {
  return (
    <nav className="user-list">
      <ul>
        <li>User</li>
        <li>
          <FaBell />
        </li>
      </ul>
    </nav>
  );
}

export default UserNavigation;
