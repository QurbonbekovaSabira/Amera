import React from "react";
import { useGetProductId } from "../service/useGetProductId";
import { SliderShops } from "../components/slider-shops";
import Link from "next/link";
import { ActivesShop } from "../components/actives-shop";
import { GetTvSale } from "@/service/get-tv-sale";
import { MainCard } from "@/components/main/main-card";
const ShopProductpage = async ({ params }: { params: { id: string } }) => {
  const [data, productData] = await Promise.all([
    useGetProductId(params.id),
    GetTvSale(5, 2),
  ]);

  return (
    <section className="pt-6 pb-28">
      <div className="container">
        <div className="mt-[30px] mb-[40px] flex items-center gap-1">
          <Link href={"/"} className="text-sm font-normal text-basalt-grey">
            Home /{" "}
          </Link>
          <Link href={"/shop"} className="text-sm font-normal text-basalt-grey">
            Shop /{" "}
          </Link>
          <p className="text-sm font-normal text-goshawk-grey">{data.title}</p>
        </div>
        <div className="lg:flex mb-20 items-center overflow-hidden justify-center gap-2 relative">
          <div className="lg:max-w-[40%] max-w-[100%] sm:max-w-[100%] w-full overflow-hidden">
            <SliderShops data={data} />
          </div>
          <div className="lg:max-w-[55%] max-w-full w-full overflow-hidden  flex flex-col  justify-start">
            <h2 className="text-black-out font-medium mb-5 text-lg md:text-xl">
              {data.title}
            </h2>
            <p className="lg:text-2xl text-xl font-medium mb-5 text-black-out">
              $ {data.price}
            </p>
            <div
              className="text-goshawk-grey mb-5 font-normal text-xs md:text-sm "
              dangerouslySetInnerHTML={{ __html: data.other_detail }}
            ></div>
            <ActivesShop data={data} />
          </div>
        </div>
        <div>
          <h2 className="font-medium text-nowrap text-black-out text-lg md:text-xl flex items-center gap-4 mb-8">
            Realeted Products
            <span className="block w-full h-[1px] bg-steam"></span>
          </h2>
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-normal">
            {productData.results.map((item) => (
              <div key={item.id} className="max-w-[250px] w-full">
                <MainCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopProductpage;
