import React from 'react';
import { FaCircleArrowUp, FaCircleArrowDown } from 'react-icons/fa6';
import chartData from '../utils/data';

export function ActivitiesTrackHead() {
  const dataArray = chartData.datasets[0].data;

  const lastIndex = dataArray.length - 1;

  const beforeIndex = dataArray.length - 2;

  const latestMinute = dataArray[lastIndex];

  const beforeLatestMinute = dataArray[beforeIndex];

  const increaseValue = () => {
    if (latestMinute > beforeLatestMinute) {
      return (
        <div className="up-percentage">
          <FaCircleArrowUp />
          <h2>
            {(
              ((latestMinute - beforeLatestMinute) / beforeLatestMinute) *
              100
            ).toFixed()}
            %
          </h2>
        </div>
      );
    } else {
      return (
        <div className="down-percentage">
          <FaCircleArrowDown />
          <h2>
            {(
              ((beforeLatestMinute - latestMinute) / latestMinute) *
              100
            ).toFixed()}
            %
          </h2>
        </div>
      );
    }
  };

  return (
    <>
      <div className="activities-head">
        <span>
          <h1>{latestMinute} Menit</h1>
          <span>{increaseValue()}</span>
        </span>
        <p>Perbandingan dengan hari sebelumnya</p>
      </div>
    </>
  );
}
