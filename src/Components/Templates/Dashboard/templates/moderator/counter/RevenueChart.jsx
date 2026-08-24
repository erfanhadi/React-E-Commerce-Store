import React from "react";
import { FaDollarSign } from "react-icons/fa";
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

const revenueData = [
  { month: "فروردین", revenue: 10000000 }, // ۱۰ میلیون تومان
  { month: "اردیبهشت", revenue: 15000000 },
  { month: "خرداد", revenue: 20000000 },
  { month: "تیر", revenue: 25000000 },
  { month: "مرداد", revenue: 22000000 },
  { month: "شهریور", revenue: 30000000 },
  { month: "مهر", revenue: 40000000 },
  { month: "آبان", revenue: 35000000 },
  { month: "آذر", revenue: 50000000 },
  { month: "دی", revenue: 45000000 },
  { month: "بهمن", revenue: 60000000 },
  { month: "اسفند", revenue: 75000000 },
];

const RevenueChart = () => {
  const CustomLegend = () => {
    return (
      <p className="mx-auto max-w-max text-sm mt-3 text-green-500 font-semibold flex items-center justify-center gap-2">
        <FaDollarSign className="text-lg!"/>
        درآمد ماهانه
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
          <p className="text-green-500 text-sm">
            درآمد: {data.revenue.toLocaleString()} تومان
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 className="mb-5 font-bold text-zinc-700">مقدار درآمد وبسایت (تومان)</h2>
      <ResponsiveContainer className={"w-full!"}>
        <LineChart data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            content={<CustomTooltip />}
          />
          <Legend content={<CustomLegend />} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#10b981"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;