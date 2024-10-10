import { BookItem } from "../../../shared/types/book";
interface Props {
  item: BookItem; // item은 BookItem 타입
}
const SearchResultsItem = ({ item }: Props) => {
  return (
    <div
      className="w-full h-2/3 flex flex-col items-center justify-center"
      key={item.isbn}
    >
      <div className="h-2/3">
        <img src={item.image} alt={item.title} />
      </div>
      <div>{item.title}</div>
    </div>
  );
};

export default SearchResultsItem;
