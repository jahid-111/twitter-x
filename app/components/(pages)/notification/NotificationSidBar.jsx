import React from "react";
import FollowCard from "../../sidebar/FollowCard";
import SearchBar from "../../sidebar/SearchBar";
import TrendingCard from "../../sidebar/Trending";

const NotificationSidBar = () => {
  return (
    <aside className="hidden lg:block w-full lg:w-[61%] px-4">
      <div className="sticky top-2">
        <div className="mb-4 w-full z-10">
          <SearchBar />
        </div>

        <div className="mt-0 space-y-4">
          <TrendingCard />
          <FollowCard />
        </div>
      </div>
    </aside>
  );
};

export default NotificationSidBar;
