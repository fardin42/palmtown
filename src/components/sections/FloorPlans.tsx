'use client';

import Section from '@/components/ui/Section';
import Tab from '@/components/ui/Tab';
import { FLOOR_PLANS } from '@/constants';
import { colors } from '@/styles/colors';
import Image from 'next/image';

export default function FloorPlans() {
  const tabs = FLOOR_PLANS.map(plan => ({
    id: `fp-${plan.type.toLowerCase()}`,
    label: plan.type === 'typical' ? 'Typical Floor Layout' : `${plan.type} `,
    content: (
      <div className="text-center">
        <h3 
          className="text-2xl font-semibold mb-4"
          style={{ color: colors.lightBackground }}
        >
          {plan.title}
        </h3>
        <Image
          width={800}
          height={600}
          src={plan.image}
          alt={`${plan.type} Floor Plan`}
          className="mx-auto rounded-lg shadow-md max-w-full"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.co/800x600/F5F5EC/333333?text=${plan.type}+Floor+Plan+Not+Available`;
          }}

        />
      
      </div>
       
    ),
  }));

  return (
    <Section
      id="floorplans"
      title="Detailed Floor Plans"
      subtitle="Visualize your future home."
    >
      <div className="max-w-4xl mx-auto">
        <Tab tabs={tabs} />
      </div>
    </Section>
  );
}