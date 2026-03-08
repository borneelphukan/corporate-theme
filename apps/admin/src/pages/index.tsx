import { useState, useEffect } from 'react';
import Head from 'next/head';
import DefaultLayout from '@/layout/DefaultLayout';
import { useRouter } from 'next/router';
import Announcements from '@/components/Announcements';
import Residents from '@/components/Residents';
import Sidebar from '@/components/Sidebar';

const AdminDashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'announcements' | 'residents'>('dashboard');

  useEffect(() => {
    if (router.query.tab) {
      setActiveTab(router.query.tab as any);
    }
  }, [router.query.tab]);

  return (
    <DefaultLayout>
      <Head>
        <title>{activeTab === 'dashboard' ? 'Dashboard' : activeTab === 'announcements' ? 'Announcements' : 'Residents'} | Legacy Apartment Admin</title>
      </Head>

      <div className="flex min-h-screen bg-gray-50 text-gray-100">
        
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Main Content */}
        <main className="flex-1 ml-64 p-12">
          {activeTab === 'dashboard' ? (
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h1 className="text-3xl md:text-4xl">
                  Admin Dashboard
                </h1>
                <p className="mt-2 text-lg">
                  Welcome back! Here's an overview of the society management.
                </p>
              </div>

              {/* Quick Stats Grid Placeholder */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  { label: 'Total Residents', value: '38'},
                  { label: 'Active Announcements', value: '8' },
                  { label: 'Pending Requests', value: '12' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-xl border border-gray-500">
                    <p className="text-xs font-bold text-gray-100 uppercase tracking-widest mb-2">{stat.label}</p>
                    <p className={`text-4xl font-black text-gray-100`}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Action Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div 
                  onClick={() => setActiveTab('announcements')}
                  className="bg-white p-8 rounded-xl border border-gray-500 hover:border-orange-500 transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Manage Announcements</h2>
                  <p className="text-gray-300 text-sm">
                    Broadcast new updates, news, or alerts to the entire community.
                  </p>
                </div>
              </div>
            </div>
          ) : activeTab === 'announcements' ? (
            <div className="max-w-5xl mx-auto">
              <Announcements />
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <Residents />
            </div>
          )}
        </main>
      </div>
    </DefaultLayout>
  );
};

export default AdminDashboard;
