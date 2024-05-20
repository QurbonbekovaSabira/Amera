"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { Skeleton } from "@/components/ui/skeleton";
import { BannerArrowLeft } from "../../../public/icon/banner-arrow-left";
import { BannerArrowRight } from "../../../public/icon/banner-arrow-right";

interface Type {
  data: {
    results: {
      created_at: string;
      updated_at: string;
      image: string;
      title: string;
      description: string;
      id: number;
    }[];
    count: number | null;
    next: null;
    previous: null;
  };
}

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="bg-transparent hidden sm:inline-block cursor-pointer border bottom-[50%] z-50 rounded-full  absolute right-[5%] text-black"
      onClick={onClick}
    >
      <BannerArrowRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="bg-transparent hidden sm:inline-block cursor-pointer border bottom-[50%] z-50 rounded-full  absolute left-[5%] text-black"
      onClick={onClick}
    >
      <BannerArrowLeft />
    </div>
  );
}

export const Banner: React.FC<Type> = ({ data }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return (
      <div className=" h-[250px] md:h-[350px] lg:h-[450px]  w-full relative">
        <Skeleton className="h-full w-full bg-mercury rounded-xl" />
        <div className="absolute top-[50%] w-full left-[20%]  translate-y-[-50%] flex items-center gap-[20%] ">
          <div className="lg:space-y-6 md:space-y-4 space-y-2 lg:w-[250px] w-[20%]">
            <Skeleton className="md:h-4 h-3 w-full bg-steam rounded" />
            <Skeleton className="md:h-4 h-3 lg:mb-8 md:mb-5 mb-4 w-[80%] bg-steam rounded" />
            <Skeleton className="md:h-3 h-2 bg-steam rounded" />
            <Skeleton className="md:h-3 h-2 bg-steam rounded" />
            <Skeleton className="md:h-3 h-2 bg-steam rounded" />
            <Skeleton className="md:h-3 h-2 w-[80%] bg-steam rounded" />
          </div>
          <Skeleton className="md:h-[150px] h-[110px] w-[30%] rounded-2xl bg-steam" />
        </div>
      </div>
    );
  }
  return (
    <div className=" container overflow-hidden">
      <Slider {...settings}>
        {data?.results.map((item) => (
          <div
            key={item?.id}
            className={` h-[250px] md:h-[350px] lg:h-[450px]  w-full relative`}
          >
            <div className="w-full h-full">
              <img
                className="w-full h-full md:object-cover"
                src={item?.image}
                alt={item?.title}
              />
            </div>
            <div className="absolute lg:max-w-[350px] w-full md:max-w-[200px] max-w-[100px] text-3xl text-white font-bold top-1/2 left-[25%] translate-y-[-50%] translate-x-[-50%]">
              <h1
                dangerouslySetInnerHTML={{ __html: item?.title }}
                className="lg:text-base xl:text-lg md:text-lg text-sm text-white font-semibold mb-8 w-full"
              ></h1>
              <p
                dangerouslySetInnerHTML={{ __html: item.description }}
                className="lg:text-base md:text-sm text-xs text-white font-normal "
              ></p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
