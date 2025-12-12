import React, { useState } from 'react';
// import { CgBell } from 'react-icons/cg';
import { PiBellSimple } from 'react-icons/pi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { DropDownMenu } from './DropdownMenu';

function UserNavigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="user-list">
      <ul>
        <li
          className="dropdown-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src="../../public/images/default.jpg" alt="" className="photo" />
          {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          <DropDownMenu isVisible={isDropdownOpen} />
        </li>
        <li>
          <PiBellSimple className="notification" />
        </li>
      </ul>
    </nav>
  );
}

export default UserNavigation;
