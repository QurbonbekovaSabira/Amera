import React from "react";
import { LikesMain } from "./components/likes-main";
import { nanoid } from "@reduxjs/toolkit";

const LikesPage = () => {
  return (
    <section className="py-10">
      <div className="container">
        <LikesMain key={nanoid()} />
      </div>
    </section>
  );
};

export default LikesPage;
