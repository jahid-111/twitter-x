"use client";

import React from "react";
import ToggleTop from "../../navComponent/ToggleTop";
import PostTweet from "../../statusCompo/PostTweet";
import FeedCard from "../../statusCompo/FeedCard";
import MainSideBar from "./MainSideBar";
import useToggleLoad from "@/app/hooks/useToggleLoad";
import FollowCard from "../../sidebar/FollowCard";

const Home = () => {
  const toggle = useToggleLoad();
  // console.log("✖️✖️✖️", toggle?.load);

  return (
    <div className="flex">
      {/* Main Content Section */}
      <section className="w-full border-r border-l border-gray-700 lg:w-[61%]">
        <ToggleTop />
        <PostTweet />

        {/* Button Toggle render component */}
        {toggle.load === "For You" && <FeedCard />}
        {toggle.load === "Following" && <FollowCard />}
      </section>

      {/* Sticky Sidebar Section */}
      <aside className="sticky top-32 hidden lg:block w-full lg:w-[39%] px-4">
        <MainSideBar />
      </aside>
    </div>
  );
};

export default Home;
