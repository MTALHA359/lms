'use client';

import Link from 'next/link';
import { FaTachometerAlt, FaBook, FaClipboard, FaUsers, FaCalendar } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#121212] text-white p-6 hidden md:block border-r border-gray-700">
      <h2 className="text-2xl font-bold mb-10">🎓 LMS Panel</h2>
      <nav className="space-y-4">
        <Link href="/dashboard" className="flex items-center gap-3 text-lg hover:text-yellow-400 transition">
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link href="/dashboard/courses" className="flex items-center gap-3 text-lg hover:text-yellow-400 transition">
          <FaBook /> Courses
        </Link>
        <Link href="/dashboard/assignments" className="flex items-center gap-3 text-lg hover:text-yellow-400 transition">
          <FaClipboard /> Assignments
        </Link>
        <Link href="/dashboard/students" className="flex items-center gap-3 text-lg hover:text-yellow-400 transition">
          <FaUsers /> Students
        </Link>
        <Link href="/dashboard/attendance" className="flex items-center gap-3 text-lg hover:text-yellow-400 transition">
          <FaCalendar /> Attendance
        </Link>
      </nav>
    </aside>
  );
}
