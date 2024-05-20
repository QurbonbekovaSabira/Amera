import React from "react";
import { ShopMain } from "./components/shop-main";
import { useGetCatrgories } from "@/components/header/service/useGetCategories";
import { useGetProductVariant } from "./service/useGetProductVariant";
import Link from "next/link";

const ShopPage = () => {
  return (
    <section className="pb-12">
      <div className="container">
        <div className="mt-[30px] mb-[40px] flex items-center gap-1">
          <Link href="/" className="text-sm font-normal text-basalt-grey">
            Home /{" "}
          </Link>
          <p className="text-sm font-normal text-goshawk-grey">Shop</p>
        </div>
        <ShopMain />
      </div>
    </section>
  );
};

export default ShopPage;
