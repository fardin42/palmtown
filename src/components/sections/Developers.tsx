import Section from '@/components/ui/Section';
import Image from 'next/image';
import { DEVELOPERS } from '@/constants';

export default function Developers() {
  return (
    <Section
      id="developers"
      title="About The Developers"
      isDark
    >
      <p className="max-w-3xl mx-auto text-center text-lg mb-8">
        Palmtown is planned, designed, and developed project of Mahalaxmi
        Associates, Surana Developers, and Fortune Constrotech. With more than 25
        years of collective experience in the real estate industry, the vision of
        this project is to create high quality living experiences for homebuyers.
        Backed by a proven track record of several residential & commercial
        projects across the Nashik region, our mission is to develop communities
        where peace, prosperity, and comfort can be found in abundance.
      </p>
      
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {DEVELOPERS.map((developer, index) => (
          <div key={index} className="text-center bg-amber-50 px-12 rounded-xl">
            {developer.logo && (
              <Image
                src={developer.logo}
                alt={developer.name}
                width={150} // Adjust width as needed
                height={150} // Adjust height as needed
                className="mx-auto "
              />
            )}
            {/* <p className="text-2xl font-semibold">{developer.name}</p> */}
            {developer.description && (
              <p className="mt-2 text-sm">{developer.description}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}