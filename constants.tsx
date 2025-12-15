import { MenuCategory } from './types';
import { Leaf, Instagram, Facebook, Phone, MapPin } from 'lucide-react';
import React from 'react';

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'cakes',
    label: 'Classic Cakes',
    items: [
      { id: 'c1', name: 'Pineapple Cake', priceHalfKg: 400, priceOneKg: 750, isPopular: true, description: 'Fresh cream with juicy pineapple chunks.' },
      { id: 'c2', name: 'Butterscotch Cake', priceHalfKg: 450, priceOneKg: 850, description: 'Crunchy praline with smooth caramel cream.' },
      { id: 'c3', name: 'Black Forest', priceHalfKg: 450, priceOneKg: 850, description: 'Classic chocolate sponge with cherries and cream.' },
      { id: 'c4', name: 'Vanilla Fruit Cake', priceHalfKg: 500, priceOneKg: 950, description: 'Loaded with fresh seasonal fruits.' },
      { id: 'c5', name: 'Red Velvet', priceHalfKg: 600, priceOneKg: 1100, isPopular: true, description: 'Velvety sponge with cream cheese frosting.' },
      { id: 'c6', name: 'Blueberry Cake', priceHalfKg: 550, priceOneKg: 1000 },
    ]
  },
  {
    id: 'chocolate',
    label: 'Chocolate Lovers',
    items: [
      { id: 'ch1', name: 'Chocolate Truffle', priceHalfKg: 550, priceOneKg: 1000, isPopular: true },
      { id: 'ch2', name: 'Choco Chip Cake', priceHalfKg: 600, priceOneKg: 1100 },
      { id: 'ch3', name: 'KitKat Cake', priceHalfKg: 700, priceOneKg: 1300 },
      { id: 'ch4', name: 'Ferrero Rocher', priceHalfKg: 850, priceOneKg: 1600, isPopular: true },
      { id: 'ch5', name: 'Belgian Chocolate', priceHalfKg: 800, priceOneKg: 1500 },
    ]
  },
  {
    id: 'pastries',
    label: 'Pastries & Slices',
    items: [
      { id: 'p1', name: 'Pineapple Pastry', price: 60 },
      { id: 'p2', name: 'Truffle Pastry', price: 90, isPopular: true },
      { id: 'p3', name: 'Red Velvet Slice', price: 100 },
      { id: 'p4', name: 'Choco Lava Cup', price: 80 },
      { id: 'p5', name: 'Brownie with Sauce', price: 110 },
    ]
  },
  {
    id: 'cheesecakes',
    label: 'Cold Cheesecakes',
    items: [
      { id: 'cs1', name: 'Blueberry Cheesecake', price: 180, isPopular: true },
      { id: 'cs2', name: 'Biscoff Cheesecake', price: 200 },
      { id: 'cs3', name: 'Nutella Cheesecake', price: 210 },
      { id: 'cs4', name: 'Strawberry Cheesecake', price: 180 },
    ]
  },
  {
    id: 'beverages',
    label: 'Beverages',
    items: [
      { id: 'b1', name: 'Cold Coffee', price: 120, isPopular: true },
      { id: 'b2', name: 'Hazelnut Cold Coffee', price: 150 },
      { id: 'b3', name: 'Virgin Mojito', price: 110 },
      { id: 'b4', name: 'Blue Lagoon', price: 110 },
      { id: 'b5', name: 'Oreo Shake', price: 140 },
      { id: 'b6', name: 'KitKat Shake', price: 160 },
    ]
  },
  {
    id: 'snacks',
    label: 'Café Snacks',
    items: [
      { id: 's1', name: 'Peri Peri Fries', price: 110, isPopular: true },
      { id: 's2', name: 'Cheesy Fries', price: 140 },
      { id: 's3', name: 'Veg Grilled Sandwich', price: 100 },
      { id: 's4', name: 'Paneer Tikka Sandwich', price: 140 },
      { id: 's5', name: 'White Sauce Pasta', price: 180, isPopular: true },
      { id: 's6', name: 'Red Sauce Pasta', price: 180 },
      { id: 's7', name: 'Veg Burger', price: 80 },
      { id: 's8', name: 'Tandoori Paneer Burger', price: 120 },
      { id: 's9', name: 'Veg Pizza Sandwich', price: 130 },
    ]
  }
];

export const CONTACT_INFO = {
  address: "M-136, Shop No. 1, Guru Harkishan Nagar, Paschim Vihar, New Delhi – 110087",
  phone: "+91 95995 47005",
  email: "orders@bakecakewithnikks.com",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d740.2911508263196!2d77.084101!3d28.6705271!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05aae2c35007%3A0x65dd00ad46465c87!2sBake%20Cake%20With%20Nikks!5e1!3m2!1sen!2sin!4v1765813565544!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade" 
};

export const FEATURES = [
  { icon: <Leaf className="w-6 h-6 text-green-500" />, text: "100% Pure Veg" },
  { icon: <span className="text-xl">🥚🚫</span>, text: "Eggless Baking" },
  { icon: <span className="text-xl">🎂</span>, text: "Freshly Baked" },
  { icon: <span className="text-xl">✨</span>, text: "Custom Designs" },
];