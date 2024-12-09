import React from "react";
import ToggleTop from "../../navComponent/ToggleTop";
import TrendingCard from "../../sidebar/Trending";
import SearchBar from "../../sidebar/SearchBar";
import ExploreSideBar from "./ExploreSideBar";
// now Fix :  Sticky explore sidebar
const Explore = () => {
  return (
    <>
      <section className=" w-full border-r border-l border-gray-700 lg:w-[61%] relative ">
        <div className="px-2 py-1 sticky top-0">
          <SearchBar />
        </div>
        <div className=" sticky top-12 w-full">
          <ToggleTop />
        </div>
        {/* all Trending Data Load by scroll */}
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
        <TrendingCard />
      </section>

      <ExploreSideBar />
    </>
  );
};

export default Explore;
