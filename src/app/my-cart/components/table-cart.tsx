import React from "react";
import { ProductVarientType } from "@/components/type";
import { PropsTypes } from "@/redux/product-reducer";
import { toggleAmount, removeProduct } from "@/redux/product-reducer";
import { useDispatch } from "react-redux";
import Link from "next/link";

const TableCart: React.FC<{ data: PropsTypes }> = ({ data }) => {
  const dispatch = useDispatch();
  const [count, setCount] = React.useState<number>(data.userCount);
  const removeProductData = () => {
    dispatch(removeProduct({ id: data.id }));
  };
  const ProductCountChange = (type: string) => {
    if ((type === "dec" && data.userCount > 1) || type === "inc") {
      dispatch(toggleAmount({ type: type, id: data.id }));
    }
  };
  return (
    <div className="relative">
      <div className="w-full  lg:ml-0 flex lg:flex-row md:gap-4 gap-2 flex-col items-center p-4 border border-steam">
        <div className="lg:w-[5%] w-full lg:block grid grid-cols-2 justify-center lg:justify-normal items-center  gap-6">
          <p className="lg:hidden text-base font-normal  text-black-out">
            Delete
          </p>
          <button
            onClick={removeProductData}
            className=" border-b w-[24px] ml-4 lg:ml-0 hover:rotate-[120deg] hover:border-transparent transition-all duration-300 h-[24px] border-black-out text-black-out text-center text-base font-medium"
          >
            x
          </button>
        </div>
        <div className="lg:max-w-[10%] max-w-full w-full lg:block grid grid-cols-2 items-center justify-center lg:justify-normal">
          <p className="text-base font-normal  text-black-out lg:hidden">
            Image
          </p>
          <img
            className="max-w-[80px] ml-4 lg:ml-0 hover:scale-[1.09] cursor-pointer transition-all duration-300 w-full h-[80px]"
            src={data?.images[0].image}
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 lg:w-[40%] w-full lg:block items-center justify-center lg:justify-normal">
          <p className="text-base font-normal   text-black-out lg:hidden">
            Product
          </p>
          <Link
            href={`/shop/${data.id}`}
            className="text-left text-base text-black-out font-normal ml-4 lg:ml-0  hover:underline transition-all duration-300"
          >
            {data.title}
          </Link>
        </div>
        <div className="lg:w-[10%] w-full lg:block grid grid-cols-2 items-center justify-center lg:justify-normal">
          <p className="text-base font-normal   text-black-out lg:hidden">
            Price
          </p>
          <p className="ml-4 lg:ml-0">${data.price}</p>
        </div>
        <div className="lg:w-[15%] w-full mx-auto lg:block grid grid-cols-2 items-center justify-center">
          <p className="text-base font-normal   text-black-out lg:hidden">
            Quantity
          </p>
          <div className="flex ml-4 lg:ml-0 w-[100px] lg:mx-auto px-5 py-2 items-center gap-3 border border-mercury rounded-3xl">
            <button
              className="text-sm pl-1 font-medium text-goshawk-grey"
              onClick={() => {
                ProductCountChange("dec");
              }}
            >
              -
            </button>
            <p className="text-sm  font-medium text-goshawk-grey">
              {data.userCount}
            </p>
            <button
              className="text-sm pr-1 font-medium text-goshawk-grey"
              onClick={() => {
                ProductCountChange("inc");
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="lg:w-[20%] w-full lg:block grid grid-cols-2 items-center justify-center">
          <p className="text-base font-normal   text-black-out lg:hidden">
            Total Price
          </p>
          <p className="text-left lg:ml-0 ml-4">${data.userPrice}</p>
        </div>
      </div>
      <span className="block w-[1px] h-full absolute top-0 left-[50%] bg-steam"></span>
    </div>
  );
};

export default TableCart;
