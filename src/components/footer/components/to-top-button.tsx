"use client";
import React from "react";
import { ArrowIcon } from "../../../../public/icon/arrow-icon";
import { Button } from "@/components/ui/button";
export const ToTopButton = () => {
  function scrollToTop() {
    var timerHandle = setInterval(function () {
      if (
        document.body.scrollTop != 0 ||
        document.documentElement.scrollTop != 0
      )
        window.scrollBy(0, -50);
      else clearInterval(timerHandle);
    }, 15);
  }
  return (
    <div>
      <div
        onClick={scrollToTop}
        className=" bg-property hidden md:flex  cursor-pointer  ic justify-center"
      >
        <span className="py-[15px]  text-white font-normal text-sm ">
          Back to top
        </span>
      </div>
      <Button
        onClick={scrollToTop}
        className="px-5 py-4 z-50 fixed md:hidden bottom-20 right-0 bg-steam"
        variant={"default"}
      >
        <ArrowIcon />
      </Button>
    </div>
  );
};
