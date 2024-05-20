"use client";
import React, { useEffect, useState } from "react";
import { StarMiniIcon } from "../../../../public/icon/star-mini-icon";
import { StarYellowIcon } from "../../../../public/icon/star-yellow-icon";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addLike, removeLike } from "@/redux/like-reducer";
import { Type } from "../service/useGetProductId";
import { removeProduct, addProduct } from "@/redux/product-reducer";
export const ActivesShop: React.FC<{ data: Type }> = ({ data }) => {
  const [likeBool, setLikeBool] = React.useState<boolean>(false);
  const [productBool, setProductBool] = React.useState<boolean>(false);
  const { like } = useSelector((store: RootState) => store.like);
  const { products } = useSelector((store: RootState) => store.product);
  const dispatsh = useDispatch();
  const [count, setCount] = useState<number>(1);
  useEffect(() => {
    const bool = like.some((item: any) => item.id === data.id);
    const boolP = products.some((item: any) => item.id === data.id);
    setLikeBool(bool);
    setProductBool(boolP);
  }, [like, products]);
  const addLikeData = () => {
    dispatsh(addLike(data));
  };
  const removeLikeData = () => {
    dispatsh(removeLike({ id: data.id }));
  };
  const counChange = () => {
    dispatsh(addProduct({ ...data, userCount: count }));
  };
  const removeProductdata = () => {
    dispatsh(removeProduct({ id: data.id }));
  };
  return (
    <div>
      <>
        {!productBool ? (
          <div className="mb-6">
            <div className="mb-5 flex items-center gap-6">
              <div className="flex  px-5 py-2 items-center w-auto gap-3 border border-mercury rounded-3xl">
                <button
                  className="text-sm pl-1 font-medium text-goshawk-grey"
                  onClick={() => {
                    count > 1 && setCount((p) => p - 1);
                  }}
                >
                  -
                </button>
                <p className="text-sm font-medium text-goshawk-grey">{count}</p>
                <button
                  className="text-sm pr-1 font-medium text-goshawk-grey"
                  onClick={() => {
                    setCount((p) => p + 1);
                  }}
                >
                  +
                </button>
              </div>
              <button
                onClick={counChange}
                className="py-1 px-[35px] bg-yellow border border-yellow text-black-out font-normal text-sm md:text-base rounded-[30px]"
              >
                + Add To Cart
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={removeProductdata}
            className="py-1 px-[35px] mb-6 bg-red-500 border border-red-500 text-white font-normal text-sm md:text-base rounded-[30px]"
          >
            Remove Card
          </button>
        )}
      </>
      <div className="mb-6">
        {!likeBool ? (
          <div
            onClick={addLikeData}
            className="flex cursor-pointer items-center gap-1"
          >
            <StarMiniIcon />
            <p className=" text-xs font-normal text-goshawk-grey">
              Add To Wishlist
            </p>
          </div>
        ) : (
          <div
            onClick={removeLikeData}
            className="group flex items-center gap-1 cursor-pointer"
          >
            <StarYellowIcon />
            <p className=" text-xs font-normal text-goshawk-grey">
              Browse Wishlist
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
