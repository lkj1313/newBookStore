import SimpleSlider from "../../../shared/ui/SimpleSlider/SimpleSlider";
import DiscountBanner from "./DiscountBanner";

const Main = () => {
  return (
    <main>
      <div className="lg:max-w-screen-lg mx-auto flex flex-col py-12 relative">
        <SimpleSlider />
      </div>
      <DiscountBanner />
    </main>
  );
};

export default Main;
