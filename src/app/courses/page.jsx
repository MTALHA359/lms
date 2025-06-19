'use client';

import { BookOpen, GraduationCap } from 'lucide-react';

const courses = [
  {
    title: 'Mathematics Essentials',
    description: 'Build a strong foundation in algebra, geometry, and arithmetic.',
    icon: <GraduationCap size={40} className="text-[#e94560]" />,
  },
  {
    title: 'Science & Lab Skills',
    description: 'Explore physics, chemistry, and biology with hands-on experiments.',
    icon: <BookOpen size={40} className="text-[#5ddcff]" />,
  },
  {
    title: 'Web Development',
    description: 'Master HTML, CSS, JavaScript & real-world projects.',
    icon: <GraduationCap size={40} className="text-[#00ffaa]" />,
  },
  {
    title: 'English Communication',
    description: 'Strengthen grammar, writing & confident speaking.',
    icon: <BookOpen size={40} className="text-[#ffa500]" />,
  },
  {
    title: 'Computer Science',
    description: 'Learn problem-solving, logic, and algorithms.',
    icon: <GraduationCap size={40} className="text-[#e94560]" />,
  },
  {
    title: 'Business & Management',
    description: 'Fundamentals of marketing, finance, and leadership.',
    icon: <BookOpen size={40} className="text-[#5ddcff]" />,
  },
];

export default function CoursesPage() {
  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#e94560] via-[#ff5f6d] to-[#ffc371] mb-14 drop-shadow-lg">
          Explore Our LMS Courses
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="relative p-6 bg-[#1a1a1a]/70 rounded-2xl border border-white/10 shadow-xl hover:-translate-y-2 hover:shadow-[0_0_20px_#e9456077] transition-all duration-300 backdrop-blur-md"
            >
              <div className="mb-5">{course.icon}</div>
              <h2 className="text-xl font-bold mb-2 tracking-wide">{course.title}</h2>
              <p className="text-gray-400 text-sm">{course.description}</p>
              <span className="absolute right-4 bottom-4 text-sm text-[#e94560] hover:underline cursor-pointer transition">
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
