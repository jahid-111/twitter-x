import Link from "next/link";
import React from "react";

const TrendingCard = () => {
  return (
    <div className="border  border-gray-700 text-sm rounded-lg flex flex-col gap-1 w-auto">
      <p className="mb-1 px-3 text-xl">What’s happening!</p>
      <Link href="/">
        <div className="px-3 flex flex-col gap-1 rounded-lg hover:bg-gray-900 transition">
          <h4 className=" text-sm">Lorem ipsum, dolor sit amet</h4>
          <p>333 posts</p>
        </div>
      </Link>
      <Link href="/">
        <div className="px-3 flex flex-col gap-1 rounded-lg hover:bg-gray-900 transition">
          <h4 className=" text-sm">Lorem ipsum, dolor sit amet</h4>
          <p>333 posts</p>
        </div>
      </Link>
      <Link href="/">
        <div className="px-3 flex flex-col gap-1 rounded-lg hover:bg-gray-900 transition">
          <h4 className=" text-sm">Lorem ipsum, dolor sit amet</h4>
          <p>333 posts</p>
        </div>
      </Link>
      <Link href="/">
        <div className="px-3 flex flex-col gap-1 rounded-lg hover:bg-gray-900 transition">
          <h4 className=" text-sm">Lorem ipsum, dolor sit amet</h4>
          <p>333 posts</p>
        </div>
      </Link>
    </div>
  );
};

export default TrendingCard;
