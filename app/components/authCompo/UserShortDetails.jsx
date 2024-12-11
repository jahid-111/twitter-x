import React from "react";
import Image from "next/image";

const UserShortDetails = () => {
  return (
    <div className=" w-52 h-auto">
      <div className="flex justify-between items-center">
        {/* User Image */}
        <div className="flex justify-center items-center">
          <Image
            width={50}
            height={50}
            src="/hardImg/image.png"
            alt="User Image"
            className="h-auto w-auto rounded-full "
          />
        </div>
        {/* Follow Button */}
        <button className="bg-white text-gray-900 font-medium rounded-full px-5  hover:bg-red-500">
          Follow
        </button>
      </div>

      {/* User Info */}
      <div className="flex flex-col  justify-start">
        <strong className="text-xl">Jahid</strong>
        <small className="text-gray-400">@jahid</small>
      </div>

      {/* Bio */}
      <p className="text-center text-gray-300 mb-4">Im a developer</p>

      {/* Follower Count */}
      <div className="flex justify-around items-center">
        <p className="text-sm">99 Followers</p>
        <p className="text-sm">44 Following</p>
      </div>
    </div>
  );
};

export default UserShortDetails;
