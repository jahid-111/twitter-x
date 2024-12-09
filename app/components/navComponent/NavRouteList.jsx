import { navItems } from "@/data/navigationData";
import Link from "next/link";
import React from "react";
import XlogoSvg from "../logo/XlogoSvg";
import UserCard from "../authCompo/UserCard";
import TweetIcon from "../logo/TweetIconSvg";

const NavRouteList = () => {
  return (
    <ul className="flex sm:flex-col justify-between sm:items-center gap-2">
      {/* Logo Section */}
      <div className="hidden sm:block">
        <div className="xl:w-[13rem] h-auto rounded-full flex gap-2 items-center my-2">
          <Link href="/" className="hover:bg-gray-900 p-2 rounded-full">
            <XlogoSvg xClass="w-9 h-9" />
          </Link>
        </div>
      </div>

      {/* Navigation Items */}
      {navItems.map((item) => (
        <li key={item.id || item.label}>
          {" "}
          {/* Use unique ID or label */}
          <Link
            prefetch={false}
            aria-label={item.label}
            href={item.label === "Profile" ? "/profile" : item.href}
            className="hover:bg-gray-900 xl:w-[13rem] rounded-full flex gap-2 items-center"
          >
            <item.icon className="h-11 w-11 p-2 rounded-full" />
            <span className="hidden xl:block text-xl">{item.label}</span>
          </Link>
        </li>
      ))}

      {/* Post Button :: render on device */}
      <div className="absolute right-5 bottom-40">
        <div className="hidden xl:block">
          <button className="bg-green-50 py-4 px-24 text-gray-800 text-sm font-semibold rounded-full">
            POST
          </button>
        </div>
        <div className="xl:hidden">
          <button>
            <TweetIcon />
          </button>
        </div>
      </div>

      {/* User Card */}
      <div className="absolute bottom-10">
        <div className="hidden sm:block">
          <UserCard />
        </div>
      </div>
    </ul>
  );
};

export default NavRouteList;
