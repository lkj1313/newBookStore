import card from "../../../assets/card.jpg";
const DiscountBanner = () => {
  return (
    <div className="w-full h-36 mt-20 bg-green-100 dark:bg-slate-600 ml-0 flex items-center justify-center">
      <div className="w-1/2 h-full flex gap-10">
        <div className="text-2xl w-1/2 font-bold dark:text-white grow-1 flex items-center">
          삼성카드로 결제시, <br></br>도서 6% 할인!
        </div>
        <div className="grow-1 w-1/2 h-full flex justify-end">
          <img className="h-30" src={card}></img>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
