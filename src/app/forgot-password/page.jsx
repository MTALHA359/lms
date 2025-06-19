'use client';

import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🧪 Fake submit — you can later connect to real email API
    console.log('Password reset requested for:', email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

        {!submitted ? (
          <>
            <div className="mb-4">
              <label className="block mb-1 font-medium">Enter your email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Send Reset Link
            </button>
          </>
        ) : (
          <p className="text-green-600 text-center">
            ✅ If this email exists, a reset link has been sent.
          </p>
        )}

        <p className="mt-4 text-center text-sm">
          <a href="/login" className="text-gray-700 hover:underline">
            Back to Login
          </a>
        </p>
      </form>
    </div>
  );
}
