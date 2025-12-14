import React from "react";
import chartData from "../utils/data";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export function DailyLineChart({ labels, data }) {
  const options = {};

  return (
    <>
      <Line
        options={options}
        data={{
          labels,
          datasets: [
            {
              label: "Minutes",
              data,
            },
          ],
        }}
      />
    </>
  );
}
