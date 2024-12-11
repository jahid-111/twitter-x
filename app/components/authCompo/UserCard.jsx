import Image from "next/image";
import React from "react";

const UserCard = () => {
  return (
    <div className=" cursor-pointer rounded-full px-3 py-2 hover:bg-toggle my-auto flex gap-5 justify-start items-center">
      {/* User Image */}
      <Image
        src="/hardImg/image.png"
        width={100}
        height={100}
        alt="user Image"
        className="w-12 h-12 mx-auto rounded-full border-[#1DA1F2] border-[0.15rem]"
      />
      <div className="hidden xl:block">
        <p> Mohd Jahidul Islam</p>
        <p> @jahidjob4</p>
      </div>
    </div>
  );
};

export default UserCard;
