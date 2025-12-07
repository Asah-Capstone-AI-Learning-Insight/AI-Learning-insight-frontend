import React from 'react';
import { RiGraduationCapLine } from 'react-icons/ri';
import { FaRegClock } from 'react-icons/fa';

export function AchievementProgress({ completedCourse, totalLearningHours }) {
  return (
    <div className="achievement-container">
      <div className="achievement-progress">
        <div className="completed-courses">
          <h3>Courses</h3>
          <span>
            <RiGraduationCapLine className="cap-icon" />
            {/* <h1>{completedCourse}</h1> */}
            <h1>20</h1>
          </span>
        </div>
        <div className="completed-courses">
          <h3>Learning Hours</h3>
          <span>
            <FaRegClock className="cap-icon" />
            {/* <h1>{totalLearningHours}</h1> */}
            <h1>18</h1>
          </span>
        </div>
      </div>
    </div>
  );
}
