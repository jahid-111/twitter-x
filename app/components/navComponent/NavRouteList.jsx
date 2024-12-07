import { navItems } from "@/data/navigationData";
import Link from "next/link";
import React from "react";

const NavRouteList = () => {
  return (
    <ul className="flex sm:flex-col justify-between sm:items-center gap-2 ">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link
            prefetch={false}
            href={item.label === "Profile" ? `/` : item.href}
            className=" hover:bg-gray-900 xl:w-[13rem] rounded-full flex gap-2 items-center "
          >
            <item.icon className=" h-12 w-12 p-2 rounded-full " />
            <span className="hidden xl:block text-xl">{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavRouteList;
