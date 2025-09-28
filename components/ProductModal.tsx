'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/data/seedData';
import { XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  if (!product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStockStatus = (stock: number) => {
    if (stock > 100) return { text: 'In Stock', color: 'text-green-400', bg: 'bg-green-400/10' };
    if (stock > 20) return { text: 'Limited Stock', color: 'text-yellow-400', bg: 'bg-yellow-400/10' };
    return { text: 'Low Stock', color: 'text-red-400', bg: 'bg-red-400/10' };
  };

  const stockStatus = getStockStatus(product.stock);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass rounded-2xl cinematic-shadow"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="text-2xl font-heading font-bold text-white">Product Details</h2>
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <XMarkIcon className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-heading font-bold text-white mb-2">
                      {product.name}
                    </h1>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${stockStatus.bg} ${stockStatus.color}`}>
                        {stockStatus.text}
                      </span>
                      <span className="text-gray-400">Category: {product.category}</span>
                    </div>
                  </div>

                  <div className="text-4xl font-bold gradient-text">
                    {formatPrice(product.price)}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Seller Information</h3>
                      <p className="text-gray-300">{product.seller}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Stock Availability</h3>
                      <p className="text-gray-300">{product.stock} units available</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Product Description</h3>
                      <p className="text-gray-300 leading-relaxed">{product.description}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button
                      onClick={() => onAddToCart(product)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 gradient-gold text-black font-semibold rounded-xl hover:shadow-lg transition-shadow duration-300"
                    >
                      <ShoppingCartIcon className="w-5 h-5" />
                      <span>Add to Cart</span>
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-3 glass border border-amber-400/30 text-amber-400 font-semibold rounded-xl hover:bg-amber-400/10 transition-colors duration-300"
                    >
                      Contact Seller
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}