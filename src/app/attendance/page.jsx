'use client';

import { useEffect, useState } from 'react';
import { CalendarDays, Clock, User, Users } from 'lucide-react';

export default function AttendancePage() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    const now = new Date();
    setCurrentDate(now.toLocaleDateString('en-GB')); // Format: DD/MM/YYYY
    setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
  }, []);

  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-6 py-24">
      <div className="max-w-3xl mx-auto bg-[#1a1a1a] p-8 rounded-2xl shadow-xl border border-white/10">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#e94560]">
          Attendance Portal
        </h1>

        {/* Role Selector */}
        <div className="mb-6">
          <label className="block mb-2 text-sm text-gray-400">Select Role</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="student"
                onChange={(e) => setRole(e.target.value)}
              />
              <User size={18} />
              Student
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="teacher"
                onChange={(e) => setRole(e.target.value)}
              />
              <Users size={18} />
              Teacher
            </label>
          </div>
        </div>

        {/* Shared View (All users see this) */}
        <div className="mb-6 text-sm text-gray-300 space-y-2">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span><strong>Date:</strong> {currentDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span><strong>Time:</strong> {currentTime}</span>
          </div>
        </div>

        {/* Teacher Form */}
        {role === 'teacher' && (
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm text-gray-400">Student Full Name</label>
              <input
                type="text"
                placeholder="Enter student's full name"
                required
                className="w-full p-3 rounded-md bg-[#2a2a2a] border border-gray-600 text-white focus:outline-none focus:border-[#e94560]"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block mb-1 text-sm text-gray-400">Attendance Status</label>
              <select
                required
                className="w-full p-3 rounded-md bg-[#2a2a2a] border border-gray-600 text-white focus:outline-none focus:border-[#e94560]"
              >
                <option value="">Select attendance status</option>
                <option value="present">Present</option>
                <option value="absent">Absent</option>
                <option value="late">Late</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#e94560] hover:bg-white hover:text-[#e94560] font-semibold transition"
            >
              Submit Attendance
            </button>
          </form>
        )}

        {/* Message for Students */}
        {role === 'student' && (
          <div className="mt-6 bg-[#2a2a2a] border border-[#e94560]/30 rounded-md p-4 text-center text-gray-300">
            Only teachers are allowed to submit attendance. You may check your status from the dashboard.
          </div>
        )}
      </div>
    </section>
  );
}
