import React from "react";
import { FaCalendarCheck } from "react-icons/fa";

import { InsightDetails } from "./InsightDetails";
import { ActivitiesTracker } from "./ActivitiesTracker";

export function InsightContainer() {
  return (
    <div className="insight-container">
      <div className="insight-header">
        <span>
          <FaCalendarCheck className="header-icon" />
          <h2>Aktifitas belajar</h2>
        </span>
        <p>Lorem Ipsum dolor sit amet</p>
      </div>
      <div className="insight-main">
        <InsightDetails />
        <ActivitiesTracker />
      </div>
    </div>
  );
}
