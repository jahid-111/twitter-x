import React from "react";
import ProfileSideBar from "./ProfileSideBar";
import SearchBar from "../../sidebar/SearchBar";
import ProfileTopInfo from "./ProfileTopInfo";
import ProfileCard from "./ProfileInfoCard";
import ToggleTop from "../../navComponent/ToggleTop";
import FeedCard from "../../statusCompo/FeedCard";

const Profile = () => {
  return (
    <div className="flex">
      {/* Main Content Section */}
      <section className="w-full border-r border-l border-gray-700 lg:w-[61%]">
        <ProfileTopInfo />
        <ProfileCard />
        <ToggleTop />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </section>

      {/* Sticky Sidebar Section */}
      <aside className=" hidden lg:block w-full lg:w-[39%] px-4 relative">
        <ProfileSideBar />
      </aside>
    </div>
  );
};

export default Profile;
