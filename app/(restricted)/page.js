import React from "react";
import ToggleTop from "../components/navComponent/ToggleTop";
import PostTweet from "../components/statusCompo/PostTweet";
import FeedCard from "../components/statusCompo/FeedCard";

const HomePage = () => {
  return (
    <>
      <ToggleTop />
      <PostTweet />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </>
  );
};

export default HomePage;
