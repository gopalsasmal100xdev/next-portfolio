"use client";
import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function CodingChart() {
  const data = [
    {
      day: "Sunday",
      questions: 8,
    },
    {
      day: "Monday",
      questions: 10,
    },
    {
      day: "Tuesday",
      questions: 14,
    },
    {
      day: "Wednesday",
      questions: 6,
    },
    {
      day: "Thursday",
      questions: 9,
    },
    {
      day: "Friday",
      questions: 5,
    },
    {
      day: "Saturday",
      questions: 7,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="day" />
        <Radar
          name="Solved"
          dataKey="questions"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
}
