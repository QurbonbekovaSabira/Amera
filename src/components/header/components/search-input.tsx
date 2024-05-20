"use client";
import React, { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { ProductType } from "../type";
import Link from "next/link";
import { useParams } from "next/navigation";
const SearchInput = () => {
  const [data, setData] = React.useState<ProductType>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [input, setInput] = React.useState<null | string>(null);
  const url = process.env.NEXT_PUBLIC_URL;
  const [params, setParams] = React.useState<boolean>(false);
  const location = useParams();

  useEffect(() => {
    setParams(true);
    setInput(null);
  }, [location]);

  const submit = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_URL}/product_variant/?search=${input}`)
      .then((response) => {
        setTimeout(() => {
          setData(response.data);
        }, 500);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="relative">
      <form className=" mx-auto grow flex  relative  w-[100%] lg:flex items-center py-1 px-2  md:py-2 md:px-4 border-[2px] border-yellow rounded-3xl overflow-hidden">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="text-sm w-full outline-none pr-[90px]"
          type="text"
          placeholder="Search Products…"
        />
        <Button
          className="absolute border-none top-0 bottom-0 right-0 h-[100%]"
          type="button"
          variant={"destructive"}
          onClick={submit}
        >
          Search
        </Button>
      </form>
      {data.results.length > 0 && input && (
        <div className="z-50  bg-maui-mist absolute top-[130%] left-0 right-0">
          {data.results.map((item) => (
            <Link
              key={item.id}
              href={`/shop/${item.id}`}
              className="group w-[70%] mx-auto hover:bg-bg transition-all duration-300 cursor-pointer flex p-1  md:p-3 items-center justify-between"
            >
              <div className="w-[24px] h-[24px]">
                <img src={item?.images[0]?.image} alt={item.title} />
              </div>
              <p className="text-sm md:text-base text-black-out font-normal text-nowrap">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
