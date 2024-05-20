import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const TopProductsSkeleton = () => {
  return (
    <div className="grid xl:grid-cols-2 gap-4">
      <Skeleton className="w-full h-[160px]" />

    </div>
  );
};
