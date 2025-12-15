import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  price?: number;
  priceHalfKg?: number;
  priceOneKg?: number;
  description?: string;
  isPopular?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}