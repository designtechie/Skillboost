// eslint-disable-next-line no-unused-vars
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { TiLocationOutline } from "react-icons/ti"; // Corrected the CiLocationOn import
import { FaAngleDown } from "react-icons/fa"; // Added a down arrow icon for dropdowns

const Search = () => {
  return (
    <div className="search grid gap-10 bg-grey rounded-[10px] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-grey-700">
          {/* Search by Job */}
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[24px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job"
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
            />
          </div>

          {/* Search by Location */}
          <div className="flex gap-2 items-center">
            <TiLocationOutline className="text-[24px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search by location"
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
            />
          </div>

          {/* Search by Company */}
          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[24px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Company"
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
            />
          </div>

          {/* Search Button */}
          <button className="bg-blue h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
            Search
          </button>
        </div>
      </form>

      {/* Sort and Filter Options */}
      <div className="SecDiv flex items-center gap-10 justify-center">
        {/* Sort by Relevance */}
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Starts With</option>
            <option value="">Contains</option>
          </select>
          <FaAngleDown className="text-[18px] text-[#808080]" />
        </div>

        {/* Sort by Type */}
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select name="" id="type" className="bg-white rounded-[3px] px-4 py-1">
            <option value="">Full time</option>
            <option value="">Part time</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
          </select>
          <FaAngleDown className="text-[18px] text-[#808080]" />
        </div>

        {/* Sort by Level */}
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select name="" id="level" className="bg-white rounded-[3px] px-4 py-1">
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
          <FaAngleDown className="text-[18px] text-[#808080]" />
        </div>

        <span className="text-[#a1a1a1] cursor-pointer hover:text-blue-500">
          Clear All
        </span>
      </div>
    </div>
  );
};

export default Search;
