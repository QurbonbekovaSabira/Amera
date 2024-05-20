"use client";
import React from "react";
import Link from "next/link";
import { ArrowIcon } from "../../../../public/icon/arrow-icon";
import { MainCard } from "@/components/main/main-card";
import { nanoid } from "@reduxjs/toolkit";
import { ProductType } from "@/components/header/type";
import { categoryData } from "@/components/header/type";
import { SubCategoryType } from "../type";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export const ShopMain = () => {
  const [open, setOpen] = React.useState(false);
  const [subCtr, setSubCtr] = React.useState<number>(2181);
  const [atributes, setAtribute] = React.useState<{
    atribut: number | string;
    atr: number | string;
    category: number | string;
  }>({ atribut: "", atr: "", category: "" });
  const [productData, setProductData] = React.useState<ProductType | null>(
    null
  );
  const [subdata, setSubData] = React.useState<SubCategoryType | null>(null);
  const [data, setData] = React.useState<categoryData | null>(null);
  const [page, setPage] = React.useState<number>(1);

  React.useEffect(() => {
    const getSearch = async () => {
      try {
        const res = await fetch(`http://135.181.108.207/category/${subCtr}/`, {
          next: { revalidate: 60 },
        });

        const subData = await res.json();

        setSubData(subData);
        //categories
        const ctr = await fetch("http://135.181.108.207/category/", {
          next: { revalidate: 60 },
        });
        const ctrData = await ctr.json();
        setData(ctrData);
        //pagintaion
        const prd = await fetch(
          `http://135.181.108.207/product_variant/?limit=15&offset=${page}`
        );
        const prdData = await prd.json();
        setProductData(prdData);
      } catch (error) {
        console.log(error);
      }
    };
    getSearch();
  }, [subCtr, page]);

  if (!data && !productData && !subdata) {
    return <h2>Loading...</h2>;
  }
  const buttons = productData?.count;
  const arr = Array(buttons ? Math.ceil(buttons / 15) : 1).fill(null);

  return (
    <>
      <div className="md:flex lg:gap-6">
        <div className="lg:max-w-[300px] w-full md:max-w-[250px] grow mb-6 lg:mb-0">
          <h2 className="text-lg text-black-out font-medium mb-5">
            Product Categories
          </h2>
          <div className="lg:h-[300px] h-[120px] md:h-[250px] overflow-y-scroll w-full">
            {data?.results?.map((item) => (
              <div
                key={nanoid()}
                onClick={() => setOpen(!open)}
                className="mb-[10px] mr-[15px]"
              >
                <div
                  key={nanoid()}
                  className="flex items-center justify-between"
                >
                  <p
                    key={nanoid()}
                    className="text-sm font-normal text-basalt-grey cursor-pointer"
                  >
                    {item.title} ({item.children.length})
                  </p>
                  <div
                    key={nanoid()}
                    className="w-[8px] rotate-90 h-2 stroke-basalt-grey cursor-pointer"
                  >
                    <ArrowIcon />
                  </div>
                </div>
                {item.children.length > 0 && (
                  <div className="ml-4 mt-2 mb-3 flex flex-col gap-1">
                    {item?.children?.map((item) => (
                      <div key={nanoid()} onClick={() => setSubCtr(item.id)}>
                        <p className="text-sm font-normal text-basalt-grey cursor-pointer">
                          {item.title} (0)
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {subdata?.attributes.length && (
            <div
              key={nanoid()}
              className={`${
                subdata?.attributes?.length > 0
                  ? " flex flex-col gap-3 mt-8"
                  : "hidden"
              }`}
            >
              {subdata?.attributes.map((item) => (
                <div key={item.id}>
                  <h3 className="text-xl font-medium text-black-out mb-4">
                    {item.title}
                  </h3>
                  <div className="flex items-center flex-wrap gap-2">
                    {item.values.map((lists) => (
                      <p
                        className="text-base text-goshawk-grey font-normal"
                        key={lists.id}
                      >
                        {lists.value}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="grid xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 justify-center lg:justify-between max-w-[280px] mx-auto sm:max-w-full w-full grow grid-cols-1  sm:grid-cols-2 items-center gap-8">
            {productData?.results?.map((item) => (
              <MainCard key={item.id} data={item} />
            ))}
          </div>
          <div className="flex items-center gap-1 justify-center mt-6 lg:justify-between">
            <Pagination>
              <PaginationContent>
                <PaginationItem
                  className="cursor-pointer"
                  onClick={() => arr.length > page && setPage(page - 5)}
                >
                  <PaginationPrevious />
                </PaginationItem>
                {arr.map((i, index) => (
                  <PaginationItem
                    onClick={() =>
                      index === 0 ? setPage(1) : setPage(index * 5)
                    }
                    key={index}
                    className="cursor-pointer"
                  >
                    {page / 5 === index || page === 1 ? (
                      <PaginationLink isActive>{index + 1}</PaginationLink>
                    ) : (
                      <PaginationLink>{index + 1}</PaginationLink>
                    )}
                  </PaginationItem>
                ))}

                <PaginationItem
                  className="cursor-pointer"
                  onClick={() => page !== 1 && setPage(page + 5)}
                >
                  <PaginationNext />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};
