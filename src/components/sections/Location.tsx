'use client';

import Section from '@/components/ui/Section';

const proximityPoints = [
  'Only 700 meters from Mahatma Nagar.',
  'Peaceful neighborhood with up-and-coming lifestyle facilities.',
  'Easy availability of essentials - food, water supply, electricity, etc.',
  'Near Satpur Industrial Area.',
  '5 mins from Gangapur Road & College Road.',
  '15 mins from Ambad Industrial Area.',
  '10 mins from CBS & Old Nashik.',
  'Reputed schools and colleges in the vicinity.',
  'Malls and shopping centers nearby.',
  'Quick access to healthcare facilities.',
];

export default function Location() {
  return (
    <Section
      id="location"
      title="Convenient & Affordable Locality"
      subtitle="Upper Mahatma Nagar - A well-established area in Nashik."
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold text-primary-brown mb-3">
            Closer to Everything You Need:
          </h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {proximityPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.1834161845136!2d73.74330967516003!3d20.000815281403604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdded8857a0a5a1%3A0x584732d174c22c11!2sPalmtown!5e0!3m2!1sen!2sin!4v1749448154494!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <p className="text-center text-sm mt-2">
            Site Address: Survey No. 100, (Near NICE MIDC, ahead of Mahatma Nagar
            Water Tank), Nashik - 422007
          </p>
        </div>
      </div>
    </Section>
  );
}