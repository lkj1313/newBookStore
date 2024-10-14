import card from "../../shared/assets/card.jpg";
const DiscountBanner = () => {
  return (
    <div className="w-full h-36 mt-20 bg-green-100 dark:bg-gray-800 flex mx-auto">
      <div className="h-full lg:max-w-screen-lg mx-auto flex gap-3  sm:w-screen sm:p-1 sm:justify-between">
        <div className="text-xs font-bold dark:text-gray-300 flex flex-col justify-center sm:text-xl sm:w-1/2">
          <div className="whitespace-nowrap">삼성카드로 결제시,</div>{" "}
          <div>도서 6% 할인!</div>
        </div>
        <div className="h-full flex justify-end">
          <img className="h-30 w-auto" src={card}></img>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
