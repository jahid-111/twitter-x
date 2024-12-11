import Link from "next/link";
import React from "react";

const TrendingCard = () => {
  return (
    <div className="border  border-gray-700 text-sm rounded-lg flex flex-col overflow-hidden gap-1 w-auto">
      <p className="my-2 px-3 text-2xl font-semibold">What’s happening!</p>

      {[...Array(3)].map((_, index) => (
        <Link key={index} href="/">
          <div className="px-3 py-2 flex flex-col gap-1 hover:bg-gray-900 transition">
            <h5 className="text-sm text-gray-500">Trending in World IT</h5>
            <strong className=" ms-4">#Development</strong>
            <p className=" text-gray-500">333 posts</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TrendingCard;
