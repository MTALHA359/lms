'use client';

import Link from 'next/link';
import { FileText, CalendarDays } from 'lucide-react';

const assignments = [
  {
    id: 'math-algebra',
    title: 'Math Algebra Sheet',
    subject: 'Mathematics',
    dueDate: '2025-06-30',
    status: 'Pending',
  },
  {
    id: 'science-lab',
    title: 'Science Lab Report',
    subject: 'Science',
    dueDate: '2025-07-03',
    status: 'Submitted',
  },
  {
    id: 'history-essay',
    title: 'History Essay',
    subject: 'Social Studies',
    dueDate: '2025-06-28',
    status: 'Graded',
  },
];

export default function AssignmentsPage() {
  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center text-[#e94560]">Your Assignments</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {assignments.map((a) => (
            <Link
              key={a.id}
              href={`/assignments/${a.id}`}
              className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[#e94560]/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-full bg-[#e94560]/20 text-[#e94560]">
                  <FileText size={26} />
                </div>
                <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                  a.status === 'Pending' ? 'bg-yellow-600/30 text-yellow-300' :
                  a.status === 'Submitted' ? 'bg-blue-600/30 text-blue-300' :
                  'bg-green-600/30 text-green-300'
                }`}>
                  {a.status}
                </span>
              </div>

              <h2 className="text-lg font-bold mb-1">{a.title}</h2>
              <p className="text-gray-400 text-sm mb-2">Subject: {a.subject}</p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CalendarDays size={16} />
                <span>Due: {a.dueDate}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
