// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('student'); // default role
//   const router = useRouter();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Dummy logic – replace with your backend auth
//     console.log('Login with:', { email, password, role });

//     if (role === 'admin') {
//       router.push('/dashboard/admin');
//     } else if (role === 'teacher') {
//       router.push('/dashboard/teacher');
//     } else {
//       router.push('/dashboard'); // student
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             type="email"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Password</label>
//           <input
//             type="password"
//             className="w-full border border-gray-300 p-2 rounded"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         {/* Role */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium">Select Role</label>
//           <select
//             className="w-full border border-gray-300 p-2 rounded"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//             required
//           >
//             <option value="student">Student</option>
//             <option value="teachers">Teacher</option>
//             <option value="admin">Admin</option>
//           </select>
//         </div>

//         {/* Login button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>

//         {/* Forgot Password link */}
//         <p className="mt-2 text-center text-sm">
//           <a href="/forgot-password" className="text-blue-600 hover:underline">
//             Forgot Password?
//           </a>
//         </p>

//         {/* Register link */}
//         <p className="mt-4 text-center text-sm">
//           Don&apos;t have an account?{' '}
//           <a href="/register" className="text-blue-600 hover:underline">
//             Register
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }


'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      // Store token in localStorage (or HTTP-only cookie via server)
      localStorage.setItem('token', data.token);

      // Role-based redirect
      if (data.role === 'admin') router.push('/dashboard/admin');
      else if (data.role === 'teacher') router.push('/dashboard/teacher');
      else router.push('/dashboard/student');
    } catch (err) {
      setError('An error occurred');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-4 space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="border p-2 w-full"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
