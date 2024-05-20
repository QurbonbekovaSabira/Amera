import React from "react";
import logo from "../../../public/icon/logo.png";
import { Headphone } from "../../../public/icon/headphone";
import Link from "next/link";
import { Button } from "../ui/button";
import { Actives } from "./components/actives";
import { Metadata } from "next";
import { FixedHeader } from "./components/fixed-header";
import SearchInput from "./components/search-input";
import { useGetCatrgories } from "./service/useGetCategories";
import { Drower } from "./components/drower";
import { useGetSubcategory } from "@/service/useGetSubcategory";
export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("http://localhost:3000"),
};

const Header = async () => {
  const data = await useGetSubcategory();

  return (
    <div>
      <div className="py-[15px]">
        <div className="pb-4 border-b border-squant hidden sm:block">
          <div className=" container grow text-center md:flex md:items-center md:justify-between">
            <p className="mb-2 text-squant md:m-0">
              Welcome to Worldwide Electronics Store
            </p>
            <ul className=" sm:flex sm:items-center sm:gap-4 sm:justify-center">
              <li>
                <Link className="cursor-pointer text-squant" href="/profile">
                  My account<span className="text-mercury">|</span>
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer text-squant" href="/profile">
                  My account<span className="text-mercury">|</span>
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer text-squant" href="/profile">
                  My account<span className="text-mercury">|</span>
                </Link>
              </li>
              <li>
                <Link className="cursor-pointer text-squant" href="/profile">
                  My account
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container grow sm:py-5 flex items-center   justify-between gap-6 flex-col lg:flex-row">
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link href={"/"}>
              <img src={logo.src} alt="logo " />
            </Link>
            <div className="w-10 h-10 lg:hidden">
              <Drower data={data.results} />
            </div>
          </div>

          <div className="hidden xl:flex items-center gap-4">
            <Headphone />
            <div className="flex flex-col">
              <p className="font-normal text-squant text-sm">Hotline Free:</p>
              <a
                className="font-normal text-black text-sm"
                href="tel:06-900-6789-00"
              >
                06-900-6789-00
              </a>
            </div>
          </div>

          <div className="lg:w-[50%] grow w-[100%] lg:block ">
            <SearchInput />
          </div>
          <Actives />
        </div>
        <div>
          <FixedHeader data={data.results} />
        </div>
      </div>
    </div>
  );
};

export default Header;
