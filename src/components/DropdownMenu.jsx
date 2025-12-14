import React from 'react';
import { MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/api';

export function DropDownMenu({ isVisible }) {
  const dropdownClass = isVisible ? 'dropdown-menu slide' : 'dropdown-menu';

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <ul className={dropdownClass}>
      <li className="logout-menu">
        <button onClick={handleLogout}>
          <MdLogout />
          <p>Keluar</p>
        </button>
      </li>
    </ul>
  );
}
