'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaSignOutAlt, FaUsers, FaEnvelope, FaChartBar, FaCog, FaHome, FaChartLine, FaComments, FaCog as FaSettings } from 'react-icons/fa';

export default function AdminDashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const router = useRouter();

  useEffect(() => {
    // Check if the admin is authenticated
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/admin', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          router.push('/admin/login');
        }
      } catch (error) {
        router.push('/admin/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = () => {
    document.cookie = 'admin_token=; path=/; max-age=0; secure; samesite=strict';
    router.push('/admin/login');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-blue-600 border-solid rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaHome /> },
    { id: 'users', label: 'Users', icon: <FaUsers /> },
    { id: 'messages', label: 'Messages', icon: <FaEnvelope /> },
    { id: 'analytics', label: 'Analytics', icon: <FaChartLine /> },
    { id: 'settings', label: 'Settings', icon: <FaSettings /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <motion.div 
          className="bg-white shadow-md w-full md:w-64 md:min-h-screen"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-6 border-b">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">DL</span>
              </div>
              <h1 className="text-xl font-bold text-blue-600">Admin Panel</h1>
            </div>
          </div>
          <nav className="p-4">
            <ul className="space-y-1">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1">
          <header className="bg-white shadow">
            <div className="flex justify-between items-center p-6">
              <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-600 hover:text-red-800 px-4 py-2 rounded-lg hover:bg-red-50 transition-all duration-200"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </header>

          <main className="p-6">
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Total Users</h3>
                    <p className="text-3xl font-bold text-gray-900">1,254</p>
                    <p className="text-green-600 text-sm mt-2">+12% from last month</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Messages</h3>
                    <p className="text-3xl font-bold text-gray-900">42</p>
                    <p className="text-green-600 text-sm mt-2">+8% from last month</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">Projects</h3>
                    <p className="text-3xl font-bold text-gray-900">18</p>
                    <p className="text-green-600 text-sm mt-2">+5% from last month</p>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Welcome to the Admin Dashboard</h2>
                  <p className="text-gray-600">This is a protected area. Only authenticated admins can access this page.</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'users' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">User Management</h2>
                  <p className="text-gray-600">User management functionality will be implemented here.</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'messages' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Contact Messages</h2>
                  <p className="text-gray-600">Contact messages management will be implemented here.</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Analytics</h2>
                  <p className="text-gray-600">Analytics functionality will be implemented here.</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-xl font-semibold mb-4">Site Settings</h2>
                  <p className="text-gray-600">Site settings will be implemented here.</p>
                </div>
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}