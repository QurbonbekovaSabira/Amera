import React, { useState } from "react";
import noData from "../../../../public/img/nod-data.webp";
import { MainCard } from "@/components/main/main-card";
import { useGetProductVariant } from "./service/useGetProductVariant";

const CategoryPage = async ({ params }: { params: { id: string } }) => {
  const data = await useGetProductVariant(params?.id);


  return (
    <section className="py-8">
      <div className="container">
        {data.results.length === 0 && (
          <div className="w-[80%] flex items-center justify-center mx-auto h-auto">
            <img src={noData.src} alt="no data" />
          </div>
        )}
        {data.results.length > 0 && (
          <div className="grid lg:grid-cols-4 grid-cols-1 justify-center sm:justify-normal sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 items-center gap-6">
            {data?.results?.map((item) => (
              <div key={item.id}>
                <MainCard data={item} />
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center gap-1 justify-center mt-6 lg:justify-between"></div>
      </div>
    </section>
  );
};

export default CategoryPage;
