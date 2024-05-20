import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ChekoutForm } from "./components/chekout-form";
const ChekoutMain = dynamic(() => import("./components/chekout-main"));
const CheckoutPage = () => {
  return (
    <>
      <section>
        <div className="bg-[url(/img/chekoutBg.jpg)] sm:h-[400px] h-[350px] md:h-[450px] lg:h-[500px] w-full object-cover flex items-center justify-center">
          <div className="container">
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-normal mb-[5px] text-white text-6xl">
                Checkout
              </h2>
              <div className="flex items-center gap-1">
                <Link
                  className="text-basalt-grey text-sm font-normal"
                  href={"/"}
                >
                  Home /
                </Link>
                <p className="text-white text-sm font-normal">Checkout</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container">
          <h2 className="lg:text-3xl  md:text-2xl text-sm text-black-out font-medium mb-6">
            Billing Details
          </h2>
          <div className="flex lg:flex-row flex-col gap-6">
            <ChekoutForm />

            <div className="lg:max-w-[30%] max-w-full w-full">
              <ChekoutMain />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
