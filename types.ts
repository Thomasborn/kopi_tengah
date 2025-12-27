export enum MenuCategory {
  SPECIALTY = "Kopi Specialty",
  KEKINATAAN = "Es Kopi Kekinataan",
  NON_KOPI = "Es Non-Kopi",
  ADDITIONAL = "Additional"
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: MenuCategory;
  isHotAvailable?: boolean;
  image?: string;
  isNew?: boolean;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export type ViewState = 'HOME' | 'MENU' | 'LOCATION' | 'ABOUT';