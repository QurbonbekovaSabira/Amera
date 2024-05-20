import { RectangleIcon } from "../../../public/icon/rectangle-icon";

import React from "react";

export const SaleIcon = () => {
  return (
    <div className="rounded bg-red-700   gap-2 pl-2 pr-[1px] top-2 left-3 absolute flex">
      <span className="flex items-center gap-1 justify-between text-sm text-white font-normal ">
        sale
        <span className="block w-[2px] h-[2px] rounded-full bg-white"></span>
      </span>
      <div className="rotate-45 translate-y-[25%]">
        <RectangleIcon />
      </div>
    </div>
  );
};
