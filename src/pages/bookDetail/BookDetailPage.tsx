import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const fetchBookByIsbn = async (isbn: string) => {
  const response = await fetch(
    `https://dreamy-vacherin-712ef3.netlify.app/search/book?query=${isbn}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch book data");
  }
  return response.json();
};

const BookDetailPage = () => {
  const { isbn } = useParams(); // URL에서 ISBN 가져오기

  // ISBN이 존재하는지 확인하고 useQuery 실행
  const { data, isLoading } = useQuery({
    queryKey: ["book", isbn],
    queryFn: () => fetchBookByIsbn(isbn!),
    enabled: !!isbn, // ISBN이 있을 때만 요청 실행
  });
  if (isLoading) return <div>Loading</div>;
  const book = data?.items?.[0]; // 가져온 책 정보 사용

  return (
    <div className="p-3 m-auto mt-10 lg:max-w-screen-lg sm:p-0">
      <div className="flex w-full h-64 gap-x-3">
        {" "}
        <div className="h-full border">
          <img className="h-full cursor-pointer" src={book.image}></img>
        </div>
        <div className="flex flex-col relative ">
          <div className="text-sm  flex font-bold mb-2 sm:text-xl">
            {book.title}
          </div>
          <div className="text-xs sm:text-base">{book.author}</div>
          <div className="text-xs font-semibold">{book.publisher}</div>
          <div className="h-20 w-full flex absolute bottom-0 ">
            <div className="w-1/4 flex items-center justify-center border  bg-slate-50 text-xs sm:text-base">
              소장{" "}
            </div>
            <div className="w-3/4 p-1 pt-4 pb-4 gap-y-1 flex flex-col justify-center font-light border text-[10px] sm:p-4 sm:text-sm">
              <div className="w-full flex justify-between">
                {" "}
                <div>
                  <span>종이책</span>
                </div>
                <div>{Number(book.discount).toLocaleString()} 원</div>
              </div>

              <div className="w-full flex text-[10px]  justify-between sm:text-sm">
                <div className="">전자책 </div>
                <div className=" flex sm:gap-x-1">
                  <span className="text-red-500 font-bold  p-0 ">30%↓</span>
                  {((Number(book.discount) * 7) / 10).toLocaleString()} 원
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
