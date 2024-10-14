export interface BookItem {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  pubdate: string;
  publisher: string;
  title: string;
}

export interface Page {
  items: BookItem[];
  total: number; // 예시로 total 같은 다른 속성도 포함 가능
}
