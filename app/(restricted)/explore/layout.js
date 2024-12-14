import FollowCard from "@/app/components/sidebar/FollowCard";
import SearchBar from "@/app/components/sidebar/SearchBar";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  const routes = ["For you", "Trending", "News", "Sports", "Entertainment"];

  return (
    <section className="flex justify-center gap-3 w-full relative">
      {/* Main Content Section */}
      <div className="w-full xl:w-[61%] relative border-r border-l  border-gray-700 ">
        {/* Search Bar and Navigation */}
        <div className="sticky top-1 left-0 right-0 bg-opacity-80 backdrop-blur-sm z-10">
          <SearchBar />
          <nav aria-label="Explore categories">
            <ul className="flex justify-between items-center">
              {routes.map((route) => {
                const formattedRoute = route
                  .trim()
                  .toLowerCase()
                  .replace(/\s+/g, "-"); // Replace spaces with hyphens
                return (
                  <li key={route} className="w-full m-2">
                    <Link
                      className="border block text-center p-2"
                      href={`/explore/${encodeURIComponent(formattedRoute)}`}
                    >
                      {route}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        {children}
      </div>

      {/* Sidebar Section */}
      <aside className="lg:w-[39%] px-4">
        <div className="sticky top-1">
          <FollowCard />
        </div>
      </aside>
    </section>
  );
};

export default Layout;
