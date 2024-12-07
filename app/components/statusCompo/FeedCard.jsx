import Link from "next/link";
import React from "react";

import ImageSmall from "./ImageSmall";
import FeedUpdateInfo from "./FeedUpdateInfo";
import FeedPhoto from "./FeedPhoto";
import MarkShare from "../navComponent/MarkShare";
import ReactionButton from "../navComponent/ReactionList";

const FeedCard = () => {
  return (
    <div className=" hover:bg-black cursor-pointer flex gap-2 w-full p-1  border-b border-gray-600">
      <div className=" w-1/12">
        <ImageSmall />
      </div>

      <div className="w-11/12 ">
        <FeedUpdateInfo />
        <Link href={`/status/`}>
          <FeedPhoto />
        </Link>

        {/* User Action */}
        <div className="sm:px-4 gap-5 flex justify-between items-center">
          <ReactionButton />
          <MarkShare />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
