import Image from "next/image";
import React from "react";

const FeedPhoto = () => {
  return (
    <div className=" w-full">
      <p>feedInfo.content</p>
      <div className="flex justify-center items-center">
        <Image
          width={500}
          height={500}
          src="/hardImg/image.png"
          alt="post user"
          className="py-2 pe-2 rounded-3xl "
        />
      </div>
    </div>
  );
};

export default FeedPhoto;
