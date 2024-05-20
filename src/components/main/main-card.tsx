"use client";
import React, { useEffect } from "react";
import { AddIcon } from "../../../public/icon/add-icon";
import { ProductVarientType } from "../type";
import Link from "next/link";
import { StarMiniIcon } from "../../../public/icon/star-mini-icon";
import { removeProduct, addProduct } from "@/redux/product-reducer";
import { useDispatch } from "react-redux";
import { DeleteIcon } from "../../../public/icon/delete-icon";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { addLike, removeLike } from "@/redux/like-reducer";
import { StarYellowIcon } from "../../../public/icon/star-yellow-icon";
interface Type {
  data: ProductVarientType;
}
export const MainCard = (data: Type) => {
  const [likeBool, setLikeBool] = React.useState<boolean>(false);
  const [dataBool, setDataBool] = React.useState<boolean>(false);

  const { like } = useSelector((store: RootState) => store.like);
  const { products } = useSelector((store: RootState) => store.product);

  useEffect(() => {
    let boolD = products.some((item) => item.id === data.data.id);
    let boolL = like.some((item: any) => item?.id === data.data.id);
    setDataBool(boolD);
    setLikeBool(boolL);
  }, [data, like, products]);

  const dispatch = useDispatch();
  const addData = () => {
    dispatch(addProduct({ ...data.data }));
  };
  const removeData = () => {
    dispatch(removeProduct({ id: data.data.id }));
  };
  const addLikeData = () => {
    dispatch(addLike({ ...data.data }));
  };
  const removeLikeData = () => {
    dispatch(removeLike({ id: data.data.id }));
  };
  return (
    <div className="group z-0 transition-all max-w-[60%] mx-auto sm:mx-0 sm:max-w-[450px] mb-2  w-full duration-300 relative overflow-hidden rounded-lg bg-white shadow-md">
      <div className=" relative flex bg-white p-2 shadow-xl transition-all duration-300">
        <span className="absolute left-[-40px] top-[-20px] z-0 h-[30px] w-[30px] rounded-full bg-yellow opacity-[0.7] transition-all duration-300 group-hover:scale-[21.2] "></span>
        <div className="relative  z-10 mx-auto w-[180px]">
          <Link href={`/shop/${data.data.id}`}>
            <div className="h-[163px] w-full mb-4 ">
              <img
                className="mt-3 group-hover:hidden h-full w-full rounded-lg bg-white  "
                src={data.data?.images[0]?.image}
                alt="img"
              />
              <img
                className="mt-3 group-hover:inline-block hidden w-full h-full rounded-lg bg-white"
                src={
                  data.data?.images[1]?.image
                    ? data.data?.images[1]?.image
                    : data.data?.images[0]?.image
                }
                alt="img"
              />
            </div>
          </Link>
          <div>
            <p className="text-yellow transition-all duration-300 text-center group-hover:text-white font-medium text-base">
              {data.data.title.split("").splice(0, 8).join("")}...
            </p>
            <p className="text-sm transition-all duration-300 mb-2 font-normal text-black-out">
              Quantity:{" "}
              <span className="text-goshawk-grey transition-all duration-300">
                {data.data.quantity}
              </span>
            </p>
            <p className="text-lg font-medium text-black ">
              $ {data.data.price}
            </p>
            {dataBool ? (
              <div
                onClick={removeData}
                className="bg-white transition-all duration-300 w-[24px] h-[24px] ml-auto"
              >
                <DeleteIcon />
              </div>
            ) : (
              <div
                onClick={addData}
                className="bg-white group-hover:rotate-90 transition-all duration-300 w-[24px] h-[24px] ml-auto"
              >
                <AddIcon />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute hidden cursor-pointer group-hover:block p-2 bg-mercury rounded-full border-2 border-steam z-50 top-8  right-2">
        {likeBool ? (
          <div onClick={removeLikeData} className="">
            <StarYellowIcon />
          </div>
        ) : (
          <div onClick={addLikeData}>
            <StarMiniIcon />
          </div>
        )}
      </div>
    </div>
  );
};
