import React from "react";
import NotificationSidBar from "./NotificationSidBar";
import ToggleTop from "../../navComponent/ToggleTop";
import NotifyMessage from "./NotifyMessage";

const Notification = () => {
  return (
    <>
      <section className="w-full border-r border-l border-gray-700 lg:w-[61%] relative ">
        <div className="px-2 py-1 sticky top-0 bg-opacity-80 backdrop-blur-sm">
          <h3 className=" text-xl font-semibold">Notification</h3>
        </div>
        <div className=" sticky top-9 w-full">
          <ToggleTop />
          <div className=" flex flex-col">
            <NotifyMessage />
            <NotifyMessage />
            <NotifyMessage />
          </div>
        </div>
      </section>
      <NotificationSidBar />
    </>
  );
};

export default Notification;
