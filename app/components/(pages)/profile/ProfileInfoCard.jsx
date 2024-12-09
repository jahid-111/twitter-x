import Image from "next/image";
import React from "react";
import { ImCalendar } from "react-icons/im";

const ProfileCard = () => {
  return (
    <div className="mx-auto mb-4 ">
      {/* Header Section */}
      <div className="relative h-56 bg-slate-800">
        {/* Cover Photo */}
        <Image
          src="/hardImg/image.png"
          alt="Cover Image"
          layout="fill"
          objectFit="cover"
          className="divide-opacity-70"
        />
        {/* DP */}
        <div className="absolute bottom-[-3rem] left-6 h-36 w-36 rounded-full border-4 border-transparent">
          <Image
            src="/hardImg/image.png"
            alt="Cover Image"
            layout="fill"
            className="divide-opacity-70 rounded-full "
          />
        </div>
      </div>    
      {/* Content Section */}
      <div className=" flex justify-end items-center m-2">
        <button className="border border-gray-700 py-2 px-5 rounded-full hover:bg-gray-100">
          Edit Profile
        </button>
      </div>

      <div className=" px-3">
        <div className=" flex flex-col justify-start mb-3">
          <p className="text-[1.3rem] font-semibold"> Jahid</p>
          <p className="text-sm text-gray-500">@jahidjob</p>
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <p className=" flex gap-2 justify-start items-center mt-2 text-sm text-gray-500">
              <ImCalendar /> Joined February 2015
            </p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <p>
              <span className="font-semibold"> 99</span>
              <span className=" text-sm text-gray-500"> Following</span>
            </p>
            <p>
              <span className="font-semibold">7</span>
              <span className=" text-sm text-gray-500"> Follower</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
