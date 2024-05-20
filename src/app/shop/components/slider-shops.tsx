"use client";
import React from "react";
import Slider from "react-slick";
import { Type } from "../service/useGetProductId";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fcb700",
        borderRadius: "100%",
        position: "absolute",
        top: "50%",
        right: "18%",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fcb700",
        borderRadius: "100%",
        position: "absolute",
        top: "50%",
        left: "18%",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

export const SliderShops: React.FC<{ data: Type }> = ({ data }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {data.images.map((item) => (
          <div className="" key={item.image_id}>
            <img
              className="md:w-[200px] w-[150px] h-[200px] mx-auto md:h-[250px]"
              key={item.image_id}
              src={item.image}
              alt={data.title}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
