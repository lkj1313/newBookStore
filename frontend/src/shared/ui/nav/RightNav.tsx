import { Link } from "react-router-dom";
const RightNav = () => {
  return (
    <div className="flex  items-center text-[8px] pr1-1 gap-x-1 dark:text-white sm:text-xs sm:gap-x-5">
      <Link to="/login">로그인</Link>
      <Link to="/cart">장바구니</Link>
      <Link to="/delivery">주문/배송</Link>
    </div>
  );
};

export default RightNav;
