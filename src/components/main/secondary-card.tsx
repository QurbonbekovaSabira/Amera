import React from "react";
import { ProductVarientType } from "../type";
import Link from "next/link";
export const SecondaryCard: React.FC<{ data: ProductVarientType }> = ({
  data,
}) => {
  return (
    <div className="group flex items-center px-[20px] py-[14px] rounded-sm bg-white w-full max-w-full">
      <div className="max-w-[116px] w-full h-[116px]">
        <img
          className="group-hover:hidden w-[80%] h-full"
          src={data?.images[0]?.image}
          alt=""
        />
        <img
          className="group-hover:block hidden w-[80%] h-full"
          src={
            data?.images[1]?.image ? data.images[1].image : data.images[0].image
          }
          alt={data.title}
        />
      </div>
      <div className="pl-[10px] pt-4">
        <p className="text-basalt-grey font-normal mb-[5px] text-xs">
          Quentity:{data.quantity}
        </p>
        <Link
          href={`/shop/${data.id}`}
          className="text-sm cursor-pointer text-yellow mb-[15px] hover:underline transition-all duration-300"
        >
          {data.title}
        </Link>
        <p className="text-lg text-black-out font-medium">${data.price}</p>
      </div>
    </div>
  );
};
