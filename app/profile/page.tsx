'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { 
  UserCircleIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
  CameraIcon
} from '@heroicons/react/24/outline';

export default function ProfilePage() {
  const { user, updateProfile, isLoading } = useAuth();
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    avatar: ''
  });
  const [originalData, setOriginalData] = useState({
    name: '',
    email: '',
    avatar: ''
  });

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    } else if (user) {
      const userData = {
        name: user.name || '',
        email: user.email || '',
        avatar: user.avatar || ''
      };
      setFormData(userData);
      setOriginalData(userData);
    }
  }, [user, isLoading, router]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateProfile(formData);
    setOriginalData(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(originalData);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 gradient-gold rounded-full animate-pulse mb-4 mx-auto"></div>
          <p className="text-gray-400">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="gradient-text">Profile</span>
            </h1>
            <p className="text-xl text-gray-400">Manage your account information</p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8 cinematic-shadow"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Avatar Section */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center overflow-hidden">
                    {formData.avatar ? (
                      <img
                        src={formData.avatar}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <UserCircleIcon className="w-20 h-20 text-white" />
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute bottom-2 right-2 p-2 bg-amber-500 rounded-full text-white hover:bg-amber-600 transition-colors duration-200"
                  >
                    <CameraIcon className="w-4 h-4" />
                  </motion.button>
                </div>
                <p className="text-center text-gray-400 text-sm mt-3">Upload Photo</p>
              </div>

              {/* Profile Info */}
              <div className="flex-1 w-full">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-heading font-bold text-white">
                    Account Information
                  </h2>
                  {!isEditing ? (
                    <motion.button
                      onClick={handleEdit}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 px-4 py-2 gradient-gold text-black rounded-lg font-medium hover:shadow-lg transition-shadow duration-300"
                    >
                      <PencilIcon className="w-4 h-4" />
                      <span>Edit</span>
                    </motion.button>
                  ) : (
                    <div className="flex space-x-3">
                      <motion.button
                        onClick={handleSave}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                      >
                        <CheckIcon className="w-4 h-4" />
                        <span>Save</span>
                      </motion.button>
                      <motion.button
                        onClick={handleCancel}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
                      >
                        <XMarkIcon className="w-4 h-4" />
                        <span>Cancel</span>
                      </motion.button>
                    </div>
                  )}
                </div>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white">
                        {formData.name || 'Not provided'}
                      </div>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-all duration-300"
                        placeholder="Enter your email address"
                      />
                    ) : (
                      <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white">
                        {formData.email || 'Not provided'}
                      </div>
                    )}
                  </div>

                  {/* Account Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Account Type
                    </label>
                    <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white">
                      Retailer Account
                      <span className="ml-2 px-2 py-1 text-xs bg-amber-500/20 text-amber-400 rounded-full">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-xl font-heading font-bold text-white mb-6">
                Account Features
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Bulk Ordering',
                    description: 'Place large volume orders with special pricing',
                    status: 'Active',
                    statusColor: 'text-green-400 bg-green-400/10'
                  },
                  {
                    title: 'Premium Support',
                    description: 'Priority customer service and dedicated account manager',
                    status: 'Available',
                    statusColor: 'text-blue-400 bg-blue-400/10'
                  },
                  {
                    title: 'Analytics Dashboard',
                    description: 'Track your purchasing patterns and optimize inventory',
                    status: 'Coming Soon',
                    statusColor: 'text-yellow-400 bg-yellow-400/10'
                  },
                  {
                    title: 'Custom Contracts',
                    description: 'Negotiate special terms with suppliers',
                    status: 'Contact Sales',
                    statusColor: 'text-purple-400 bg-purple-400/10'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 glass rounded-lg hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${feature.statusColor}`}>
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}