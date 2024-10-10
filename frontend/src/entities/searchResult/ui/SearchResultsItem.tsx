import { BookItem } from "../../../shared/types/book";
interface Props {
  item: BookItem; // item은 BookItem 타입
}
const SearchResultsItem = ({ item }: Props) => {
  return (
    <div
      className="mx-auto flex flex-col items-center justify-start dark:text-white gap-y-3"
      key={item.isbn}
    >
      <div className="h-2/3 w-full">
        <img className="h-full w-full" src={item.image} alt={item.title} />
      </div>
      <div>{item.title}</div>
    </div>
  );
};

export default SearchResultsItem;
