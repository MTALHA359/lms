'use client';
import { students } from '@/data/students';

export default function StudentsPage() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Students List</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {students.map((student) => (
          <div key={student.id} className="border rounded-md p-4 shadow bg-white">
            <h3 className="text-xl font-semibold">{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Grade: {student.grade}</p>
            <p>Progress: {student.progress}</p>
            <p>
              Courses:{' '}
              <span className="text-gray-600">
                {student.courses.join(', ')}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
