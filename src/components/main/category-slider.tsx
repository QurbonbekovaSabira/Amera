"use client";
import React, { useEffect } from "react";
import Slider from "react-slick";
import { Skeleton } from "@/components/ui/skeleton";
import { BannerArrowLeft } from "../../../public/icon/banner-arrow-left";
import { BannerArrowRight } from "../../../public/icon/banner-arrow-right";
import { ArrowLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
      className="bg-yellow cursor-pointer border top-0 z-50 rounded-full  absolute right-[0] text-black"
      onClick={onClick}
    >
      <div className="hidden lg:inline-block">
        <BannerArrowRight />
      </div>
      <div className="lg:hidden">
        <ArrowRight />
      </div>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="bg-yellow cursor-pointer border top-0 z-50 rounded-full  absolute right-[14%] sm:right-[8%] md:right-[5%] text-black"
      onClick={onClick}
    >
      <div className="hidden lg:inline-block">
        <BannerArrowLeft />
      </div>
      <div className="lg:hidden">
        <ArrowLeft />
      </div>
    </div>
  );
}

export const CategorySlider: React.FC<Type> = ({ data }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [isClient, setIsClient] = React.useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return (
      <div className="flex z-30 items-center gap-8  bg-transparent p-6 w-full">
        <Skeleton className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[180px] w-full  bg-mercury rounded-xl" />
        <Skeleton className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[180px] w-full  bg-mercury rounded-xl" />
        <Skeleton className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[180px] w-full  bg-mercury rounded-xl" />
        <Skeleton className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[180px] sm:inline-block hidden  w-full bg-mercury rounded-xl" />
        <Skeleton className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[180px] hidden md:inline-block w-full  bg-mercury rounded-xl" />
        <Skeleton className="h-[100px] sm:h-[120px] md:h-[140px] lg:h-[180px] hidden lg:inline-block w-full  bg-mercury rounded-xl" />
      </div>
    );
  }
  return (
    <div className="container">
      <Slider {...settings} className="gap-4">
        {data?.results.map((item) => (
          <div key={item.id} className="py-10 group w-[150px]">
            <Link href={`/category/${item.id}`}>
              <img
                className="object-contain py-1 sm:h-[80px] h-[80px] md:h-[100px] lg:h-[120px] bg-white w-[80%] cursor-pointer group-hover:scale-[1.2] mx-auto "
                src={item?.image}
                alt={item?.title}
              />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
