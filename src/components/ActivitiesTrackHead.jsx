import React from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

export function ActivitiesTrackHead() {
  return (
    <>
      <div className="activities-head">
        <span>
          <h1>60 Menit</h1>
          <span className="percentage">
            <FaCircleArrowUp />
            <h2>20 %</h2>
          </span>
        </span>
        <p>Perbandingan dengan hari sebelumnya</p>
      </div>
    </>
  );
}
