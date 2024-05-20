"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { MainCard } from "@/components/main/main-card";
import notdata from "../../../../public/icon/no-data.webp";
import { nanoid } from "@reduxjs/toolkit";
export const LikesMain = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const { like } = useSelector((store: RootState) => store.like);
  return (
    <div
      key={nanoid()}
      className="flex items-center gap-6 flex-wrap justify-center md:justify-normal"
    >
      {isClient &&
        like.length > 0 &&
        like.map((item: any) => (
          <div key={item.id} className="max-w-[250px] w-full">
            <MainCard key={item.id} data={item} />
          </div>
        ))}
      {(!isClient || like.length === 0) && (
        <div
          key={nanoid()}
          className="lg:max-w-[650px] md:max-w-[450px] max-w-[400px] w-full lg:h-[350px] md:h-[250px] h-[160px] flex items-center justify-center sm:h-[180px] mx-auto"
        >
          <img src={notdata.src} alt="no data" />
        </div>
      )}
    </div>
  );
};
