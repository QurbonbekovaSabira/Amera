import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { ArrowIcon } from "../../../../public/icon/arrow-icon";
import Link from "next/link";

export const MiniCard = (data: any) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div
        key={nanoid()}
        onClick={() => setOpen(!open)}
        className="mb-[10px] mr-[15px]"
      >
        <div key={nanoid()} className="flex items-center justify-between">
          <p key={nanoid()} className="text-sm font-normal text-basalt-grey">
            {data?.title} ({data?.children?.length})
          </p>
          <div
            key={nanoid()}
            className="w-[8px] rotate-90 h-2 stroke-basalt-grey"
          >
            <ArrowIcon />
          </div>
        </div>
        {data.children.length > 0 && (
          <div className="ml-2 mt-2 mb-3 flex flex-col gap-1">
            {data?.children?.map((list: any) => (
              <Link
                key={nanoid()}
                className="text-sm font-normal text-basalt-grey"
                href={`/shop/${list.id}`}
              >
                {list.title} (0)
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
