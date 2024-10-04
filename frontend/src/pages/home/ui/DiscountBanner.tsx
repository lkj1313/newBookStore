import card from "../../../assets/card.jpg";
const DiscountBanner = () => {
  return (
    <div className="w-full h-36 mt-20 bg-green-100 dark:bg-slate-600 ml-0 flex items-center justify-center">
      <div className=" h-full p-1 flex gap-3  sm:w-3/5 sm:justify-between">
        <div className="text-xs font-bold dark:text-white grow-1 flex flex-col justify-center sm:text-xl sm:w-1/2">
          <div className="whitespace-nowrap">삼성카드로 결제시,</div>{" "}
          <div>도서 6% 할인!</div>
        </div>
        <div className="grow-1 h-full flex justify-end">
          <img className="h-30 w-auto" src={card}></img>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
