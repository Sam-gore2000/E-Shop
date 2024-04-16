
import Filter from '../../Component/Filter/Filter';
import HeroSection from '../../Component/Herosection/HeroSection';
import Layout from '../../Component/Layout/Layout';
import ProductCard from '../../Component/ProductCard/ProductCard';
import Trecke from '../../Component/Tracke/Trecke';
import Testimonial from '../../Component/testimonial/Testimonial';


const Home = () => {

  
  return (
    <div>
<Layout>
<HeroSection/>
<Filter/>
<ProductCard/>
<Trecke/>
<Testimonial/>
</Layout>
    </div>
  )
}

export default Home;
