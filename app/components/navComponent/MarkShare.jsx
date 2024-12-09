"use client";

import { sideActionItems } from "@/data/navigationData";
import React from "react";

const MarkShare = () => {
  function handleMarkShareBy(name) {
    console.log(name);
  }

  return (
    <div className="flex  items-center justify-center w-3/12">
      {sideActionItems.map((item, i) => (
        <ul key={i}>
          <li>
            <button
              onClick={() => handleMarkShareBy(item.name)}
              className="flex items-center justify-center h-9 w-9 rounded-full hover:border hover:border-green-400 hover:bg-gray-700 hover:text-green-200"
            >
              <item.icon />
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default MarkShare;
