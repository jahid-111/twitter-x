import Image from "next/image";
import React from "react";
import PostForm from "./PostForm";
import ImageSmall from "./ImageSmall";

const PostTweet = () => {
  return (
    <div className="p-2 flex gap-2 w-full border-b border-gray-700">
      <div className="w-1/12">
        {/* Image */}
        <div className="flex justify-center items-center">
          <ImageSmall />
        </div>
      </div>

      {/* Post Section */}
      <PostForm />
    </div>
  );
};

export default PostTweet;
