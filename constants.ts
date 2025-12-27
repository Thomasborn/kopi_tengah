import { MenuCategory, MenuItem, Review } from './types';

export const BRAND_COLORS = {
  red: '#FF3333',
  cream: '#FFF8F0',
  brown: '#4A3B32',
  yellow: '#FFD700'
};

export const INSTAGRAM_LINK = "https://www.instagram.com/kopitengah.official";
export const MAPS_LINK = "https://maps.google.com/?q=Kopi+Tengah+Blok+M+Square";
export const WHATSAPP_LINK = "https://wa.me/6281234567890"; // Placeholder

export const MENU_ITEMS: MenuItem[] = [
  // Specialty
  {
    id: 's1',
    name: 'White (Latte/Capp)',
    price: 15000,
    category: MenuCategory.SPECIALTY,
    description: 'Full Arabica. Smooth & Creamy.',
    isHotAvailable: true,
    image: '/new_menu/white(capp).png'
  },
  {
    id: 's2',
    name: 'Black (Non-Fruity)',
    price: 15000,
    category: MenuCategory.SPECIALTY,
    description: 'Full Arabica. Bold & Classic.',
    isHotAvailable: true,
    image: '/DSWuri5kTG5/2025-12-17_06-50-59_UTC_2.jpg'
  },
  {
    id: 's3',
    name: 'Black (Fruity)',
    price: 18000,
    category: MenuCategory.SPECIALTY,
    description: 'Full Arabica. Bright acidic notes.',
    isHotAvailable: true,
    image: '/DSWuri5kTG5/2025-12-17_06-50-59_UTC_3.jpg'
  },

  // Kekinataan
  {
    id: 'k1',
    name: 'Kopi Gula Aren',
    price: 15000,
    category: MenuCategory.KEKINATAAN,
    description: 'The local favorite. Sweet & strong.',
    image: '/DSWuri5kTG5/2025-12-17_06-50-59_UTC_4.jpg'
  },
  {
    id: 'k2',
    name: 'Caramel Macchiato',
    price: 18000,
    category: MenuCategory.KEKINATAAN,
    image: '/DSWuri5kTG5/2025-12-17_06-50-59_UTC_5.jpg'
  },
  {
    id: 'k3',
    name: 'Butterscotch Sea Salt',
    price: 20000,
    category: MenuCategory.KEKINATAAN,
    description: 'Salty sweet perfection.',
    image: '/DSWuri5kTG5/2025-12-17_06-50-59_UTC_6.jpg',
    isNew: true
  },
  {
    id: 'k4',
    name: 'Pandan Latte',
    price: 18000,
    category: MenuCategory.KEKINATAAN,
    image: '/new_menu/pandan.png'
  },

  // Non Kopi
  {
    id: 'n1',
    name: 'Matcha Latte',
    price: 20000,
    category: MenuCategory.NON_KOPI,
    image: '/new_menu/matcha.png'
  },
  {
    id: 'n2',
    name: 'Mikstas Brown Sugar',
    price: 15000,
    category: MenuCategory.NON_KOPI,
    image: '/DSWuri5kTG5/2025-12-17_06-50-59_UTC_2.jpg'
  },
  {
    id: 'n3',
    name: 'Strawberry Milk',
    price: 19000,
    category: MenuCategory.NON_KOPI,
    image: '/new_menu/strawberry.png'
  },
  {
    id: 'n4',
    name: 'Mango Yakult',
    price: 15000,
    category: MenuCategory.NON_KOPI,
    image: '/DSWuri5kTG5/2025-12-17_06-50-59_UTC_4.jpg'
  },

  // Additional
  {
    id: 'a1',
    name: 'Butterscotch Literan',
    price: 50000,
    category: MenuCategory.ADDITIONAL,
    description: 'Big bottle for sharing (or not).',
    image: '/DSWuri5kTG5/2025-12-17_06-50-59_UTC_5.jpg'
  }
];

export const REVIEWS: Review[] = [
  { id: 1, name: "Siti A.", text: "Kopi worth it banget! 15k dapet full arabica.", rating: 5 },
  { id: 2, name: "Budi Santoso", text: "Tempatnya asik buat WFC di Blok M.", rating: 5 },
  { id: 3, name: "Jessica L.", text: "Butterscotch Sea Salt nya juara dunia.", rating: 4 },
];