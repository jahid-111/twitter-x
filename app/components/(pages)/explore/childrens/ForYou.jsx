import TrendingCard from "@/app/components/sidebar/Trending";
import React from "react";

const ForYou = () => {
  return (
    <div>
      <TrendingCard
        classCustom={
          "border-gray-700 text-sm rounded-lg flex flex-col overflow-hidden gap-1 w-auto"
        }
      />
    </div>
  );
};

export default ForYou;
