import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import DefaultLayout from '@/layout/DefaultLayout';
import { 
  Button,
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuRadioGroup, 
  DropdownMenuRadioItem 
} from '@legacy-apartment/ui';
import Swal from 'sweetalert2';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PendingIcon from '@mui/icons-material/Pending';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Sidebar from '@/components/Sidebar';

const API_BASE_URL = 'http://localhost:4000';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const FinancePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [resident, setResident] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    if (id) {
      fetchResidentFinance();
    }
  }, [id]);

  const fetchResidentFinance = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/finance/resident/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.ok) {
        const data = await response.json();
        setResident(data);
      } else {
        Swal.fire('Error', 'Failed to fetch finance data', 'error');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateMonthlyStatus = async (monthIndex: number, status: number) => {
    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch(`${API_BASE_URL}/finance/monthly/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          month: monthIndex,
          year: selectedYear,
          status
        }),
      });

      if (response.ok) {
        fetchResidentFinance();
      }
    } catch (error) {
      Swal.fire('Error', 'Failed to update status', 'error');
    }
  };

  const updateSecurityStatus = async (status: number) => {
    const token = localStorage.getItem('adminToken');
    try {
      const response = await fetch(`${API_BASE_URL}/finance/security/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          year: selectedYear,
          status
        }),
      });

      if (response.ok) {
        fetchResidentFinance();
      }
    } catch (error) {
      Swal.fire('Error', 'Failed to update status', 'error');
    }
  };

  if (loading) return <div className="p-12 text-center">Loading...</div>;
  if (!resident) return <div className="p-12 text-center">Resident not found</div>;

  const getMonthlyStatus = (monthIndex: number) => {
    const payment = resident.monthlyPayments.find(
      (p: any) => p.month === monthIndex && p.year === selectedYear
    );
    return payment ? payment.status : 0;
  };

  const getSecurityStatus = () => {
    const payment = resident.securityPayments.find(
      (p: any) => p.year === selectedYear
    );
    return payment ? payment.status : 0;
  };

  const StatusBadge = ({ status, onClick }: { status: number, onClick?: (s: number) => void }) => {
    const configs: Record<number, any> = {
      1: { icon: <CheckCircleIcon className="text-green-500" />, label: 'Paid', color: 'bg-green-50 text-green-700 border-green-200' },
      [-1]: { icon: <CancelIcon className="text-red-500" />, label: 'Unpaid', color: 'bg-red-50 text-red-700 border-red-200' },
      0: { icon: <PendingIcon className="text-gray-400" />, label: 'Pending', color: 'bg-gray-50 text-gray-500 border-gray-200' },
    };
    const config = configs[status];

    return (
      <div className="flex flex-col items-center gap-2">
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full border border-gray-400 text-xs font-bold ${config.color}`}>
          {config.icon}
          {config.label}
        </div>
        <div className="flex gap-1 mt-2">
          <button onClick={() => onClick?.(1)} className="p-1 hover:bg-green-300 rounded transition-colors" title="Mark as Paid"><CheckCircleIcon className="size-5 text-green-200" /></button>
          <button onClick={() => onClick?.(-1)} className="p-1 hover:bg-red-300 rounded transition-colors" title="Mark as Unpaid"><CancelIcon className="size-5 text-red-200" /></button>
          <button onClick={() => onClick?.(0)} className="p-1 hover:bg-gray-400 rounded transition-colors" title="Mark as Pending"><PendingIcon className="size-5 text-gray-300" /></button>
        </div>
      </div>
    );
  };

  return (
    <DefaultLayout>
      <Head>
        <title>Finance Management | {resident.name}</title>
      </Head>

      <div className="flex min-h-screen bg-gray-50">
        <Sidebar activeTab="residents" />

        <div className="flex-1 ml-64 p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex items-center gap-4">
              <Button variant="outline" size="icon" onClick={() => router.back()} icon={{ left: <KeyboardArrowLeftIcon /> }} />
              <div>
              <h1 className="text-3xl font-bold text-gray-900">Finance Management</h1>
              <p>Managing payments for <span className="text-orange-500 font-bold">{resident.name}</span> ({resident.residence})</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-500 shadow-sm mb-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-gray-900">Yearly Overview</h2>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2 font-bold text-gray-900 border-gray-200"
                    icon={{ right: <KeyboardArrowDownIcon className="size-4" /> }}
                  >
                    {selectedYear}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white border-gray-400">
                  <DropdownMenuRadioGroup>
                    {[2024, 2025, 2026].map((y) => (
                      <DropdownMenuRadioItem 
                        key={y} 
                        checked={selectedYear === y} 
                        onClick={() => setSelectedYear(y)}
                        className="text-gray-900"
                      >
                        {y}
                      </DropdownMenuRadioItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="mb-12">
              <h3 className="text-sm font-bold text-gray-100 mb-6">Monthly Society Fees</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {months.map((month, idx) => (
                  <div key={month} className="p-6 bg-gray-50 rounded-2xl border border-gray-500 flex flex-col items-center text-center">
                    <span className="text-sm font-bold text-gray-900 mb-4">{month}</span>
                    <StatusBadge 
                      status={getMonthlyStatus(idx)} 
                      onClick={(s) => updateMonthlyStatus(idx, s)} 
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-400">
               <h3 className="text-sm font-bold text-gray-100 mb-6">Annual Security Fees</h3>
               <div className="max-w-xs p-6 bg-gray-50 rounded-2xl border border-gray-400 flex flex-col items-center text-center">
                  <span className="text-sm font-bold text-gray-900 mb-4">Security Fee {selectedYear}</span>
                  <StatusBadge 
                    status={getSecurityStatus()} 
                    onClick={(s) => updateSecurityStatus(s)} 
                  />
               </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default FinancePage;
