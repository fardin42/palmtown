import Section from '@/components/ui/Section';
import { colors } from '@/styles/colors';
import { FaStar, FaLeaf, FaShieldAlt, FaAward } from 'react-icons/fa';

const highlights = [
  { number: '164', label: 'Spacious Flats' },
  { number: '6', label: 'Impressive Towers' },
  { number: '50+', label: 'Lifestyle Amenities' },
  { number: '3', label: 'Levels of Luxury' },
];

const features = [
  { title: 'Quality Lifestyle', description: 'Wide range of amenities to enjoy quality time with your loved ones.', icon: FaAward },
  { title: 'Green Living', description: 'Common areas designed considering environmental aspects.', icon: FaLeaf },
  { title: 'High Standards', description: 'Best-in-class construction materials.', icon: FaStar },
  { title: 'Safety & Security', description: 'Round-the-clock surveillance and defined entry/exit.', icon: FaShieldAlt },
];

export default function Highlights() {
  return (
    <Section
      id="highlights"
      title="Why Palmtown?"
      isDark
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 items-center gap-8 text-center mb-12 ">
        {highlights.map((highlight, index) => (
          <div key={index} className='border-1 border-white  p-8 rounded-2xl'>
            <p 
              className="text-5xl font-bold mb-2"
              style={{ color: colors.accentGreen }}
            >
              {highlight.number}
            </p>
            <p className="text-xl">{highlight.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-lg ">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="p-6 rounded-md text-center flex flex-col gap-2 items-center text-[#254f4e] bg-[#e9e9e9]"
            style={{ backgroundColor: colors.lightBackground }}
          >
           {feature.icon && <feature.icon size={48} color={colors.accentGreen} />}
            <strong className='mb-1.5 text-2xl'>{feature.title}</strong>
            <p> {feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}