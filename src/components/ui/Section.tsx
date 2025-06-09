import { colors } from '@/styles/colors';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  isDark?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = '',
  isDark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-[200px] ${isDark ? 'text-white' : ''} ${className}`}
      style={isDark ? { backgroundColor: colors.secondaryBrown } : {}}
    >
      <div className="container mx-auto px-4">
        <h2 
          className={`text-5xl font-bold text-center mb-12 ${isDark ? 'text-white' : ''}`}
          style={{ color: isDark ? 'white' : colors.accentGreen }}
        >
          {title}
        </h2>
        {subtitle && (
          <p 
            className="text-xl text-center mb-8"
            style={{ color: isDark ? colors.secondaryBrown : 'white' }}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}