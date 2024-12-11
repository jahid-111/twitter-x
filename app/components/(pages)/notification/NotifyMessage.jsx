import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotifyMessage = () => {
  return (
    <Link
      href="/go"
      className="flex gap-3 items-center hover:bg-linkColor px-2 py-3 border-b border-gray-700"
    >
      <Image
        src="/hardImg/image.png"
        alt="user action to you"
        height={40}
        width={40}
        className=" rounded-full"
      />
      <p>
        <strong>Jahid vai </strong> Following you{" "}
        <time dateTime="2024-12-10T12:10:00">12:10</time>
      </p>
    </Link>
  );
};

export default NotifyMessage;
