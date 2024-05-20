"use client";

import { store } from "@/lib/store";

import React from "react";
import { Provider } from "react-redux";

export const NextAuthStore: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
