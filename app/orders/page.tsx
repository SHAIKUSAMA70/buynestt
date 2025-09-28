'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { orders } from '@/data/seedData';
import { 
  ClipboardDocumentListIcon,
  TruckIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

export default function OrdersPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircleIcon className="w-5 h-5 text-green-400" />;
      case 'Shipped':
        return <TruckIcon className="w-5 h-5 text-blue-400" />;
      case 'Pending':
        return <ClockIcon className="w-5 h-5 text-yellow-400" />;
      case 'Cancelled':
        return <XCircleIcon className="w-5 h-5 text-red-400" />;
      default:
        return <ClipboardDocumentListIcon className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-400 bg-green-400/10';
      case 'Shipped':
        return 'text-blue-400 bg-blue-400/10';
      case 'Pending':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'Cancelled':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 gradient-gold rounded-full animate-pulse mb-4 mx-auto"></div>
          <p className="text-gray-400">Loading orders...</p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="gradient-text">Order History</span>
            </h1>
            <p className="text-xl text-gray-400">Track your purchases and order status</p>
          </motion.div>

          {/* Orders Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            {[
              { label: 'Total Orders', value: orders.length, icon: ClipboardDocumentListIcon, color: 'text-blue-400' },
              { label: 'Delivered', value: orders.filter(o => o.status === 'Delivered').length, icon: CheckCircleIcon, color: 'text-green-400' },
              { label: 'In Transit', value: orders.filter(o => o.status === 'Shipped').length, icon: TruckIcon, color: 'text-yellow-400' },
              { label: 'Pending', value: orders.filter(o => o.status === 'Pending').length, icon: ClockIcon, color: 'text-orange-400' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-xl p-6 cinematic-shadow hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Orders List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {orders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-xl p-6 cinematic-shadow hover:shadow-2xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Order Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {order.productName}
                        </h3>
                        <p className="text-gray-400 text-sm">Order ID: {order.id}</p>
                      </div>
                      <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span>{order.status}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">Seller: {order.seller}</p>
                    <p className="text-gray-400 text-sm">Date: {formatDate(order.date)}</p>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex flex-col justify-center">
                    <div className="text-center lg:text-left">
                      <p className="text-gray-400 text-sm mb-1">Quantity</p>
                      <p className="text-2xl font-bold text-white">{order.quantity}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="text-center lg:text-right">
                      <p className="text-gray-400 text-sm mb-1">Total Amount</p>
                      <p className="text-2xl font-bold gradient-text">
                        {formatPrice(order.totalAmount)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sm font-medium text-amber-400 border border-amber-400/30 rounded-lg hover:bg-amber-400/10 transition-colors duration-200"
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 text-sm font-medium text-gray-400 border border-gray-400/30 rounded-lg hover:bg-gray-400/10 transition-colors duration-200"
                  >
                    Track Order
                  </motion.button>
                  {order.status === 'Delivered' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 text-sm font-medium gradient-gold text-black rounded-lg hover:shadow-lg transition-shadow duration-200"
                    >
                      Reorder
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {orders.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">No orders yet</h3>
              <p className="text-gray-400 mb-6">Start shopping to see your orders here</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/marketplace')}
                className="gradient-gold text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
              >
                Browse Marketplace
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}