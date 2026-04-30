"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";
import { Calendar, Hotel, BedDouble, Clock, Users } from "lucide-react";

const stats = [
  { value: 16000, label: "Room Nights", icon: Calendar },
  { value: 45, label: "Rooms", icon: Hotel },
  { value: 400000, label: "Served", icon: BedDouble },
  { value: 30, label: "Years", icon: Clock },
  { value: 1000000, label: "Customers", icon: Users },
];

const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#22c55e", "#f59e0b"];

export default function StatsGraph() {
  const [chartType, setChartType] = useState("bar");

  const renderChart = () => {
    switch (chartType) {
      case "line":
        return (
          <LineChart data={stats}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="label" tick={{ fill: "#9ca3af" }} />
            <YAxis tick={{ fill: "#9ca3af" }} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
          </LineChart>
        );

      case "area":
        return (
          <AreaChart data={stats}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="label" tick={{ fill: "#9ca3af" }} />
            <YAxis tick={{ fill: "#9ca3af" }} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" />
          </AreaChart>
        );

      default:
        return (
          <BarChart data={stats}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="label" tick={{ fill: "#9ca3af" }} />
            <YAxis tick={{ fill: "#9ca3af" }} />
            <Tooltip />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {stats.map((_, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        );
    }
  };

  return (
    <div className="py-16 px-4 lg:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Interactive Analytics
        </h2>

        {/* Graph Switch Buttons */}
        <div className="flex justify-center gap-3 mb-6">
          {["bar", "line", "area"].map((type) => (
            <button
              key={type}
              onClick={() => setChartType(type)}
              className={`px-4 py-2 rounded-lg text-sm capitalize transition ${
                chartType === type
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800 text-gray-300"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Chart */}
        <motion.div
          key={chartType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 rounded-2xl p-6 border border-gray-700"
        >
          <div className="w-full h-[350px]">
            <ResponsiveContainer>
              {renderChart()}
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-gray-900 rounded-xl p-4 flex flex-col items-center border border-gray-800"
              >
                <Icon className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-sm font-semibold">
                  {new Intl.NumberFormat("en-IN", {
                    notation: "compact",
                  }).format(stat.value)}
                </p>
                <p className="text-xs text-gray-400 text-center">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
