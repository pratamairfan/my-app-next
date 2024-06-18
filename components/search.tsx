"use client";

import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="relative flex flex-1">
      <input
        type="text"
        className="w-full focus-visible:outline-teal-400 focus-visible:outline border border-gray-200 py-2 pl-10 text-sm outline-2 rounded-md"
        placeholder="Search..."
        // onChange={(e) => handleSearch(e.target.value)}
        // defaultValue={searchParams.get("query")?.toString()}
      />
      <IoSearch className="absolute left-3 top-2 h-5 w-5 text-gray-500" />
    </div>
  );
};

export default Search;
