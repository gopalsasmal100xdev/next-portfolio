"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function CodingPieChart() {
  const colors = ["#3DED97", "#F9A603", "#FA8072", "#8884d8", "#AF69EE"];

  const data = [
    {
      name: "Easy",
      value: 337,
    },
    {
      name: "Medium",
      value: 424,
    },
    {
      name: "Hard",
      value: 120,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          fill="#8884d8"
          label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
