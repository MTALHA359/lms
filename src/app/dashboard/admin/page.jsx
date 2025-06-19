'use client';
import Sidebar from '@/app/components/Sidebar';
import { motion } from 'framer-motion';
import {
  FaUsers,
  FaUserTie,
  FaChartPie,
  FaCog,
} from 'react-icons/fa';

const adminStats = [
  { title: 'Total Students', icon: <FaUsers />, count: 1500 },
  { title: 'Total Teachers', icon: <FaUserTie />, count: 120 },
  { title: 'Reports', icon: <FaChartPie />, count: 32 },
  { title: 'System Settings', icon: <FaCog />, count: 5 },
];

export default function AdminDashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminStats.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl text-blue-600 mb-2">{item.icon}</div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 text-lg">{item.count}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
