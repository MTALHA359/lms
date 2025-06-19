// 'use client';

// import { motion } from 'framer-motion';
// import {
//   FaBookOpen,
//   FaClipboardList,
//   FaUserGraduate,
//   FaCalendarAlt,
// } from 'react-icons/fa';
// import Sidebar from '../components/Sidebar';
// const stats = [
//   { title: 'Courses', icon: <FaBookOpen />, count: 6 },
//   { title: 'Assignments', icon: <FaClipboardList />, count: 12 },
//   { title: 'Students', icon: <FaUserGraduate />, count: 34 },
//   { title: 'Attendance', icon: <FaCalendarAlt />, count: '92%' },
// ];

// export default function DashboardPage() {
//   return (
//     <div className="flex bg-[#0e0e18] min-h-screen">
//       <Sidebar />

//       <main className="flex-1 p-6 text-white">
//         <h1 className="text-3xl font-bold mb-6">📊 Dashboard</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2 }}
//               className="bg-gradient-to-br from-[#1e1e2e] to-[#151522] p-6 rounded-xl border border-gray-700 shadow-lg hover:scale-[1.03] transition duration-300"
//             >
//               <div className="flex flex-col items-center text-center space-y-3">
//                 <div className="text-3xl text-yellow-400">{item.icon}</div>
//                 <h2 className="text-lg font-semibold">{item.title}</h2>
//                 <p className="text-2xl font-bold">{item.count}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

'use client';

import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import { FaBook, FaClipboard, FaChartLine, FaCalendarCheck } from 'react-icons/fa';

const studentStats = [
  {
    title: 'Attendance',
    icon: <FaCalendarCheck />,
    value: '95%',
    description: 'Your current attendance rate',
  },
  {
    title: 'Assignments',
    icon: <FaClipboard />,
    value: '8 Pending',
    description: 'Assignments to submit',
  },
  {
    title: 'Subjects',
    icon: <FaBook />,
    value: '5 Subjects',
    description: 'Enrolled subjects',
  },
  {
    title: 'Progress',
    icon: <FaChartLine />,
    value: '78%',
    description: 'Overall course progress',
  },
];

export default function DashboardPage() {
  return (
    <div className="flex bg-[#0e0e18] min-h-screen text-white">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">🎓 Student Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl border border-gray-700 bg-gradient-to-br from-[#1e1e2e] to-[#151522] shadow-md hover:scale-[1.03] transition"
            >
              <div className="flex flex-col gap-2 items-center text-center">
                <div className="text-3xl text-yellow-400">{stat.icon}</div>
                <h2 className="text-lg font-semibold">{stat.title}</h2>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar (Optional) */}
        <div className="mt-10 bg-[#1c1c2c] p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-3">📈 Course Progress</h2>
          <div className="w-full bg-gray-700 h-4 rounded-full overflow-hidden">
            <div className="bg-yellow-400 h-4 w-[78%] transition-all duration-500"></div>
          </div>
          <p className="mt-2 text-sm text-gray-300">You have completed 78% of your course.</p>
        </div>
      </main>
    </div>
  );
}
