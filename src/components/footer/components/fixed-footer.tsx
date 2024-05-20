"use client";
import React, { useEffect, useState } from "react";
import { ProfileIcon } from "../../../../public/icon/profile-icon";
import { BagMiniIcon } from "../../../../public/icon/bag-mini-icon";
import { StarMiniIcon } from "../../../../public/icon/star-mini-icon";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import Link from "next/link";
export const FixedFooter = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { products } = useSelector((store: RootState) => store.product);
  const { like } = useSelector((store: RootState) => store.like);
  return (
    <div className="bg-white grid grid-cols-3 items-center  w-full bottom-0 lg:flex lg:flex-col  lg:w-auto lg:h-[180px] shadow-lg shadow-squant fixed lg:top-[50%] lg:right-0 lg:translate-y-[-50%]">
      <Link href={"/profile"} className="w-[60px]  mx-auto  flex items-center justify-center h-[60px] lg:border-b cursor-pointer border-mercury">
        <ProfileIcon />
      </Link>
      <Link
        href={"/my-cart"}
        className="w-[60px] relative mx-auto flex items-center justify-center h-[60px]  lg:border-b cursor-pointer border-mercury"
      >
        <BagMiniIcon />
        <span className="block absolute  top-[20%] right-[20%]  bg-yellow text-xs rounded-full px-1">
          {isClient ? products.length : "0"}
        </span>
      </Link>
      <Link
        href={"/likes"}
        className="w-[60px] relative  mx-auto  flex items-center justify-center h-[60px] border-b cursor-pointer border-mercury"
      >
        <StarMiniIcon />
        <span className="block absolute top-[20%] right-[20%]  bg-yellow text-xs rounded-full px-1">
          {isClient ? like.length : "0"}
        </span>
      </Link>
    </div>
  );
};
