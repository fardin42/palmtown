import { Amenity, ApartmentType, FloorPlan, Specification, Developer, ContactInfo } from '@/types';

export const AMENITIES: Amenity[] = [
  // Health & Wellness
  { name: 'Yoga Deck', category: 'health', image:'/assets/png/amenities/yoga-deck.webp' },
  { name: 'Separate Gym For Men & Women', category: 'health', image:'/assets/png/amenities/gym.webp' },
  { name: 'Walking Pathway', category: 'health', image:'/assets/png/amenities/walking-pathway.webp' },
  { name: 'Cardio Section', category: 'health', image:'/assets/png/amenities/cardio.webp' },

  // Recreation & Social
  { name: 'Indoor Games Hall', category: 'recreation', image:'/assets/png/amenities/indoor-games-hall.webp' },
  { name: 'Multipurpose Hall', category: 'recreation', image:'/assets/png/amenities/multipurpose-hall.webp' },
  { name: 'Party Arena', category: 'recreation', image:'/assets/png/amenities/party-arena.webp' },

  // Leisure & Relaxation
  { name: 'Seated Pergola', category: 'leisure', image:'/assets/png/amenities/seated-pergola.webp' },
  { name: 'Hammock Seating Lawn', category: 'leisure', image:'/assets/png/amenities/hammock.webp' },
  { name: 'Senior Citizen Pavilion', category: 'leisure', image:'/assets/png/amenities/senior-citizen-pavilion.webp' },
  { name: 'Star Gazing Deck', category: 'leisure', image:'/assets/png/amenities/star-gazing.webp' },

  // Kids & Family
  { name: 'Kids Play Area / Zone', category: 'kids', image:'/assets/png/amenities/kids-play-zone.webp' },

  // Convenience & Security
  { name: 'Spacious Parking', category: 'practical', image:'/assets/png/amenities/spacious-parking.webp' },
  { name: 'Grand Entrance', category: 'practical', image:'/assets/png/amenities/grand-entrance.webp' },
  { name: 'Security Cabin', category: 'practical', image:'/assets/png/amenities/security-cabin.webp' },
  { name: '24x7 Surveillance', category: 'practical', image:'/assets/png/amenities/cctv-surveillance.webp' }

];

export const APARTMENT_TYPES: ApartmentType[] = [
  {
    type: '2BHK',
    description: 'Our 2 BHK homes are thoughtfully designed for modern living, offering a perfect blend of comfort and functionality. Ideal for young families and professionals.',
    features: [
      'Well-ventilated living spaces',
      'Modern kitchen layout',
      'Comfortable bedrooms with attached balconies (select units)',
      'Premium fittings and fixtures',
    ],
    image: '/assets/png/plans/floor-plan-2bhk.png',
  },
  {
    type: '3BHK',
    description: 'Experience expansive living in our 3 BHK apartments, designed for families seeking more space and luxury. Enjoy ample natural light and elegant interiors.',
    features: [
      'Large living and dining areas',
      'Spacious master bedroom with ensuite',
      'Additional bedrooms for family or guests',
      'Utility area and ample storage',
    ],
    image: '/assets/png/plans/floor-plan-3bhk.png'
  },
];

export const FLOOR_PLANS: FloorPlan[] = [

  {
    type: 'typical',
    title: 'Typical Floor Layout (A to F Wing)',
    image: '/assets/png/plans/typical-2nd-to-7th-floor-plan.png',
  },
  {
    type: 'First Floor Plan',
    title: 'First Floor Plan',
    image: '/assets/png/plans/first-floor-plan.png',
  },
  {
    type: 'A To F Wing',
    title: '3 BHK Floor Plan',
    image: '/assets/png/plans/a-to-f-wing.png',
  },
  {
    type: 'Pondium Floor Plan',
    title: 'Pondium Floor Plan',
    image: '/assets/png/plans/pondium-floor-plan.png',
  },
  {
    type: 'Terrace Floor Plan',
    title: 'Terracee Floor Plan',
    image: '/assets/png/plans/terrace-floor-plan.png',
  },

];

export const SPECIFICATIONS: Specification[] = [
  {
    title: 'RCC & Brick Work',
    content: {
      'RCC': 'RCC frame structure.',
      'Brick Work & Plaster': 'AAC block work external walls 6" & internal wall 4". External double coat sand faced plaster. Internal smooth finish gypsum.',
    },
  },
  {
    title: 'Flooring & Doors',
    content: {
      'Flooring': 'Premium vitrified tiles flooring.',
      'Doors': 'Main Door - Decorative both side laminate finish. Both side laminated Internal doors & doors frame. Granite/composite marble/door frames for bath & wash area.',
    },
  },
  {
    title: 'Windows & Wash Area',
    content: {
      'Windows': 'High quality anodised/powder coated aluminium windows.',
      'Wash Area': 'Floor: Anti skid tiles. Dado: Premium ceramic tiles upto 3 ft level. Provision for washing machine.',
    },
  },
  {
    title: 'Kitchen & Paint',
    content: {
      'Kitchen': 'Flooring: Vitrified tiles. Platform: Natural granite/Composite marble. Dado: Premium ceramic tiles upto lintel level.',
      'Paint': 'Inside: Putty finish with emulsion paint. Outside: Acrylic/Apex paint.',
    },
  },
  {
    title: 'Toilets & Electrification',
    content: {
      'Toilets': 'Premium ceramic tiles upto lintel level. Granite/counter basin. Diverter, concealed flush tank, wall hung WC & sanitary fittings by Kohler/Jaquar/Grohe or equivalent brand.',
      'Electrification': 'Single phase power connection. Concealed ISI wiring Polycab/RR or equivalent with modular switches. MCB distribution panel. Inverter connection.',
    },
  },
  {
    title: 'Security, Lobby & Lifts',
    content: {
      'Security': 'Intercom connectivity. Entire campus covered under CCTV Surveillance.',
      'Railings': 'MS Railing.',
      'Lobby': 'Designer lobby.',
      'Lifts': 'Kone/Schindler or equivalent brand.',
    },
  },
];

export const DEVELOPERS: Developer[] = [
  { name: 'MAHALAXMI ASSOCIATES', logo: '/assets/png/builder_logo/mahalaxmi-logo.png' },
  { name: 'Surana Developers', logo: '/assets/png/builder_logo/surana-logo.png' },
  { name: 'FORTUNE CONSTROTECH LLP', logo: '/assets/png/builder_logo/fortune-logo.png' },
];

export const CONTACT_INFO: ContactInfo = {
  phone: '+91 7353 822 922',
  email: 'mahalaxmiassociates@gmail.com',
  website: 'www.livesatpalmtown.in',
  officeAddress: '101, 1st Floor, Agami Commercial Complex, Sarada Colony, Nashik - 422002',
  siteAddress: 'Survey No. 100, (Near NICE MIDC, ahead of Mahatma Nagar Water Tank), Nashik - 422007',
};

export const AMENITIES_CHART_DATA = {
  labels: ['Ground Level', 'Podium Level', 'Terrace Level'],
  datasets: [{
    label: '# of Key Functional Amenities',
    data: [3, 7, 10],
    backgroundColor: [
      'rgba(168, 124, 94, 0.7)', // Secondary Brown
      'rgba(111, 79, 61, 0.7)',  // Primary Brown
      'rgba(120, 158, 78, 0.7)'  // Accent Green
    ],
    borderColor: [
      'rgba(168, 124, 94, 1)',
      'rgba(111, 79, 61, 1)',
      'rgba(120, 158, 78, 1)'
    ],
    borderWidth: 1
  }]
};