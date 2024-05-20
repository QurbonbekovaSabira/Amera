import React from "react";
import { ToTopButton } from "./components/to-top-button";
import image from "../../../public/img/carts.jpg";
import Link from "next/link";
import { FixedFooter } from "./components/fixed-footer";
const Footer = () => {
  return (
    <div>
      <FixedFooter />
      <ToTopButton />
      <div className="bg-bigStone">
        <div className="container pt-[70px] pb-[90px] sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-5 ">
          <div>
            <h2 className="text-base text-white font-medium mb-[30px]">
              Componey us
            </h2>
            <div className="flex flex-col gap-[5px]">
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/about"}
              >
                About us
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/contact"}
              >
                Cantact us
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/about"}
              >
                Careers
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/about"}
              >
                Business With Us
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/about"}
              >
                Press & Talent
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-base text-white font-medium mb-[30px]">
              Let Us Help You
            </h2>
            <div className="flex flex-col gap-[5px]">
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/profile"}
              >
                Orders
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/profile"}
              >
                Download
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/profile"}
              >
                Addresess
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/profile"}
              >
                Account details
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/profile"}
              >
                Lost Password
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-base text-white font-medium mb-[30px]">
              Quick Links
            </h2>
            <div className="flex flex-col gap-[5px]">
              <Link
                className="text-steam hover:text-yellow hover:underline  hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/profile"}
              >
                Special Offers
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/profile"}
              >
                Gift Cards
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/profile"}
              >
                F21 Red
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/profile"}
              >
                Privacy Policy
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/profile"}
              >
                Team of Use
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/profile"}
              >
                Portfolio
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-base text-white font-medium mb-[30px]">
              Componey us
            </h2>
            <div className="flex flex-col gap-[5px]">
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/about"}
              >
                About us
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/contact"}
              >
                Cantact us
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/about"}
              >
                Careers
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/about"}
              >
                Business With Us
              </Link>
              <Link
                className="text-steam hover:text-yellow hover:underline hover:underline-offset-1  pl-[5px] font-normal text-sm"
                href={"/about"}
              >
                Press & Talent
              </Link>
            </div>
          </div>
        </div>
        <span className="block h-[1px]  bg-dark-sea "></span>
      </div>
      <div className="bg-infinity py-[30px] ">
        <div className="container ">
          <div className="lg:flex-row flex flex-col items-center gap-[35px] ">
            <p className="text-santas-grey font-normal text-nowrap text-sm mr-[25px]">
              Copyright © 2019 amera Theme by Lionthemes88
            </p>

            <div className="flex flex-col md:flex-row gap-6 lg:pb-0 pb-[50px] items-center justify-center lg:justify-between w-full grow">
              <div className=" flex  items-center gap-2">
                <Link
                  href="/profile"
                  className="flex hover:text-yellow hover:underline hover:underline-offset-1hover:underline hover:underline-offset-1 items-center gap-[25px] text-steam text-sm font-normal"
                >
                  <span className="w-[1px] inline-block h-[15px] bg-property"></span>
                  Site Map
                </Link>
                <Link
                  href="/profile"
                  className="flex  hover:text-yellow hover:underline hover:underline-offset-1hover:underline hover:underline-offset-1 items-center mx-[25px] text-steam text-sm font-normal"
                >
                  Search Terms
                </Link>
                <Link
                  href="/profile"
                  className="flex  hover:text-yellow hover:underline hover:underline-offset-1hover:underline hover:underline-offset-1 items-center text-steam text-sm font-normal"
                >
                  Advanced Search
                </Link>
                <Link
                  href="/contact"
                  className="flex  hover:text-yellow hover:underline hover:underline-offset-1hover:underline hover:underline-offset-1 items-center mx-[25px] text-steam text-sm font-normal"
                >
                  Contact Us
                </Link>
              </div>

              <img
                className="h-[30px] max-w-[80%] w-full md:max-w-[250px]"
                src={image.src}
                alt="cart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
