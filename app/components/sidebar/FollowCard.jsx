import Link from "next/link";
import React from "react";

const FollowCard = () => {
  return (
    <div className="border  pt-2 border-gray-700 rounded-lg w-auto ">
      <h3 className="text-xl font-semibold mb-2 px-3">Who to follow</h3>

      <div className="flex cursor-pointer justify-between p-3 items-center hover:bg-gray-800 h-16 w-full">
        <div className="flex gap-3 items-center">
          {/* Image  */}
          <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center text-white">
            Img
          </div>
          <div className="flex flex-col">
            <Link href="/pageName" className="font-medium text-xl">
              Name
            </Link>
            <Link href="/pageName" className="text-sm text-gray-400">
              Title: @Hello World
            </Link>
          </div>
        </div>
        <button className="bg-white text-gray-900 font-medium rounded-full px-5 py-1">
          Follow
        </button>
      </div>
      <div className="flex cursor-pointer justify-between p-3 items-center hover:bg-gray-800 h-16 w-full">
        <div className="flex gap-3 items-center">
          {/* Image  */}
          <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center text-white">
            Img
          </div>
          <div className="flex flex-col">
            <Link href="/pageName" className="font-medium text-xl">
              Name
            </Link>
            <Link href="/pageName" className="text-sm text-gray-400">
              Title: @Hello World
            </Link>
          </div>
        </div>
        <button className="bg-white text-gray-900 font-medium rounded-full px-5 py-1">
          Follow
        </button>
      </div>
      <div className="flex cursor-pointer justify-between p-3 items-center hover:bg-gray-800 h-16 w-full">
        <div className="flex gap-3 items-center">
          {/* Image  */}
          <div className="bg-red-700 w-12 h-12 rounded-full flex items-center justify-center text-white">
            Img
          </div>
          <div className="flex flex-col">
            <Link href="/pageName" className="font-medium text-xl">
              Name
            </Link>
            <Link href="/pageName" className="text-sm text-gray-400">
              Title: @Hello World
            </Link>
          </div>
        </div>
        <button className="bg-white text-gray-900 font-medium rounded-full px-5 py-1">
          Follow
        </button>
      </div>
    </div>
  );
};

export default FollowCard;
