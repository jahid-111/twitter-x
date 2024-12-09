import React from "react";
import FollowCard from "../../sidebar/FollowCard";

const ExploreSideBar = () => {
  return (
    <aside className="hidden lg:block w-full lg:w-[39%] px-4">
      <div className="sticky top-2">
        <FollowCard />
      </div>
    </aside>
  );
};

export default ExploreSideBar;
