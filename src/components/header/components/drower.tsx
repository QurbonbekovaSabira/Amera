"use client";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { XIcon } from "lucide-react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { Menu } from "lucide-react";
import { TypeCategory } from "../type";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowIcon } from "../../../../public/icon/arrow-icon";
export const Drower: React.FC<TypeCategory> = (data) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const params = useParams();
  useEffect(() => {
    setIsOpen(false);
    setOpen(false);
  }, [params]);
  return (
    <div>
      <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button onClick={() => setIsOpen(true)} size="icon">
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="h-screen bg-blackLight top-0 right-0 left-auto mt-0 w-[100%] rounded-none ">
            <div className="w-[300px] bg-white h-screen relative">
              <div className="flex relative pt-5 items-center gap-4 flex-col">
                <Link href={"/"} className="text-squant">
                  Home
                </Link>
                <Link href={"/shop"} className="text-squant ">
                  Shop
                </Link>
                <Link href={"/blog"} className="text-squant ">
                  Blog
                </Link>
                <Link href={"/contact"} className="text-squant">
                  Contact
                </Link>
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger className="text-squant text-center outline-none cursor-pointer flex items-center gap-2 font-normal text-base">
                    Category
                    <div className={`${!open && "rotate-180"}`}>
                      <ArrowIcon />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className=" w-[150px] overflow-scroll h-[200px] flex flex-col items-center justify-center bg-white shadow-lg shadow-squant z-50">
                    {data.data.map((item) => (
                      <DropdownMenuItem key={item?.id}>
                        <Link href={`/category/${item?.id}`}>
                          <div className="w-full h-auto flex items-center gap-1 border-b  hover:scale-[1.2] delay-200 transition-all border-mercury  ">
                            <div className="w-[35px] h-[35px] object-cover">
                              <img src={item?.image} alt={item?.title} />
                            </div>
                            <p className="text-xs sm:text-sm font-normal hover:text-yellow">
                              {item?.title}
                            </p>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
