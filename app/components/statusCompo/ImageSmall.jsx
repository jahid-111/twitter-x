import Image from "next/image";
import React from "react";

const ImageSmall = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        width={100}
        height={100}
        src="/hardImg/image.png"
        alt="user Image"
        className=" h-auto w-auto rounded-full"
      />
    </div>
  );
};

export default ImageSmall;
