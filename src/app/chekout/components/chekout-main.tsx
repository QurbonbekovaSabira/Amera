"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const ChekoutMain = () => {
  const { products, totalPrice } = useSelector(
    (store: RootState) => store.product
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (isClient) {
    return (
      <>
        <div className="px-4 pt-4 bg-white-smoke border border-mercury">
          <p className="sm:text-lg text-base font-medium text-black-out pb-4 border-b border-mercury">
            Your order
          </p>
          <div>
            {products.length > 0 &&
              products.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-2 items-center justify-center border border-mercury"
                >
                  <p className="text-goshawk-grey text-xs sm:text-base p-4 border-r border-mercury font-normal flex items-center gap-1">
                    {item.title}
                    <span className="font-medium">x{item.userCount}</span>
                  </p>
                  <p className="text-xs sm:text-base p-4 text-goshawk-grey font-normal">
                    ${item.userPrice}
                  </p>
                </div>
              ))}
            <div className="grid grid-cols-2 border-mercury justify-center items-center">
              <p className="text-xs sm:text-base font-bold border-r border-mercury p-4 pb-6 text-goshawk-grey">
                Subtotal
              </p>
              <p className="md:text-lg text-base font-normal sm:font-medium p-4 pb-6 text-yellow">
                ${totalPrice ? totalPrice : 0}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ChekoutMain;
