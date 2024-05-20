import { GetBannerData } from "@/service/get-banner";
import { Banner } from "@/components/main/banner";
import { CarIcon } from "../../public/icon/car-icon";
import { PlasticCardIcon } from "../../public/icon/plastic-card-icon";
import { HandMoneyIcon } from "../../public/icon/hand-money-icon";
import { CalendarIcon } from "../../public/icon/calendar-icon";
import { CategorySlider } from "@/components/main/category-slider";
import { useGetSubcategory } from "@/service/useGetSubcategory";
import { MessageCircle } from "lucide-react";
import { GetTvSale } from "@/service/get-tv-sale";
import { MainCard } from "@/components/main/main-card";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import banner1 from "../../public/img/banner14.jpg.png";
import banner2 from "../../public/img/banner15.jpg.png";
import banner3 from "../../public/img/banner13.jpg";
import banner4 from "../../public/img/banner11.jpg";
import miniBanner from "../../public/img/mini-banner.jpg";
import miniBanner2 from "../../public/img/mini-banner-right.jpg";
import { SecondaryCard } from "@/components/main/secondary-card";
const SaleProduct = dynamic(() => import("@/components/main/sale-product"), {
  ssr: false,
});

export default async function Home() {
  const [data, categoryData, tvData, bannerData, secondaryBannerData] =
    await Promise.all([
      GetBannerData(),
      useGetSubcategory(),
      GetTvSale(4),
      GetTvSale(6, 2),
      GetTvSale(6, 3),
    ]);
  const miniData = tvData.results.splice(1);

  return (
    <>
      <section className="pb-4 bg-bg">
        <Banner data={data} />
      </section>
      <section className="bg-bg">
        <div className="container">
          <CategorySlider data={categoryData} />
        </div>
      </section>
      <section className="bg-bg">
        <div className="container">
          <div className="lg:py-8 px-8 py-6  bg-white grid-cols-1 sm:grid-cols-2 grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="flex items-center gap-2 sm:border-r border-mercury">
              <CarIcon />
              <div className="flex flex-col">
                <p className="font-medium text-sm text-black-out">
                  FREE DELIVERY
                </p>
                <p className="text-sm font-normal text-goshawk-grey">
                  For all oders over $120
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:border-r border-mercury">
              <PlasticCardIcon />
              <div className="flex flex-col">
                <p className="font-medium text-sm text-black-out">
                  SAFE PAYMENT
                </p>
                <p className="text-sm font-normal text-goshawk-grey">
                  100% secure payment
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:border-r border-mercury">
              <HandMoneyIcon />
              <div className="flex flex-col">
                <p className="font-medium text-sm text-black-out">
                  Shop With Confidence
                </p>
                <p className="text-sm font-normal text-goshawk-grey">
                  If goods have problems
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:border-r border-mercury">
              <div className="text-yellow">
                <MessageCircle />
              </div>
              <div className="flex flex-col">
                <p className="font-medium text-sm text-black-out">
                  24/7 Help Center
                </p>
                <p className="text-sm font-normal text-goshawk-grey">
                  Dedicated 24/7 support
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CalendarIcon />
              <div className="flex flex-col">
                <p className="font-medium text-sm text-black-out">
                  Friendly Services
                </p>
                <p className="text-sm font-normal text-goshawk-grey">
                  30 day satisfaction guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-bg">
        <>
          <div className="container py-12">
            <div className="grid grid-cols-2 gap-5 mb-8">
              <div className="flex items-center gap-4 ">
                <h2 className="font-bold flex items-center flex-nowrap text-nowrap gap-1 text-black-out text-lg">
                  Top Flash <span className="font-normal"> Deals</span>
                </h2>
                <span className="block w-full h-[2px] bg-mercury"></span>
              </div>

              <div className="flex items-center gap-4">
                <h2 className="font-bold flex items-center flex-nowrap text-nowrap gap-1 text-black-out text-lg">
                  Top Flash <span className="font-normal"> Deals</span>
                </h2>
                <span className="block w-full h-[2px] bg-mercury"></span>
              </div>
            </div>
            <div className=" grid xl:grid-cols-2 gap-4">
              <Suspense fallback={<Skeleton className="w-full h-[160px]" />}>
                <div>
                  <SaleProduct data={tvData.results[0]} />
                </div>
              </Suspense>
              <Suspense
                fallback={
                  <div className="flex items-center xl:justify-between lg:flex-nowrap flex-wrap gap-6 sm:justify-start justify-center xl:gap-3">
                    <Skeleton className="max-w-[250px]  h-[160px] w-full bg-steam rounded" />
                    <Skeleton className="max-w-[250px]  h-[160px] w-full bg-steam rounded" />
                    <Skeleton className="max-w-[250px]  h-[160px] w-full bg-steam rounded" />
                  </div>
                }
              >
                <div className="grid grid-cols-1 sm:grid-cols-3  items-center   gap-6 justify-center  xl:gap-3">
                  {miniData?.map((item) => (
                    <MainCard key={item.id} data={item} />
                  ))}
                </div>
              </Suspense>
            </div>
          </div>
        </>
      </section>
      <section className="bg-bg pb-9">
        <div className="container flex items-center gap-4 md:flex-row flex-col">
          <div className="w-full relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
            <img
              src={banner1.src}
              alt="banner"
              className="w-full h-auto relative z-0 rounded-lg transition-all duration-500"
            />
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
          </div>
          <div className="w-full relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
            <img
              src={banner2.src}
              alt="banner"
              className="w-full h-auto  relative z-0 rounded-lg transition-all duration-500"
            />
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
          </div>
        </div>
      </section>
      <section className="bg-bg pb-8">
        <div className="container">
          <div className="flex items-center gap-4 mb-[30px]">
            <h2 className="font-bold flex items-center flex-wrap sm:flex-nowrap text-nowrap gap-1 text-black-out text-lg">
              Clothing & Bags Products
              <span className="font-normal">Products</span>
            </h2>
            <span className="block w-full h-[2px] bg-mercury"></span>
          </div>
          <div className="flex items-center gap-6 overflow-hidden">
            <div className="h-[90%] hidden md:block">
              <img className="h-[305px]" src={miniBanner.src} alt="banner" />
            </div>
            <div className="hidden w-full lg:grid grid-cols-3 grid-rows-2 gap-4 justify-between">
              {bannerData.results.map((item) => (
                <SecondaryCard key={item.id} data={item} />
              ))}
            </div>
            <div className="hidden w-full lg:hidden sm:grid grid-cols-2 grid-rows-2 gap-4 justify-between">
              {bannerData.results.slice(0, 4).map((item) => (
                <SecondaryCard key={item.id} data={item} />
              ))}
            </div>
            <div className="grid sm:hidden justify-center  grid-cols-1 grid-rows-2 gap-4 w-full">
              {bannerData.results.slice(0, 2).map((item) => (
                <SecondaryCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-bg pb-8">
        <div className="container">
          <div className="flex items-center justify-between gap-4 mb-[30px]">
            <h2 className="font-bold flex items-center flex-wrap sm:flex-nowrap text-nowrap gap-1 text-black-out text-lg">
              Chair & Table
              <span className="font-normal">Products</span>
            </h2>
            <span className="block w-full h-[2px] bg-mercury"></span>
          </div>
          <div className="flex items-center gap-6 overflow-hidden">
            <div className="hidden w-full lg:grid grid-cols-3 grid-rows-2 gap-4 justify-between">
              {secondaryBannerData.results.map((item) => (
                <SecondaryCard key={item.id} data={item} />
              ))}
            </div>
            <div className="hidden w-full lg:hidden sm:grid grid-cols-2 grid-rows-2 gap-4 justify-between">
              {secondaryBannerData.results.slice(0, 4).map((item) => (
                <SecondaryCard key={item.id} data={item} />
              ))}
            </div>
            <div className="grid sm:hidden justify-center  grid-cols-1  gap-4 w-full">
              {secondaryBannerData.results.slice(0, 2).map((item) => (
                <SecondaryCard key={item.id} data={item} />
              ))}
            </div>
            <div className="h-[90%] hidden md:block">
              <img className="h-[305px]" src={miniBanner2.src} alt="banner" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg pb-12">
        <div className="container  flex items-center gap-4 md:flex-row flex-col ">
          <div className="w-full relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
            <img
              src={banner4.src}
              alt="banner"
              className="md:w-full mx-auto md:h-auto h-[80%] w-[80%] relative z-0 rounded-lg transition-all duration-500"
            />
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
          </div>
          <div className="w-full relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
            <img
              src={banner3.src}
              alt="banner"
              className="md:w-full md:h-auto mx-auto h-[80%] w-[80%]  relative z-0 rounded-lg transition-all duration-500"
            />
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
          </div>
          <div className="w-full relative mx-auto group h-auto overflow-hidden rounded-lg cursor-pointer">
            <img
              src={banner4.src}
              alt="banner"
              className="md:w-full md:h-auto mx-auto h-[80%] w-[80%]  relative z-0 rounded-lg transition-all duration-500"
            />
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
          </div>
        </div>
      </section>
    </>
  );
}
