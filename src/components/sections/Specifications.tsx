import Section from '@/components/ui/Section';
import Accordion from '@/components/ui/Accordion';
import { SPECIFICATIONS } from '@/constants';

export default function Specifications() {
  const accordionItems = SPECIFICATIONS.map(spec => ({
    title: spec.title,
    content: (
      <div className="space-y-2">
        {Object.entries(spec.content).map(([key, value], index) => (
          <p key={index}>
            <strong>{key}:</strong> {value}
          </p>
        ))}
      </div>
    ),
  }));

  return (
    <Section
      id="specifications"
      title="Project Specifications"
    >
      <div className="max-w-3xl mx-auto">
        <Accordion items={accordionItems} />
      </div>
    </Section>
  );
}