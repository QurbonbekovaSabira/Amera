import React from "react";
import Link from "next/link";
// import { Table } from "./components/table";
import dynamic from "next/dynamic";

const Table = dynamic(() => import("./components/table"), { ssr: false });

const MyCartpage = () => {
  return (
    <>
      <section>
        <div className="bg-[url(/img/chekoutBg.jpg)] sm:h-[400px] h-[350px] md:h-[450px] lg:h-[500px] w-full object-cover flex items-center justify-center">
          <div className="container">
            <div className="flex flex-col justify-center items-center">
              <h2 className="font-normal mb-[5px] text-white text-6xl">
                My Cart
              </h2>
              <div className="flex items-center gap-1">
                <Link
                  className="text-basalt-grey text-sm font-normal"
                  href={"/"}
                >
                  Home /
                </Link>
                <p className="text-white text-sm font-normal">My cart</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-12 pt-20">
        <div className="container">
          <Table />
        </div>
      </section>
    </>
  );
};

export default MyCartpage;
