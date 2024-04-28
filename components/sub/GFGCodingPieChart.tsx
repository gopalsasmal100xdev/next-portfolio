"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function GFGCodingPieChart() {
  const colors = [
    "#3AC7EB",
    "#AF69EE",
    "#3DED97",
    "#F9A603",
    "#FA8072",
    "#8884d8",
  ];

  const data = [
    {
      name: "School",
      value: 52,
    },
    {
      name: "Basic",
      value: 111,
    },
    {
      name: "Easy",
      value: 383,
    },
    {
      name: "Medium",
      value: 379,
    },
    {
      name: "Hard",
      value: 67,
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
