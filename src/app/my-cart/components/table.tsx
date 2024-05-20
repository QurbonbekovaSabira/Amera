"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
// import { TableCart } from "./table-cart";
import { useDispatch } from "react-redux";
import { removeProduct } from "@/redux/product-reducer";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const TableCart = dynamic(() => import("./table-cart"), { ssr: false });

const Table = () => {
  const { products, totalPrice } = useSelector(
    (store: RootState) => store.product
  );
  const dispatch = useDispatch();
  console.log(products);

  return (
    <section>
      <div className="lg:w-[80%] w-full mx-auto">
        <div className="lg:flex hidden  items-center p-4 text-center mx-auto border border-steam">
          <div className="w-[5%] block  ">
            <p className="text-base font-normal  text-black-out ">Delete</p>
          </div>
          <div className="w-[10%] block  ">
            <p className="text-base font-normal text-black-out ">Image</p>
          </div>
          <div className="w-[40%] text-left  ">
            <p className="text-base font-normal text-black-out ">Product</p>
          </div>
          <div className="w-[10%] text-left  ">
            <p className="text-base font-normal text-black-out ">Price</p>
          </div>
          <div className="w-[15%] text-left  ">
            <p className="text-base font-normal text-black-out ">Quantity</p>
          </div>
          <div className="w-[20%] text-left py-4 ">
            <p className="text-base font-normal text-black-out ">Total</p>
          </div>
        </div>
        <div>
          {products.map((item) => (
            <TableCart key={item.id} data={item} />
          ))}
        </div>
        <div className="p-4 border flex-col lg:flex-row gap-2 border-steam flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-xl font-bold text-black-out">Subtotal:</p>
            <p className="text-xl font-medium text-black-out">${totalPrice}</p>
          </div>
          <Link href={"/chekout"}>
            <Button className="bg-yellow hover:bg-yellow hover:opacity-70 transition-all duration-300 text-white rounded-xl py-2">
              Proceed To Checkout
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Table;
