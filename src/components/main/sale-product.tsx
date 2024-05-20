"use client";
import React, { useEffect } from "react";
import { ProductVarientType } from "../type";
import { SaleIcon } from "./sale-icon";
import { clear } from "console";
import { describe } from "node:test";
import Link from "next/link";

interface Type {
  data: ProductVarientType;
}

const SaleProduct = (data: Type) => {
  const [min, setMin] = React.useState(60);
  const [sec, setSec] = React.useState(60);
  useEffect(() => {
    if (sec === 0) {
      setMin((p) => p - 1);
      setSec(60);
    }
    let id = setTimeout(() => {
      setSec((p) => p - 1);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [sec]);

  return (
    <Link
      href={`/shop/${data.data.id}`}
      className="group w-full bg-white p-2 sm:grid sm:grid-cols-2 items-center"
    >
      <div className="w-full  md:w-[100%] relative">
        <SaleIcon />
        <div className="group-hover:hidden w-full inline-block lg:h-[250px]">
          <img
            className="w-full h-full"
            src={data?.data?.images[0]?.image}
            alt={data.data.title}
          />
        </div>
        <div className="group-hover:inline-block w-[80%] hidden lg:h-[250px]">
          <img
            className="w-full h-full"
            src={
              data?.data?.images[1]?.image
                ? data?.data?.images[1]?.image
                : data?.data?.images[0]?.image
            }
            alt={data.data.title}
          />
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg group-hover:underline font-semibold text-yellow mb-2">
          {data.data.title}
        </h3>
        <p className="text-black-out font-medium text-lg mb-2">
          $ {data?.data.price}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: data?.data?.other_detail,
          }}
          className="text-sm font-normal mb-4 text-goshawk-grey h-[80px] overflow-hidden"
        ></div>
        <div>
          <p className="block my-4 text-lg font-medium text-black-out">
            Hurry up! Special offer:
          </p>
          <div className="flex items-center gap-2 md:gap-4">
            <div className=" py-2 px-3 sm:w-[80px] sm:px-2 sm:py-4  rounded-full flex flex-col justify-center bg-maui-mist">
              <p className="font-medium text-xs sm:text-base text-center text-goshawk-grey">
                54
              </p>
              <p className="text-black-out text-center font-medium text-xs sm:text-base">
                DAYS
              </p>
            </div>
            <div className=" py-2 px-3 sm:px-2 sm:py-4 sm:w-[80px] rounded-full flex flex-col justify-center bg-maui-mist">
              <p className="font-medium text-xs sm:text-base text-center text-goshawk-grey">
                13
              </p>
              <p className="text-black-out text-center font-medium text-xs sm:text-base">
                HRS
              </p>
            </div>
            <div className=" py-2 px-3 sm:px-2 sm:py-4 sm:w-[80px] rounded-full flex flex-col justify-center bg-maui-mist">
              <p className="font-medium text-xs sm:text-base text-center text-goshawk-grey">
                {min}
              </p>
              <p className="text-black-out text-center font-medium text-xs sm:text-base">
                MINS
              </p>
            </div>
            <div className=" py-2 px-3 sm:px-2 sm:py-4 sm:w-[80px] rounded-full flex flex-col justify-center bg-maui-mist">
              <p className="font-medium text-xs sm:text-base text-center text-goshawk-grey">
                {sec}
              </p>
              <p className="text-black-out text-center font-medium text-xs sm:text-base">
                SECS
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SaleProduct;
