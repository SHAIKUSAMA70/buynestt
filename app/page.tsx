'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          
          {/* Features Section - Placeholder for future content */}
          <section id="features" className="py-20 px-4 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="gradient-text">Why Choose</span> <span className="text-white">Buynestt?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Built for modern retailers who demand excellence in their supply chain
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  title: "Curated Suppliers",
                  description: "Hand-picked suppliers ensuring quality and reliability for your business.",
                  icon: "🎯"
                },
                {
                  title: "Competitive Pricing",
                  description: "Get the best wholesale prices with transparent pricing and bulk discounts.",
                  icon: "💰"
                },
                {
                  title: "Fast Delivery",
                  description: "Quick and reliable delivery to keep your inventory stocked and ready.",
                  icon: "🚀"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="glass rounded-xl p-8 text-center cinematic-shadow hover:shadow-2xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </AuthProvider>
  );
}