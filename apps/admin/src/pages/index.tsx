import React from 'react';
import Head from 'next/head';
import DefaultLayout from '@/layout/DefaultLayout';
import { Button } from '@legacy-apartment/ui';
import { useRouter } from 'next/router';

const AdminDashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/login');
  };

  return (
    <DefaultLayout>
      <Head>
        <title>Dashboard | Legacy Apartment Admin</title>
      </Head>

      <div className="relative min-h-screen w-full bg-gray-950 text-white overflow-hidden">
        {/* Mirroring the background pattern from the landing/login page */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)] bg-[size:10vw_100%]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        {/* Brand/Header Area */}
        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                Control Panel
              </span>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter drop-shadow-2xl">
                Admin <span className="text-orange-500">Dashboard</span>
              </h1>
              <p className="text-gray-400 mt-2 font-light text-lg">
                Welcome back! Here's an overview of the society management.
              </p>
            </div>
            
            <Button 
              variant="secondary" 
              onClick={handleLogout}
              className="!bg-white/5 !text-white border border-white/10 hover:!bg-red-500/20 hover:border-red-500/50 transition-all rounded-2xl px-6 py-3"
            >
              Logout
            </Button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Residents', value: '120', trend: '+2 this month' },
              { label: 'Pending Requests', value: '14', trend: '5 Urgent' },
              { label: 'Maintenance Fund', value: '$12.5k', trend: '85% collected' },
              { label: 'Upcoming Events', value: '3', trend: 'Next: AGM' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-orange-500/30 transition-all group">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2 group-hover:text-orange-500 transition-colors">
                  {stat.label}
                </p>
                <h3 className="text-3xl font-black mb-1">{stat.value}</h3>
                <p className="text-gray-500 text-xs font-medium">{stat.trend}</p>
              </div>
            ))}
          </div>

          {/* Content Area Example */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px] rounded-full -mr-20 -mt-20"></div>
             
             <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
             <div className="space-y-4">
                {[
                    "New contribution received from Flat 402",
                    "Maintenance request updated for Block B Elevator",
                    "Annual Meeting minutes uploaded",
                    "Security log reviewed for 07 March"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                        <p className="text-gray-300 text-sm">{item}</p>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AdminDashboard;
