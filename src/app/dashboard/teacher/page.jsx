'use client';

import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';
import { motion } from 'framer-motion';

export default function TeacherDashboard() {
  const [materials, setMaterials] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const [materialInput, setMaterialInput] = useState({ title: '', link: '', description: '' });
  const [assignmentInput, setAssignmentInput] = useState({ title: '', due: '', description: '' });

  const handleMaterialUpload = () => {
    if (!materialInput.title || !materialInput.link) return;
    setMaterials([...materials, materialInput]);
    setMaterialInput({ title: '', link: '', description: '' });
  };

  const handleAssignmentCreate = () => {
    if (!assignmentInput.title || !assignmentInput.due) return;
    setAssignments([...assignments, assignmentInput]);
    setAssignmentInput({ title: '', due: '', description: '' });
  };

  return (
    <div className="flex min-h-screen bg-[#0e0e18] text-white">
      <Sidebar />

      <main className="flex-1 p-6 space-y-10">
        <h1 className="text-3xl font-bold">👨‍🏫 Teacher Dashboard</h1>

        {/* Upload Materials Section */}
        <section className="bg-[#1a1a2e] p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">📚 Upload Course Material</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <input
              type="text"
              placeholder="Title"
              className="p-2 rounded bg-[#0e0e18] border border-gray-600"
              value={materialInput.title}
              onChange={(e) => setMaterialInput({ ...materialInput, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Video or File Link"
              className="p-2 rounded bg-[#0e0e18] border border-gray-600"
              value={materialInput.link}
              onChange={(e) => setMaterialInput({ ...materialInput, link: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="p-2 rounded bg-[#0e0e18] border border-gray-600"
              value={materialInput.description}
              onChange={(e) => setMaterialInput({ ...materialInput, description: e.target.value })}
            />
          </div>
          <button
            className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400"
            onClick={handleMaterialUpload}
          >
            Upload
          </button>

          <ul className="mt-6 space-y-2">
            {materials.map((m, i) => (
              <li key={i} className="border border-gray-600 p-3 rounded">
                <strong>{m.title}</strong> — <a href={m.link} className="text-blue-400 underline" target="_blank">{m.link}</a>
                <p className="text-sm text-gray-400">{m.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Assignment Section */}
        <section className="bg-[#1a1a2e] p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">📝 Create Assignment</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <input
              type="text"
              placeholder="Title"
              className="p-2 rounded bg-[#0e0e18] border border-gray-600"
              value={assignmentInput.title}
              onChange={(e) => setAssignmentInput({ ...assignmentInput, title: e.target.value })}
            />
            <input
              type="date"
              placeholder="Due Date"
              className="p-2 rounded bg-[#0e0e18] border border-gray-600"
              value={assignmentInput.due}
              onChange={(e) => setAssignmentInput({ ...assignmentInput, due: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="p-2 rounded bg-[#0e0e18] border border-gray-600"
              value={assignmentInput.description}
              onChange={(e) => setAssignmentInput({ ...assignmentInput, description: e.target.value })}
            />
          </div>
          <button
            className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400"
            onClick={handleAssignmentCreate}
          >
            Create
          </button>

          <ul className="mt-6 space-y-2">
            {assignments.map((a, i) => (
              <li key={i} className="border border-gray-600 p-3 rounded">
                <strong>{a.title}</strong> — Due: {a.due}
                <p className="text-sm text-gray-400">{a.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
