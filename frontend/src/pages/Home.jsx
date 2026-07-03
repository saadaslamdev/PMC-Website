import Hero from './Home/components/Hero';
import BrandsMarquee from './Home/components/BrandsMarquee';
import Infrastructure from './Home/components/Infrastructure';
import Ecosystem from './Home/components/Ecosystem';
import Consulting from './Home/components/Consulting';
import CTA from './Home/components/CTA';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <BrandsMarquee />
      <Infrastructure />
      <Ecosystem />
      <Consulting />
      <CTA />
    </div>
  );
};

export default Home;
