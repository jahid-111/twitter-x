"use client";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { FaReply } from "react-icons/fa";
import ToggleContext from "../../context/ToggleContext";
import useToggleLoad from "@/app/hooks/useToggleLoad";

const ToggleTop = () => {
  // const context = useContext(ToggleContext);
  const { load, setLoad } = useToggleLoad();

  // console.log("PASS VALUE :   ", load);
  // console.log("PASS VALUE :   ", setLoad);

  // Configuration for routes and their respective buttons
  // need pass id some specific route
  const id = "/pass-id-from-data";
  const routeButtonConfig = {
    "/": ["For You", "Following"],
    "/explore": ["For you", "Trending", "News", "Sports", "Entertainment"],
    "/notification": ["All", "Verified", "Mentions"],
    [`/status/${id}`]: ["🔙 Posts", <FaReply key={id} />],
    [`/profile`]: [
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
  if (!load) {
    setLoad("For You");
  }
  function handleToggleButtonToPathRoute(name) {
    // console.log(name);
    setLoad(name);

    // setLoad(name); //UP  next for modify 🔴🔴
  }

  return (
    <div
      className={` h-auto md:h-12 sticky top-0 w-full border-b flex-wrap   border-gray-600 flex items-center transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900 bg-opacity-80 backdrop-blur-sm"
          : "bg-transparent  backdrop-blur-sm"
      }`}
    >
      {/* Render additional buttons dynamically */}
      {buttons.map((buttonText) => (
        <div
          key={buttonText}
          className=" flex hover:border-b-[3px] hover:text-tertiaryDark border-primary justify-center items-center mx-auto  "
        >
          <button
            onClick={() => handleToggleButtonToPathRoute(buttonText)}
            className="px-5 mt-1 md:mt-0 md:py-2 mx-auto "
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
