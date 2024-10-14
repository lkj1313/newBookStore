import { Link } from "react-router-dom";
import { BookItem } from "../../../shared/types/book";
interface Props {
  item: BookItem; // item은 BookItem 타입
}
const SearchResultsItem = ({ item }: Props) => {
  return (
    <div
      className=" mx-auto w-full flex flex-col items-center justify-start rounded-lg gap-y-5 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer dark:text-white dark:bg-[rgba(0.1,0,0,0.1)]"
      key={item.isbn}
    >
      <Link className="h-full " to={`/bookDetail/${item.isbn}`}>
        <div className="h-4/5 w-full mb-3 ">
          <img
            className="h-full w-full rounded-t-lg"
            src={item.image}
            alt="책 이미지"
          />
        </div>
        <div className=" w-full pr-6 flex flex-col rounded-lg gap-y-1 font-semibold">
          <div className="flex text-sm ">{item.title}</div>
        </div>{" "}
      </Link>
    </div>
  );
};

export default SearchResultsItem;
