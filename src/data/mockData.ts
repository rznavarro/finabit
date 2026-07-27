import { Property, ConciergeService } from '../types';
import estateOne from '../assets/images/finabit_estate_one_1785160491131.jpg';
import penthouseInterior from '../assets/images/finabit_penthouse_interior_1785160503502.jpg';

export const LUXURY_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Solstice Estate',
    location: 'Geneva Lakefront, Switzerland',
    price: '$38,500,000',
    specs: {
      beds: 7,
      baths: 9,
      sqft: '14,200',
    },
    image: estateOne,
    tag: 'Private Lakefront',
    description: 'A contemporary architectural marvel positioned directly on Lake Geneva with private deep-water dock, subterranean 8-car gallery, and panoramic Alpine views.',
  },
  {
    id: 'prop-2',
    title: 'The Zenith Ocean Penthouse',
    location: 'Monaco Waterfront, Monte Carlo',
    price: '$52,000,000',
    specs: {
      beds: 5,
      baths: 6,
      sqft: '9,800',
    },
    image: penthouseInterior,
    tag: 'Trophy Penthouse',
    description: 'Duplex sky residence featuring 360-degree Mediterranean vistas, private rooftop infinity pool, dedicated butler quarters, and direct helicopter landing access.',
  },
  {
    id: 'prop-3',
    title: 'Villa Aurelia',
    location: 'Cap d\'Antibes, French Riviera',
    price: '$29,000,000',
    specs: {
      beds: 6,
      baths: 8,
      sqft: '11,500',
    },
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    tag: 'Historic Modernized',
    description: 'Neoclassical Riviera sanctuary nestled in two acres of private olive groves, offering seamless indoor-outdoor living and bespoke wine cellar.',
  },
  {
    id: 'prop-4',
    title: 'Bel Air Vista Manor',
    location: 'Los Angeles, California',
    price: '$45,000,000',
    specs: {
      beds: 8,
      baths: 11,
      sqft: '18,000',
    },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    tag: 'Off-Market Listing',
    description: 'Ultra-secluded modern compound overlooking downtown LA and the Pacific Ocean. Features private wellness spa, screening room, and security guardhouse.',
  },
];

export const CONCIERGE_SERVICES: ConciergeService[] = [
  {
    id: 'concierge-1',
    title: 'Private Aviation & Yacht Chartering',
    category: 'Mobility & Access',
    iconName: 'Plane',
    description: 'Instant flight dispatch and superyacht bookings for effortless transition between global residences.',
    features: ['24/7 Flight Operations', 'Helicopter Airport Transfers', 'Bespoke Onboard Culinary Services'],
  },
  {
    id: 'concierge-2',
    title: '24/7 Estate Management & Security',
    category: 'Residence Care',
    iconName: 'Shield',
    description: 'Dedicated estate directors, discreet close-protection details, and smart home preventive maintenance.',
    features: ['Vetted On-Site Staffing', 'Biometric Security Protocol', 'Seasonal Property Readiness'],
  },
  {
    id: 'concierge-3',
    title: 'Private Chef & Sommelier Curation',
    category: 'Lifestyle & Dining',
    iconName: 'Utensils',
    description: 'Michelin-trained culinary teams and world-class sommelier cellar management delivered directly to your villa.',
    features: ['Customized Daily Menus', 'Rare Vintage Sourcing', 'Private Event Catering'],
  },
  {
    id: 'concierge-4',
    title: 'Art Advisory & Fine Asset Transport',
    category: 'Assets & Collections',
    iconName: 'Palette',
    description: 'Museum-grade art installation, climate-controlled logistics, and secondary market collection acquisition.',
    features: ['Museum-Standard Security', 'Tax & Duty Optimization', 'Private Museum Exhibitions'],
  },
];
