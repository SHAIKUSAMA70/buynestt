export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  seller: string;
  stock: number;
  category: string;
  description: string;
}

export interface Order {
  id: string;
  productName: string;
  quantity: number;
  totalAmount: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
  seller: string;
}

export interface Retailer {
  id: string;
  name: string;
  email: string;
  location: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 8999,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'TechVenture Supplies',
    stock: 150,
    category: 'Electronics',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for retail customers seeking premium audio experience.'
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt Set',
    price: 1299,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'EcoFashion Hub',
    stock: 300,
    category: 'Fashion',
    description: 'Bulk pack of organic cotton t-shirts in various sizes. Sustainable and comfortable clothing for eco-conscious retailers.'
  },
  {
    id: '3',
    name: 'Smart Fitness Tracker',
    price: 4599,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'HealthTech Solutions',
    stock: 85,
    category: 'Electronics',
    description: 'Advanced fitness tracker with heart rate monitoring, sleep tracking, and smartphone connectivity.'
  },
  {
    id: '4',
    name: 'Artisan Coffee Blend 1kg',
    price: 899,
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'GlobalBrew Traders',
    stock: 200,
    category: 'Food & Beverage',
    description: 'Premium artisan coffee blend sourced from sustainable farms. Perfect for cafes and gourmet retailers.'
  },
  {
    id: '5',
    name: 'LED Desk Lamp with Wireless Charging',
    price: 3299,
    image: 'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'ModernOffice Co.',
    stock: 120,
    category: 'Home & Office',
    description: 'Multi-functional LED desk lamp with built-in wireless charging pad and adjustable brightness levels.'
  },
  {
    id: '6',
    name: 'Bamboo Kitchen Utensil Set',
    price: 799,
    image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'EcoFashion Hub',
    stock: 180,
    category: 'Home & Kitchen',
    description: 'Eco-friendly bamboo kitchen utensil set including spatulas, spoons, and serving tools.'
  },
  {
    id: '7',
    name: 'Bluetooth Portable Speaker',
    price: 2199,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'TechVenture Supplies',
    stock: 95,
    category: 'Electronics',
    description: 'Compact bluetooth speaker with powerful bass and 12-hour battery life. Waterproof design for outdoor use.'
  },
  {
    id: '8',
    name: 'Luxury Skincare Gift Set',
    price: 5499,
    image: 'https://images.pexels.com/photos/7795988/pexels-photo-7795988.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'BeautyWorks Wholesale',
    stock: 75,
    category: 'Beauty',
    description: 'Premium skincare gift set with natural ingredients. Includes cleanser, moisturizer, and serum.'
  },
  {
    id: '9',
    name: 'Gaming Mouse & Pad Combo',
    price: 1899,
    image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'TechVenture Supplies',
    stock: 140,
    category: 'Electronics',
    description: 'High-precision gaming mouse with RGB lighting and premium mouse pad. Perfect for gaming retailers.'
  },
  {
    id: '10',
    name: 'Ceramic Plant Pot Collection',
    price: 1599,
    image: 'https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'GreenLife Distributors',
    stock: 160,
    category: 'Home & Garden',
    description: 'Set of 3 handcrafted ceramic plant pots in different sizes. Modern design for contemporary homes.'
  },
  {
    id: '11',
    name: 'Stainless Steel Water Bottle',
    price: 699,
    image: 'https://images.pexels.com/photos/3735183/pexels-photo-3735183.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'EcoFashion Hub',
    stock: 250,
    category: 'Sports & Outdoors',
    description: 'Insulated stainless steel water bottle that keeps drinks cold for 24 hours and hot for 12 hours.'
  },
  {
    id: '12',
    name: 'Aromatherapy Diffuser',
    price: 2799,
    image: 'https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'WellnessHub Direct',
    stock: 110,
    category: 'Health & Wellness',
    description: 'Ultrasonic aromatherapy diffuser with color-changing LED lights and automatic shut-off feature.'
  },
  {
    id: '13',
    name: 'Leather Business Card Holder',
    price: 1299,
    image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'ProfessionalGear Ltd',
    stock: 130,
    category: 'Business',
    description: 'Genuine leather business card holder with magnetic closure. Professional accessory for executives.'
  },
  {
    id: '14',
    name: 'Wireless Phone Charger Stand',
    price: 1599,
    image: 'https://images.pexels.com/photos/4316843/pexels-photo-4316843.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'TechVenture Supplies',
    stock: 175,
    category: 'Electronics',
    description: 'Fast wireless charging stand compatible with all Qi-enabled devices. Sleek design for modern offices.'
  },
  {
    id: '15',
    name: 'Yoga Mat with Carrying Strap',
    price: 899,
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'FitnessFirst Wholesale',
    stock: 220,
    category: 'Sports & Outdoors',
    description: 'Non-slip yoga mat made from eco-friendly materials. Includes carrying strap and storage bag.'
  },
  {
    id: '16',
    name: 'Smart Home Hub Device',
    price: 6999,
    image: 'https://images.pexels.com/photos/4790267/pexels-photo-4790267.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'SmartHome Solutions',
    stock: 65,
    category: 'Electronics',
    description: 'Central smart home hub that controls lights, temperature, security, and other connected devices.'
  },
  {
    id: '17',
    name: 'Handcrafted Jewelry Box',
    price: 2499,
    image: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'ArtisanCrafts Co.',
    stock: 90,
    category: 'Fashion',
    description: 'Beautifully handcrafted wooden jewelry box with multiple compartments and velvet lining.'
  },
  {
    id: '18',
    name: 'Insulated Lunch Box Set',
    price: 1199,
    image: 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'KitchenEssentials Hub',
    stock: 190,
    category: 'Home & Kitchen',
    description: 'Premium insulated lunch box set with multiple containers and utensils. Perfect for office workers.'
  },
  {
    id: '19',
    name: 'Digital Photo Frame',
    price: 4299,
    image: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'TechVenture Supplies',
    stock: 80,
    category: 'Electronics',
    description: '10-inch digital photo frame with WiFi connectivity and cloud storage integration.'
  },
  {
    id: '20',
    name: 'Essential Oil Starter Kit',
    price: 3299,
    image: 'https://images.pexels.com/photos/4765709/pexels-photo-4765709.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'WellnessHub Direct',
    stock: 125,
    category: 'Health & Wellness',
    description: 'Complete essential oil starter kit with 6 popular scents and detailed usage guide.'
  },
  {
    id: '21',
    name: 'Bluetooth Car Adapter',
    price: 799,
    image: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'AutoTech Distributors',
    stock: 210,
    category: 'Automotive',
    description: 'Compact bluetooth car adapter with hands-free calling and music streaming capabilities.'
  },
  {
    id: '22',
    name: 'Professional Knife Set',
    price: 5999,
    image: 'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'ChefTools Pro',
    stock: 70,
    category: 'Home & Kitchen',
    description: 'Professional-grade knife set with 8 pieces including chef knife, paring knife, and knife block.'
  }
  {
    id: '23',
    name: 'Commercial Rice Cooker 10L',
    price: 8999,
    image: 'https://images.pexels.com/photos/6419121/pexels-photo-6419121.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'KitchenPro Wholesale',
    stock: 45,
    category: 'Cooking Essentials',
    description: 'Large capacity commercial rice cooker perfect for restaurants and catering businesses.'
  },
  {
    id: '24',
    name: 'Stainless Steel Mixing Bowls Set',
    price: 1899,
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'KitchenPro Wholesale',
    stock: 200,
    category: 'Cooking Essentials',
    description: 'Set of 6 stainless steel mixing bowls in various sizes for professional kitchen use.'
  },
  {
    id: '25',
    name: 'Industrial Blender 2HP',
    price: 15999,
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'KitchenPro Wholesale',
    stock: 30,
    category: 'Cooking Essentials',
    description: 'Heavy-duty commercial blender with 2HP motor for smoothies, soups, and food processing.'
  },
  {
    id: '26',
    name: 'Non-Stick Cookware Set 12pc',
    price: 4599,
    image: 'https://images.pexels.com/photos/4226769/pexels-photo-4226769.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'KitchenPro Wholesale',
    stock: 85,
    category: 'Cooking Essentials',
    description: 'Professional non-stick cookware set with pans, pots, and lids for commercial kitchens.'
  },
  {
    id: '27',
    name: 'Digital Kitchen Scale 10kg',
    price: 2299,
    image: 'https://images.pexels.com/photos/6419120/pexels-photo-6419120.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'KitchenPro Wholesale',
    stock: 120,
    category: 'Cooking Essentials',
    description: 'Precision digital kitchen scale with 10kg capacity for accurate ingredient measurement.'
  },
  {
    id: '28',
    name: 'A4 Copy Paper 500 Sheets',
    price: 299,
    image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'OfficeSupply Direct',
    stock: 500,
    category: 'Stationery',
    description: 'High-quality A4 copy paper, 80GSM, perfect for printing and photocopying needs.'
  },
  {
    id: '29',
    name: 'Ballpoint Pen Set 50pcs',
    price: 599,
    image: 'https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'OfficeSupply Direct',
    stock: 300,
    category: 'Stationery',
    description: 'Bulk pack of 50 blue ballpoint pens for office and retail distribution.'
  },
  {
    id: '30',
    name: 'Spiral Notebooks A5 Pack of 10',
    price: 899,
    image: 'https://images.pexels.com/photos/1925536/pexels-photo-1925536.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'OfficeSupply Direct',
    stock: 250,
    category: 'Stationery',
    description: 'Pack of 10 A5 spiral notebooks with 200 pages each, ideal for students and professionals.'
  },
  {
    id: '31',
    name: 'Desk Organizer with Drawers',
    price: 1599,
    image: 'https://images.pexels.com/photos/4226881/pexels-photo-4226881.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'OfficeSupply Direct',
    stock: 150,
    category: 'Stationery',
    description: 'Multi-compartment desk organizer with drawers for pens, papers, and office supplies.'
  },
  {
    id: '32',
    name: 'Whiteboard Markers Set 12pcs',
    price: 799,
    image: 'https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'OfficeSupply Direct',
    stock: 180,
    category: 'Stationery',
    description: 'Set of 12 whiteboard markers in assorted colors with fine tip for clear writing.'
  },
  {
    id: '33',
    name: 'File Folders Pack of 25',
    price: 449,
    image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'OfficeSupply Direct',
    stock: 400,
    category: 'Stationery',
    description: 'Manila file folders for document organization, pack of 25 folders.'
  },
  {
    id: '34',
    name: 'Cleaning Supplies Starter Kit',
    price: 2999,
    image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'CleanPro Distributors',
    stock: 100,
    category: 'Cleaning Supplies',
    description: 'Complete cleaning kit with detergents, disinfectants, and cleaning tools for businesses.'
  },
  {
    id: '35',
    name: 'Industrial Vacuum Cleaner',
    price: 12999,
    image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'CleanPro Distributors',
    stock: 25,
    category: 'Cleaning Supplies',
    description: 'Heavy-duty industrial vacuum cleaner for commercial spaces and warehouses.'
  },
  {
    id: '36',
    name: 'Disposable Gloves Box 100pcs',
    price: 899,
    image: 'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'SafetyFirst Supplies',
    stock: 300,
    category: 'Safety Equipment',
    description: 'Box of 100 disposable nitrile gloves for food service and healthcare industries.'
  },
  {
    id: '37',
    name: 'Safety Helmets Pack of 10',
    price: 2499,
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'SafetyFirst Supplies',
    stock: 80,
    category: 'Safety Equipment',
    description: 'Pack of 10 industrial safety helmets meeting safety standards for construction sites.'
  },
  {
    id: '38',
    name: 'First Aid Kit Complete',
    price: 1899,
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'SafetyFirst Supplies',
    stock: 150,
    category: 'Safety Equipment',
    description: 'Comprehensive first aid kit with bandages, antiseptics, and emergency supplies.'
  },
  {
    id: '39',
    name: 'LED Flood Light 100W',
    price: 3499,
    image: 'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'ElectroTech Solutions',
    stock: 90,
    category: 'Electrical Equipment',
    description: 'High-efficiency LED flood light for outdoor and industrial lighting applications.'
  },
  {
    id: '40',
    name: 'Extension Cord 25 Meter',
    price: 1299,
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'ElectroTech Solutions',
    stock: 200,
    category: 'Electrical Equipment',
    description: 'Heavy-duty 25-meter extension cord with multiple outlets for industrial use.'
  },
  {
    id: '41',
    name: 'Packaging Tape Rolls 36pcs',
    price: 1199,
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'PackagePro Supplies',
    stock: 250,
    category: 'Packaging Materials',
    description: 'Bulk pack of 36 clear packaging tape rolls for shipping and storage needs.'
  },
  {
    id: '42',
    name: 'Cardboard Boxes Assorted 50pcs',
    price: 2199,
    image: 'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=500',
    seller: 'PackagePro Supplies',
    stock: 180,
    category: 'Packaging Materials',
    description: 'Assorted sizes cardboard boxes pack of 50 for shipping and storage purposes.'
  }
];

export const orders: Order[] = [
  {
    id: 'ORD001',
    productName: 'Premium Wireless Headphones',
    quantity: 5,
    totalAmount: 44995,
    status: 'Delivered',
    date: '2024-01-15',
    seller: 'TechVenture Supplies'
  },
  {
    id: 'ORD002',
    productName: 'Organic Cotton T-Shirt Set',
    quantity: 20,
    totalAmount: 25980,
    status: 'Shipped',
    date: '2024-01-18',
    seller: 'EcoFashion Hub'
  },
  {
    id: 'ORD003',
    productName: 'Smart Fitness Tracker',
    quantity: 3,
    totalAmount: 13797,
    status: 'Pending',
    date: '2024-01-20',
    seller: 'HealthTech Solutions'
  },
  {
    id: 'ORD004',
    productName: 'Artisan Coffee Blend 1kg',
    quantity: 10,
    totalAmount: 8990,
    status: 'Delivered',
    date: '2024-01-12',
    seller: 'GlobalBrew Traders'
  },
  {
    id: 'ORD005',
    productName: 'Bluetooth Portable Speaker',
    quantity: 8,
    totalAmount: 17592,
    status: 'Shipped',
    date: '2024-01-19',
    seller: 'TechVenture Supplies'
  }
];

export const retailers: Retailer[] = [
  {
    id: '1',
    name: 'TechVenture Supplies',
    email: 'contact@techventure.com',
    location: 'Mumbai, Maharashtra'
  },
  {
    id: '2',
    name: 'EcoFashion Hub',
    email: 'sales@ecofashion.com',
    location: 'Bangalore, Karnataka'
  },
  {
    id: '3',
    name: 'GlobalBrew Traders',
    email: 'orders@globalbrew.com',
    location: 'Delhi, NCR'
  },
  {
    id: '4',
    name: 'KitchenPro Wholesale',
    email: 'sales@kitchenpro.com',
    location: 'Chennai, Tamil Nadu'
  },
  {
    id: '5',
    name: 'OfficeSupply Direct',
    email: 'orders@officesupply.com',
    location: 'Pune, Maharashtra'
  },
  {
    id: '6',
    name: 'CleanPro Distributors',
    email: 'info@cleanpro.com',
    location: 'Hyderabad, Telangana'
  },
  {
    id: '7',
    name: 'SafetyFirst Supplies',
    email: 'safety@safetyfirst.com',
    location: 'Kolkata, West Bengal'
  },
  {
    id: '8',
    name: 'ElectroTech Solutions',
    email: 'tech@electrotech.com',
    location: 'Ahmedabad, Gujarat'
  },
  {
    id: '9',
    name: 'PackagePro Supplies',
    email: 'pack@packagepro.com',
    location: 'Jaipur, Rajasthan'
  }
];