import { Link } from "react-router-dom";
const RightNav = () => {
  return (
    <div className="flex gap-x-5 text-xs dark:text-white">
      <Link to="/login">로그인</Link>
      <Link to="/cart">장바구니</Link>
      <Link to="/delivery">주문/배송</Link>
    </div>
  );
};

export default RightNav;
