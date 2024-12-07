"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaReply } from "react-icons/fa";

const ToggleTop = () => {
  // console.log(id);
  // Configuration for routes and their respective buttons
  const id = "/pass-id-from-data";
  const routeButtonConfig = {
    "/": ["For You", "Following"],
    "/explore": ["For you", "Trending", "News", "Sports", "Entertainment"],
    "/notification": ["All", "Verified", "Mentions"],
    [`/status/${id}`]: ["🔙 Posts", <FaReply key={id} />],
    [`/profile/${id}`]: [
      "Posts",
      "Replies",
      "Highlights",
      "Articles",
      "Media",
      "Likes",
    ],
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const buttons = routeButtonConfig[pathName] || [];
  // console.log(buttons);

  return (
    <div
      className={` h-auto md:h-12 sticky top-0 w-full border-b flex-wrap   border-gray-600 flex items-center transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900 bg-opacity-80 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      {/* Render additional buttons dynamically */}
      {buttons.map((buttonText) => (
        <div
          key={buttonText}
          className=" flex hover:border-b-4 hover:border-[#1DA1F2] justify-center items-center mx-auto  "
        >
          <button
            className="px-5 mt-1 md:mt-0 md:py-2 mx-auto"
            key={buttonText}
          >
            {buttonText}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToggleTop;
