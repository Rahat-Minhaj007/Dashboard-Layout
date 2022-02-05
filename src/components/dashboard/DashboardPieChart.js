import React from "react";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];
const DashboardPieChart = () => (
  <>
    <ResponsiveContainer height={350} width="90%">
      <PieChart width={350} height={350}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="55%"
          cy="50%"
          outerRadius={80}
          fill="#82ca9d"
          label
        />

        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </>
);

export default DashboardPieChart;
