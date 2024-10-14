import DiscountBanner from "../../features/discount/DiscountBanner";
import SimpleSlider from "../../features/slider/SimpleSlider";

const Home = () => {
  return (
    <>
      <div className="lg:max-w-screen-lg mx-auto flex flex-col py-12 relative">
        <SimpleSlider />
      </div>
      <DiscountBanner />
    </>
  );
};

export default Home;
