import React from "react";
import { IoAnalytics } from "react-icons/io5";
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

const productData = [
  { product: "لپ‌تاپ", sales: 1200 },
  { product: "موبایل", sales: 1800 },
  { product: "هدفون", sales: 900 },
  { product: "کیبورد", sales: 650 },
  { product: "ماوس", sales: 450 },
];

const ProductsChart = () => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="px-3 py-2 rounded-lg border bg-white/90 primary-border shadow-md space-y-1 backdrop-blur-xs">
          <p className="text-zinc-600 text-xs font-medium">محصول: {label}</p>
          <p className="text-orange-500 text-sm">فروش: {payload[0].value.toLocaleString()} واحد</p>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = () => {
    return (
      <p className="max-w-max mx-auto text-xs font-bold text-orange-500 flex items-center justify-center gap-1">
        <IoAnalytics className="text-lg!"/>
        پرفروش ترین محصولات
      </p>
    );
  };

  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2 className="mb-5 font-bold text-zinc-700">پرفروش ترین محصولات</h2>
      <ResponsiveContainer>
        <LineChart data={productData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="product" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#f59e0b"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductsChart;