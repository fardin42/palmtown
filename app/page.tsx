import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
// import About from '@/components/sections/About';
import Highlights from '@/components/sections/Highlights';
import Offerings from '@/components/sections/Offerings';
import Amenities from '@/components/sections/Amenities';
import FloorPlans from '@/components/sections/FloorPlans';
import Location from '@/components/sections/Location';
import Specifications from '@/components/sections/Specifications';
import Developers from '@/components/sections/Developers';
import WhatsappButton from '@/components/common/WhatsappButton';


export default function Home() {
  return (
    <Layout>
        
      <Hero />
      <Highlights />
      <Offerings />
      <Amenities />
      <FloorPlans />
      <Location />
      <Specifications />
      <Developers />

      <WhatsappButton />
    </Layout>
  );
}
