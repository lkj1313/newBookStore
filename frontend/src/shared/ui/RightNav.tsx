const RightNav = () => {
  return (
    <div className="flex gap-x-5 text-xs dark:text-white">
      <a href="/login">로그인</a>
      <a href="/cart">장바구니</a>
      <a href="/delivery">주문/배송</a>
    </div>
  );
};

export default RightNav;
