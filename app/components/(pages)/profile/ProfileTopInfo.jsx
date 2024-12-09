import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const ProfileTopInfo = () => {
  return (
    <div className=" flex items-center gap-12 px-2">
      <div>
        <button className=" hover:bg-gray-800 p-2 rounded-full">
          <FaArrowLeft />
        </button>
      </div>
      <div>
        <h6 className="text-[1.2rem] font-semibold"> jahidjob4@gmail.com</h6>
        <p className=" text-sm text-gray-500"> 4 Posts Jahid</p>
      </div>
    </div>
  );
};

export default ProfileTopInfo;
