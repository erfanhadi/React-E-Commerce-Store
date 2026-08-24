import React from "react";
import { FaTruck } from "react-icons/fa6";
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

const salesData = [
  { month: "فروردین", sales: 4000 },
  { month: "اردیبهشت", sales: 3000 },
  { month: "خرداد", sales: 2000 },
  { month: "تیر", sales: 2780 },
  { month: "مرداد", sales: 1890 },
  { month: "شهریور", sales: 1090 },
  { month: "مهر", sales: 2390 },
  { month: "آبان", sales: 3294 },
  { month: "آذر", sales: 1948 },
  { month: "دی", sales: 2258 },
  { month: "بهمن", sales: 1249 },
  { month: "اسفند", sales: 3200 },
];

const SalesChart = () => {
  const CustomLegend = () => {
    return (
      <p className="mx-auto max-w-max text-sm mt-3 text-blue-500 font-semibold flex items-center justify-center gap-2">
        <FaTruck className="text-lg!"/>
        تعداد فروش
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
          <p className="text-blue-500 text-sm">
            تعداد فروش: {data.sales.toLocaleString()} محصول
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 className="mb-5 font-bold text-zinc-700">تعداد فروش </h2>
      <ResponsiveContainer className={"w-full!"}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip
            content={<CustomTooltip />}
          />
          <Legend content={<CustomLegend />} />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
