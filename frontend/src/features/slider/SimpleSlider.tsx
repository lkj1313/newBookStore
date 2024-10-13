import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BookItem } from "../../shared/types/book";
import { useQuery } from "@tanstack/react-query";
import fetchPosts from "../../shared/hooks/useFetchPost";
import { Link } from "react-router-dom";

export default function SimpleSlider() {
  const { data, isLoading } = useQuery({
    queryKey: ["frontendData"],
    queryFn: () => fetchPosts("프론트엔드", 10, 1, "date"),
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 640, // 640px 이하일 때 설정
        settings: {
          slidesToShow: 1, // 슬라이드를 1개씩 보여줌
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="flex flex-col-reverse relative sm:mt-20">
        <div className="">
          <Slider {...settings}>
            {data &&
              data.items.slice(0, 7).map((item: BookItem) => (
                <div
                  className="flex items-center justify-center  "
                  key={item.isbn}
                >
                  <div className="flex justify-center ">
                    <Link to={`/bookDetail/${item.isbn}`}>
                      <img
                        className="h-52 cursor-pointer"
                        src={item.image}
                        alt={item.title}
                      />
                    </Link>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
        <h2 className="pl-1 font-bold flex w-full justify-center mb-5  dark:text-white sm:text-2xl sm:justify-start sm:absolute sm:-top-14 left-">
          프론트엔드 오늘의 책!
        </h2>
      </div>
    </>
  );
}
