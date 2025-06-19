'use client';

import { useParams } from 'next/navigation';
import { CalendarDays, FileText } from 'lucide-react';

export default function AssignmentDetail() {
  const { assignmentId } = useParams();

  const data = {
    'math-algebra': {
      title: 'Math Algebra Sheet',
      subject: 'Mathematics',
      dueDate: '2025-06-30',
      description: 'Solve all 20 algebra problems from Chapter 4 and submit before the deadline.',
      status: 'Pending',
    },
    'science-lab': {
      title: 'Science Lab Report',
      subject: 'Science',
      dueDate: '2025-07-03',
      description: 'Write a report on the chemical reaction observed in last week’s lab session.',
      status: 'Submitted',
    },
    'history-essay': {
      title: 'History Essay',
      subject: 'Social Studies',
      dueDate: '2025-06-28',
      description: 'Write a 1000-word essay on World War II including key events and causes.',
      status: 'Graded',
    },
  };

  const assignment = data[assignmentId];

  if (!assignment) {
    return <div className="text-center text-white py-40">Assignment not found.</div>;
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto bg-[#1a1a1a] p-8 rounded-2xl shadow-xl border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FileText size={30} className="text-[#e94560]" />
            <h1 className="text-2xl md:text-3xl font-bold">{assignment.title}</h1>
          </div>
          <span className={`px-3 py-1 text-sm rounded-full font-medium ${
            assignment.status === 'Pending' ? 'bg-yellow-600/30 text-yellow-300' :
            assignment.status === 'Submitted' ? 'bg-blue-600/30 text-blue-300' :
            'bg-green-600/30 text-green-300'
          }`}>
            {assignment.status}
          </span>
        </div>

        <p className="text-gray-400 mb-4">Subject: {assignment.subject}</p>

        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <CalendarDays size={16} />
          <span>Due Date: {assignment.dueDate}</span>
        </div>

        <div className="text-base text-white leading-relaxed">
          {assignment.description}
        </div>

        {assignment.status === 'Pending' && (
          <button className="mt-6 bg-[#e94560] text-white px-6 py-2 rounded-md hover:bg-white hover:text-[#e94560] transition">
            Submit Assignment
          </button>
        )}
      </div>
    </section>
  );
}
