import { BookItem } from "../../shared/types/book";
interface Props {
  item: BookItem; // item은 BookItem 타입
}
const SearchResultsItem = ({ item }: Props) => {
  return (
    <div key={item.isbn}>
      <h2>{item.title}</h2>
      <img src={item.image} alt={item.title} />
    </div>
  );
};

export default SearchResultsItem;
