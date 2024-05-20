"use client";
import React, { useEffect, useState } from "react";
import { ArrowIcon } from "../../../../public/icon/arrow-icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
interface Type {
  data: {
    id: number;
    title: string;
    image: string;
    children: {
      id: number;
      title: string;
      image: string;
    }[];
  }[];
}

export const FixedHeader: React.FC<Type> = (data) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollY2, setScrollY2] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setTimeout(() => {
        setScrollY(window.scrollY);
      }, 500);
    };
    setScrollY2(window.scrollY);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [open, setOpen] = useState(false);
  const params = useParams();
  useEffect(() => {
    setOpen(false);
  }, [params]);

  return (
    <div className="hidden lg:block">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className={` ${scrollY2 > 0 && scrollY == 0 && "relative"} ${
          scrollY > 0 && "fixed top-0 bg-whiteOp"
        } py-[15px] border-y  z-50 shadow-card bg-white w-full`}
      >
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href={"/"}
              className="text-squant hover:text-yellow transition-all duration-300 flex items-center gap-2"
            >
              Home
              <div className="rotate-180">
                <ArrowIcon />
              </div>
            </Link>
            <Link
              href={"/shop"}
              className="text-squant hover:text-yellow transition-all duration-300 flex items-center gap-2"
            >
              Shop
              <div className="rotate-180">
                <ArrowIcon />
              </div>
            </Link>

            <Link
              href={"/"}
              className="text-squant hover:text-yellow transition-all duration-300 flex items-center gap-2"
            >
              Contact
              <div className="rotate-180">
                <ArrowIcon />
              </div>
            </Link>
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger className="text-squant hover:text-yellow transition-all duration-300 outline-none cursor-pointer flex items-center gap-2 font-normal text-base">
                Category
                <div className={`${!open && "rotate-180"}`}>
                  <ArrowIcon />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="ml-5 flex w-[800px] overflow-x-scroll items-center justify-center bg-white z-20">
                {data.data.map((item) => (
                  <DropdownMenuItem key={item?.id}>
                    <Link href={`/category/${item?.id}`}>
                      <div className="lg:w-[40px] border-r h-full hover:scale-[1.2] delay-200 transition-all border-mercury lg:h-[40px] xl:w-[60px] xl:h-[60px] 2xl:w-[80px] 2xl:h-[80px]">
                        <img src={item?.image} alt={item?.title} />
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-4 ">
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue
                  placeholder="English"
                  className="text-squant font-medium"
                />
              </SelectTrigger>
              <SelectContent className="z-10 bg-white">
                <SelectItem className="text-squant font-medium" value="RU">
                  Russion
                </SelectItem>
                <SelectItem className="text-squant font-medium" value="English">
                  English
                </SelectItem>
                <SelectItem className="text-squant font-medium" value="UZ">
                  Uzbek
                </SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[100px]">
                <SelectValue
                  placeholder="US Dollar"
                  className="text-squant font-medium"
                />
              </SelectTrigger>
              <SelectContent className="z-10 bg-white">
                <SelectItem className="text-squant font-medium" value="EURO">
                  EURO
                </SelectItem>
                <SelectItem
                  className="text-squant font-medium"
                  value="US Dollar"
                >
                  US Dollar
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
