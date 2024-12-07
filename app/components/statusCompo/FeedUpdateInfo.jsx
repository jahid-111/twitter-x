import React from "react";

const FeedUpdateInfo = () => {
  return (
    <div className=" flex gap-2">
      <p>
        <span>username</span>
        <span className=" text-gray-600">@ query feedInfo?.userId</span>
      </p>
      <span className=" text-gray-500"> ||</span>
      <p className=" text-gray-600">
        {/* {formatTimestamp(feedInfo.timestamp)} 02.00 pm */}
      </p>
    </div>
  );
};

export default FeedUpdateInfo;
