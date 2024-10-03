import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./simpleSlider.module.css";
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
  const { data, refetch } = useFetchPosts("프론트엔드");

  useEffect(() => {
    refetch(); // 수동으로 쿼리 실행
  }, [refetch]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // 자동으로 넘어가기 설정
    autoplaySpeed: 3000,
  };

  return (
    <>
      <h2 className="pl-1 font-bold text-2xl mb-5 dark:text-white">
        프론트엔드 오늘의 책!
      </h2>
      <div className="">
        <Slider {...settings}>
          {data &&
            data.items.slice(0, 10).map((item: BookItem) => (
              <div
                className="flex items-center justify-center  "
                key={item.isbn}
              >
                <div className="flex justify-center ">
                  <img
                    className="h-52 cursor-pointer"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </>
  );
}
