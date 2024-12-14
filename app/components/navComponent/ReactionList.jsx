"use client";

import { actionItems } from "@/data/navigationData";
import React from "react";
import { useRouter } from "next/navigation"; // For client-side navigation

const ReactionButton = () => {
  const router = useRouter();

  function handleReactionBy(name) {
    console.log(name);

    if (name === "comments") {
      router.push("/compose/comment-reply");
    } else if (name === "like") {
      window.alert("liked");
    } else if (name === "repost") {
      window.prompt("are u sure ??");
    } else if (name == "chart") {
      window.alert("Oops....!! ");
    }
  }

  return (
    <>
      {actionItems.map((item, index) => (
        <div key={index} className="flex justify-center items-center">
          <button
            onClick={() => handleReactionBy(item.name)}
            className="flex items-center justify-center h-9 w-9 rounded-full hover:border hover:border-green-400 hover:bg-gray-700 hover:text-green-200"
          >
            <item.icon />
          </button>
          <p className="text-sm text-gray-500">99</p>
        </div>
      ))}
    </>
  );
};

export default ReactionButton;
