import React from "react";
import MessageWelcome from "../../messageCompo/MessageWelcome";
import { FaGear } from "react-icons/fa6";
import { BiMessageSquareAdd } from "react-icons/bi";

const Message = () => {
  return (
    <div className="flex">
      <section className=" w-full md:w-[40%] border-r border-l  border-gray-700">
        <div className="flex justify-between items-center px-6 py-4 sticky top-0 bg-gray-900 bg-opacity-90 backdrop-blur-md z-20 border-b border-gray-700">
          <h3 className="text-2xl font-semibold text-white">Messages</h3>
          <div className="flex gap-6 text-gray-400">
            <FaGear
              className="cursor-pointer hover:text-white transition-colors duration-200"
              title="Settings"
              aria-label="Settings"
            />
            <BiMessageSquareAdd
              className="cursor-pointer hover:text-white transition-colors duration-200"
              title="New Message"
              aria-label="Create New Message"
            />
          </div>
        </div>

        {/* USER INBOX CHAT LIST */}
        <div className="px-2 pt-14">
          <MessageWelcome
            clickName="Write Message"
            text="Welcome to your inbox!"
          />
        </div>
      </section>
      <aside className="hidden md:block md:w-[60%] border-r border-gray-700  relative px-2">
        <div className="sticky top-0 h-screen my-auto">
          {/* USER CHAT */}
          <div className=" mt-96 px-24">
            <MessageWelcome clickName="New Message" text="Select a message" />
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Message;
