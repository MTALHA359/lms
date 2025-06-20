'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/login');
    // Optional: decode JWT here to verify role before rendering
  }, []);

  return <div>Welcome, Admin!</div>;
}
