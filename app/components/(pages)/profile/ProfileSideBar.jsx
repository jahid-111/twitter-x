import React from "react";
import SearchBar from "../../sidebar/SearchBar";
import FollowCard from "../../sidebar/FollowCard";
import TrendingCard from "../../sidebar/Trending";
import Link from "next/link";

const ProfileSideBar = () => {
  return (
    <div className="sticky top-1">
      <SearchBar />
      <div className=" mt-3">
        <FollowCard />
      </div>
      <div className=" mt-3">
        <TrendingCard />
      </div>
      {/* Developer Info */}
      <div className=" mt-3">
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
  );
};

export default ProfileSideBar;
