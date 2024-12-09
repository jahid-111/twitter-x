import React from "react";

const MessageWelcome = ({ text, clickName }) => {
  return (
    <>
      <h3 className="text-3xl font-bold">{text}</h3>
      <p className="text-sm text-gray-500">
        Drop a line, share posts and more with private conversations between you
        and others on X.{" "}
      </p>
      <button className=" my-2 font-semibold py-3 px-8 bg-[#1DA1F2] rounded-full">
        {clickName}
      </button>
    </>
  );
};

export default MessageWelcome;
