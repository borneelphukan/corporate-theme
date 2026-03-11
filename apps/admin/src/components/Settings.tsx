import React, { useState, useEffect } from 'react';
import { Button, Table, Badge } from '@legacy-apartment/ui';
import Swal from 'sweetalert2';
import DeleteIcon from '@mui/icons-material/Delete';
import api from '@/lib/api';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: string;
}

const Settings = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPresident, setIsPresident] = useState(false);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('adminUser');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        setIsPresident(user?.role === 'president');
        setCurrentUserId(user?.id);
      } catch {}
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isPresident) {
      fetchUsers();
    }
  }, [isPresident]);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (id === currentUserId) {
      Swal.fire('Action Denied', 'You cannot delete your own account while logged in.', 'error');
      return;
    }

    const result = await Swal.fire({
      title: 'Delete user account?',
      text: "This action is irreversible and permanently removes the administrator's access to the society portal.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f97316',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    });

    if (result.isConfirmed) {
      try {
        await api.delete(`/users/${id}`);
        Swal.fire('Deleted!', 'The user account has been successfully removed.', 'success');
        fetchUsers();
      } catch (error) {
        Swal.fire('Error', 'Failed to delete user account.', 'error');
      }
    }
  };

  if (!loading && !isPresident) {
    return (
      <div className="w-full text-center p-20 bg-white rounded-xl border border-gray-400 mt-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <h2 className="text-2xl font-black text-gray-100 mb-4 tracking-tight uppercase">Access Restricted</h2>
        <p>You do not have permission to view this section. Account management is restricted to the society President.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-12">
        <h1 className="text-2xl md:text-3xl text-gray-100 font-black tracking-tight leading-tight">
          Account Management
        </h1>
        <p className="mt-2 text-lg text-gray-100/80">
          Review existing administrative users and securely remove legacy accounts.
        </p>
      </div>

      <div className="mb-20">
        {loading ? (
            <div className="bg-white rounded-xl border border-gray-400 p-20 text-center text-gray-100 italic">
              Loading users...
            </div>
        ) : users.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-400 p-20 text-center text-gray-100 italic">
                No users found.
            </div>
        ) : (
            <Table 
              data={users}
              type="general"
              theme="orange"
              columns={['name', 'email', 'role', 'joined', 'actions']}
              headers={['Name', 'Email', 'Role', 'Joined Date', 'Actions']}
              minWidthClass="min-w-[800px]"
              showMonthlyFeeLegend={false}
              showYearlyFeeLegend={false}
              renderCell={(user, col) => {
                switch(col) {
                  case 'name':
                    return <span className="font-bold text-gray-900">{user.firstName} {user.lastName}</span>;
                  case 'email':
                    return <span className="text-gray-600 font-medium">{user.email}</span>;
                  case 'role':
                    return <Badge label={user.role} type="default" size="sm" />;
                  case 'joined':
                    return <span>{new Date(user.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>;
                  case 'actions':
                    return (
                      <div className="flex justify-end gap-2">
                        <Button 
                          variant="destructive" 
                          size="icon" 
                          onClick={() => handleDelete(user.id)} 
                          icon={{ left: <DeleteIcon className="size-5" /> }} 
                          disabled={user.id === currentUserId}
                        />
                      </div>
                    );
                  default: return null;
                }
              }}
            />
        )}
      </div>
    </div>
  );
};

export default Settings;
