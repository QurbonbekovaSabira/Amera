"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  validationCheckout,
  validationCheckoutType,
} from "@/scheme-zod/validation-zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { removeAll } from "@/redux/product-reducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
export const ChekoutForm = () => {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<validationCheckoutType>({
    resolver: zodResolver(validationCheckout),
  });
  const [bool, setBool] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const { products } = useSelector((store: RootState) => store.product);
  useEffect(() => {
    if (products.length === 0) {
      window.location.assign("/");
    }
  }, [products]);
  const removeDate = (text: any) => {
    dispatch(removeAll());
    reset();
    window.location.assign("/");
  };

  return (
    <div className="w-full grow">
      <form
        onClick={handleSubmit(removeDate)}
        className="flex  lg:max-w-[100%] max-w-full w-full flex-col gap-5"
      >
        <div className="w-full flex flex-col ">
          <input
            {...register("firstName")}
            className={`p-2 border rounded border-mercury outline-yellow ${
              errors.firstName && bool && "border-red-500 outline-red-500"
            }`}
            type="text"
            placeholder="First name"
          />
          {errors.firstName && (
            <span className="text-xs font-normal ml-1">
              {errors.firstName.message}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col ">
          <input
            {...register("lastName")}
            className={`p-2 border rounded border-mercury outline-yellow ${
              errors.lastName && bool && "border-red-500 outline-red-500"
            }`}
            type="text"
            placeholder="Last name"
          />
          {errors.lastName && (
            <span className="text-xs font-normal ml-1">
              {errors.lastName.message}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col ">
          <input
            {...register("location")}
            className={`p-2 border rounded border-mercury outline-yellow ${
              errors.location && bool && "border-red-500 outline-red-500"
            }`}
            type="text"
            placeholder="Address"
          />
          {errors.location && (
            <span className="text-xs font-normal ml-1">
              {errors.location.message}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col ">
          <input
            {...register("phone")}
            className={`p-2 border rounded border-mercury outline-yellow ${
              errors.phone && bool && "border-red-500 outline-red-500"
            }`}
            type="text"
            placeholder="Phone "
          />
          {errors.phone && (
            <span className="text-xs font-normal ml-1">
              {errors.phone.message}
            </span>
          )}
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              onClick={() => setBool(true)}
              type="button"
              className="text-white rounded transition-all duration-300 p-0 bg-yellow hover:bg-yellow "
            >
              Checkout
            </Button>
          </AlertDialogTrigger>
          {
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Chekoute products</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-yellow text-white rounded hover:bg-yellow opacity-60 hover:border-yellow hover:text-white">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="text-yellow">
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          }
        </AlertDialog>
      </form>
      <ToastContainer />
    </div>
  );
};
