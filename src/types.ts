export type ActiveModal = 'residences' | 'concierge' | 'portfolio' | 'about' | 'consultation' | null;

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  specs: {
    beds: number;
    baths: number;
    sqft: string;
  };
  image: string;
  tag: string;
  description: string;
}

export interface ConciergeService {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  features: string[];
}
