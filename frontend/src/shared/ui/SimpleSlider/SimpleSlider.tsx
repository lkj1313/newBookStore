import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetchPosts from "../../hooks/useFetchPost";
import { useEffect } from "react";
interface BookItem {
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
export default function SimpleSlider() {
  const { data, isLoading, error, refetch } = useFetchPosts("프론트엔드");

  useEffect(() => {
    refetch(); // 수동으로 쿼리 실행
  }, [refetch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // 자동으로 넘어가기 설정
    autoplaySpeed: 3000,
  };

  return (
    <>
      <h2 className="pl-20 font-bold text-2xl mb-5">프론트엔드 오늘의 책!</h2>
      <Slider {...settings}>
        {data &&
          data.items.slice(0, 10).map((item: BookItem) => (
            <div key={item.isbn}>
              <h3 className="flex justify-center">
                <img
                  className="h-52 cursor-pointer"
                  src={item.image}
                  alt={item.title}
                />
              </h3>
            </div>
          ))}
      </Slider>
    </>
  );
}
