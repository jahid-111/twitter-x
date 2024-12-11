import React from "react";
import FollowCard from "../../sidebar/FollowCard";
import SearchBar from "../../sidebar/SearchBar";
import TrendingCard from "../../sidebar/Trending";
import Link from "next/link";

const NotificationSidBar = () => {
  return (
    <aside className="hidden lg:block w-full lg:w-[39%] px-4">
      <div className="sticky top-2">
        <div className="mb-4 w-full z-10">
          <SearchBar />
        </div>

        <div className="mt-0 space-y-4">
          <TrendingCard />
          <FollowCard />
        </div>

        {/* Developer Info */}
        <div className=" mt-4">
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
    </aside>
  );
};

export default NotificationSidBar;
