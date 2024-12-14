import React from "react";
import SearchBar from "../../sidebar/SearchBar";
import Subscription from "../../sidebar/Subscription";
import TrendingCard from "../../sidebar/Trending";
import FollowCard from "../../sidebar/FollowCard";
import Link from "next/link";

const MainSideBar = () => {
  return (
    <div className=" sticky -top-36  ">
      <div className="sticky top-1 left-0 right-0  mb-4 w-full z-10">
        <SearchBar />
      </div>
      <Subscription />
      <div className="mt-10 space-y-4">
        <TrendingCard
          classCustom={
            "border border-gray-700 text-sm rounded-lg flex flex-col overflow-hidden gap-1 w-auto"
          }
        />
        <FollowCard />

        {/* Developer Info */}
        <div>
          <p>
            Terms of Service Privacy Policy Cookie Policy Accessibility Ads info
            More © 2024 X Corp.
          </p>
          <p className="text-start my-1 text-green-500 ">
            <Link
              href="https://github.com/jahid-111"
              className="hover:text-green-400 "
            >
              Developer : Mohd. Jahidul Islam
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSideBar;
