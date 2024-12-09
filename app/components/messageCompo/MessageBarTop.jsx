import React from "react";

import { GoGear } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";

const MessageBarTop = () => {
  return (
    <div className=" flex justify-between items-center p-5 ">
      <div>
        <h2 className="text-[1.2rem] font-semibold ">Messages</h2>
      </div>
      <div className=" flex gap-5">
        <GoGear />
        <FaRegMessage />
      </div>
    </div>
  );
};

export default MessageBarTop;
