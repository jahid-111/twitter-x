"use client";

import React from "react";
import Subscription from "./Subscription";
import SearchBar from "./Searchbar";
import TrendingCard from "./Trending";
import { usePathname } from "next/navigation";
import FollowCard from "./FollowCard";
import MessageWelcome from "../messageCompo/MessageWelcome";

const Sidebar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const renderContent = () => {
    switch (pathname) {
      case "/":
        return (
          <>
            <SearchBar />
            <br />
            <Subscription />
            <br />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <br />
            <FollowCard />
            <FollowCard />
            <FollowCard />
          </>
        );
      case "/explore":
        return (
          <>
            <FollowCard />
            <FollowCard />
            <FollowCard />
          </>
        );
      case "/notification":
        return (
          <>
            <SearchBar />
            <br />
            <Subscription />
            <br />
            <TrendingCard />
            <TrendingCard />
            <TrendingCard />
            <br />
            <FollowCard />
            <FollowCard />
            <FollowCard />
          </>
        );
      case "/message":
        return (
          <>
            <div className=" h-screen  flex justify-center items-center">
              <MessageWelcome
                text="Welcome to your inbox!"
                clickName="Write a Message"
              />
            </div>
          </>
        );
      default:
        return null; // Or some fallback content
    }
  };

  return (
    <div className="sticky -top-48 h-auto bg-slate-800">
      <div className="sticky top-0 left-0 right-0 mb-4 w-full z-10">
        {renderContent()}
      </div>
    </div>
  );
};

export default Sidebar;
