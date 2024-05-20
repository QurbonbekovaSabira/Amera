"use client";
import React, { useEffect, useState } from "react";
import { Star } from "../../../../public/icon/star";
import Bag from "../../../../public/icon/bag";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import Link from "next/link";
export const Actives = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { products } = useSelector((store: RootState) => store.product);
  const { like } = useSelector((store: RootState) => store.like);

  return (
    <div className="lg:flex hidden items-center gap-6">
      <div className="relative">
        <Link href={"/likes"}>
          <Star />
          <p className="text-xs flex flx-col justify-center absolute top-0 right-[-20px] translate-[-50%] px-2 py-1 bg-mercury rounded-full font-medium text-black-out">
            {isClient ? like?.length : "0"}
          </p>
        </Link>
      </div>
      <div className="relative cursor-pointer">
        <Link href={"/my-cart"}>
          <Bag />
          <p className="text-xs font-medium text-black-out flex flx-col justify-center absolute top-0 right-[-20px] translate-[-50%] px-2 py-1 bg-mercury rounded-full ">
            {isClient ? products?.length : "0"}
          </p>
        </Link>
      </div>
    </div>
  );
};
