import BestSelling from "../Components/Templates/Home/Best-Selling";
import HeroSection from "../Components/Templates/Home/Hero-Section";
import LatestProducts from "../Components/Templates/Home/Latest-Products";
import OfferProducts from "../Components/Templates/Home/Offer-Product";
import SEOSection from "../Components/Templates/Home/SEO";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BestSelling />
      <LatestProducts />
      <OfferProducts />
      <SEOSection />
    </>
  );
};

export default HomePage;
