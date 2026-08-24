import React from "react";
import { FaUsers } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const registrationsData = [
  { month: "فروردین", registrations: 1200 },
  { month: "اردیبهشت", registrations: 1500 },
  { month: "خرداد", registrations: 1800 },
  { month: "تیر", registrations: 2200 },
  { month: "مرداد", registrations: 1900 },
  { month: "شهریور", registrations: 2500 },
  { month: "مهر", registrations: 3000 },
  { month: "آبان", registrations: 2800 },
  { month: "آذر", registrations: 3500 },
  { month: "دی", registrations: 3200 },
  { month: "بهمن", registrations: 4000 },
  { month: "اسفند", registrations: 4500 },
];

const RegistrationsChart = () => {
  const CustomLegend = () => {
    return (
      <p className="mx-auto max-w-max text-sm mt-3 text-indigo-500 font-semibold flex items-center justify-center gap-2">
        <FaUsers className="text-lg!"/>
        تعداد ثبت‌نام
      </p>
    );
  };
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div
        className="px-3 py-2 rounded-lg border bg-white/10! primary-border shadow-md space-y-1! backdrop-blur-xs"
        >
          <p className="text-zinc-600 text-xs font-medium">ماه: {label}</p>
          <p className="text-indigo-500 text-sm">
            تعداد ثبت‌نام: {data.registrations.toLocaleString()} نفر
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 className="mb-5 font-bold text-zinc-700">تعداد ثبت‌نام‌های وبسایت</h2>
      <ResponsiveContainer className={"w-full!"}>
        <LineChart data={registrationsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            content={<CustomTooltip />}
          />
          <Legend content={<CustomLegend />} />
          <Line
            type="monotone"
            dataKey="registrations"
            stroke="oklch(58.5% 0.233 277.117)"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegistrationsChart;