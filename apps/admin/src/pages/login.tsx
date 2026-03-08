import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import DefaultLayout from '@/layout/DefaultLayout';

export default function Login() {
  const [email, setEmail] = useState('phukandipak@gmail.com');
  const [password, setPassword] = useState('dipak5969');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Welcome back!',
          text: 'Login successful',
          timer: 1500,
          showConfirmButton: false,
          background: '#ffffff',
          color: '#1f2937',
        });
        
        localStorage.setItem('adminToken', data.token);
        router.push('/');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login failed',
          text: data.message || 'Invalid credentials',
          confirmButtonColor: '#f97316',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An unexpected error occurred',
        confirmButtonColor: '#f97316',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DefaultLayout>
      <Head>
        <title>Login | Legacy Apartment Admin</title>
      </Head>
      
      <div className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        {/* Background elements to match indexed design */}
        <div className="absolute inset-0 bg-gray-950 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)] bg-[size:10vw_100%]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          {/* Subtle orange glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full opacity-50"></div>
        </div>

        <div className="max-w-md w-full z-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/10 p-8 md:p-10">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Admin Portal
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
                Login
              </h1>
              <p className="text-gray-400 font-light">
                Sign in to manage your community
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email-address" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                    Email Address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-300"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all duration-300"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-widest rounded-2xl shadow-lg shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </span>
                  ) : 'Sign In'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
