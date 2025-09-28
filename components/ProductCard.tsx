'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '@/data/seedData';
import { ShoppingCartIcon, EyeIcon } from '@heroicons/react/24/outline';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails, onAddToCart }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStockStatus = (stock: number) => {
    if (stock > 100) return { text: 'In Stock', color: 'text-green-400' };
    if (stock > 20) return { text: 'Limited', color: 'text-yellow-400' };
    return { text: 'Low Stock', color: 'text-red-400' };
  };

  const stockStatus = getStockStatus(product.stock);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass rounded-xl overflow-hidden cinematic-shadow hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
          <div className="flex space-x-3">
            <motion.button
              onClick={() => onViewDetails(product)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
            >
              <EyeIcon className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => onAddToCart(product)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-amber-500/80 backdrop-blur-sm rounded-full text-white hover:bg-amber-500 transition-colors duration-200"
            >
              <ShoppingCartIcon className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Stock Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 text-xs font-medium rounded-full glass ${stockStatus.color}`}>
            {stockStatus.text}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
        </div>
        
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
          <span>By {product.seller}</span>
          <span>Stock: {product.stock}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold gradient-text">
              {formatPrice(product.price)}
            </span>
          </div>
          
          <div className="flex space-x-2">
            <motion.button
              onClick={() => onViewDetails(product)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 text-xs font-medium text-amber-400 border border-amber-400/30 rounded-md hover:bg-amber-400/10 transition-colors duration-200"
            >
              View
            </motion.button>
            <motion.button
              onClick={() => onAddToCart(product)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-1 text-xs font-medium gradient-gold text-black rounded-md hover:shadow-lg transition-shadow duration-200"
            >
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}