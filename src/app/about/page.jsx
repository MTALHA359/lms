'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaChalkboardTeacher, FaUserShield, FaRocket, FaTools } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-white mb-6 text-center">
          🚀 About Our LMS Platform
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          A modern, role-based Learning Management System for Students, Teachers, and Admins. Built with performance and experience in mind.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard
            title="Student Dashboard"
            icon={<FaGraduationCap className="text-4xl text-blue-400" />}
            description="Track attendance, view assignments, monitor course progress and connect with teachers."
          />
          <FeatureCard
            title="Teacher Dashboard"
            icon={<FaChalkboardTeacher className="text-4xl text-green-400" />}
            description="Manage subjects, assign homework, update student progress and interact efficiently."
          />
          <FeatureCard
            title="Admin Panel"
            icon={<FaUserShield className="text-4xl text-red-400" />}
            description="Control user roles, manage platform content and monitor system analytics."
          />
        </div>

        <motion.div
          className="mt-16 bg-white/5 rounded-xl p-8 border border-white/10 shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-center mb-6">💡 Our Mission</h2>
          <p className="text-gray-300 text-center leading-relaxed max-w-4xl mx-auto">
            Our goal is to empower educational institutions with a seamless, digital-first experience for managing and delivering content to students, simplifying administration and improving collaboration.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <TechBadge name="Next.js" />
            <TechBadge name="MongoDB" />
            <TechBadge name="Tailwind CSS" />
            <TechBadge name="Framer Motion" />
            <TechBadge name="ShadCN UI" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 transition-all duration-300 shadow-md backdrop-blur-sm"
      whileHover={{ scale: 1.05 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

function TechBadge({ name }) {
  return (
    <span className="px-4 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30 text-sm">
      {name}
    </span>
  );
}
