import Section from '@/components/ui/Section';

export default function About() {
  return (
    <Section
      id="about"
      title="Presenting Palmness"
      subtitle="The Evergreen Way of Living"
    >
      <div className="max-w-3xl mx-auto text-center text-lg space-y-4">
        <p>
          Inspired by the &apos;Evergreen@apos; nature of the Palm Trees, Palmtown is
          designed to offer a lot more than just homes. Similar to how palms
          continue to grow all year long, Palmtown brings you sustainable spaces
          where you can continue to grow in more ways than one - whether it is
          your career, business, family, or passion!
        </p>
        <p>
          We care for your emotion behind buying a new home, delivering
          everlasting peace, prosperity, and comfort. In simpler words we deliver
          Palmness! 🌴
        </p>
      </div>
    </Section>
  );
}