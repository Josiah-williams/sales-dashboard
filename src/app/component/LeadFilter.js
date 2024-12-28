import React from "react";
import { FaChartLine, FaPlus, FaRedo, FaTrash, FaUsers } from "react-icons/fa";
import { MdFilterList, MdEdit, MdOutlineViewList } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsArrowUpRight } from "react-icons/bs";
import { AiOutlineBulb } from "react-icons/ai";

const LeadFilter = () => {
  return (
    <div className="bg-white p-4 md:p-6 py-2 rounded shadow flex flex-wrap items-center justify-between space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-3 w-full sm:w-auto justify-center sm:justify-start">
        <div className="relative">
          <button className="px-3 py-1.5 shadow-sm text-sm text-gray-700 hover:bg-gray-50 flex items-center">
            My open leads
            <IoMdArrowDropdown className="ml-1 text-base" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-start space-x-4 space-y-2 w-full sm:w-auto sm:space-y-0">
        <button className="flex items-center space-x-1.5 px-2 py-1 text-sm text-gray-600 hover:text-blue-600">
          <FaChartLine className="text-sm" />
          <span>Show chart</span>
        </button>
        <button className="flex items-center space-x-1.5 px-2 py-1 text-sm text-gray-600 hover:text-blue-600">
          <MdOutlineViewList className="text-sm" />
          <span>Focused view</span>
        </button>
        <button className="flex items-center space-x-1.5 px-2 py-1 text-sm text-gray-600 hover:text-blue-600">
          <FaPlus className="text-sm" />
          <span>New</span>
        </button>
        <button className="flex items-center space-x-1.5 px-2 py-1 text-sm text-gray-600 hover:text-blue-600">
          <FaRedo className="text-sm" />
          <span>Refresh</span>
        </button>
        <button className="flex items-center space-x-1.5 px-2 py-1 text-sm text-gray-600 hover:text-blue-600">
          <FaUsers className="text-sm" />
          <span>Collaborate</span>
        </button>
        <button className="flex items-center space-x-1.5 px-2 py-1 text-sm text-gray-600 hover:text-red-600">
          <FaTrash className="text-sm" />
          <span>Delete</span>
          <IoMdArrowDropdown className="text-base text-gray-600" />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center sm:justify-end space-x-3 space-y-2 w-full sm:w-auto sm:space-y-0">
        <button className="bg-white border rounded px-3 py-1 flex items-center space-x-1.5 px-2 py-1 text-sm text-gray-600 hover:text-blue-600">
          <AiOutlineBulb className="text-sm" />
          <span>Smart data</span>
        </button>
        <button className="bg-white border rounded px-3 py-1 flex items-center space-x-1.5 px-2 py-1 text-sm text-gray-600 hover:text-blue-600">
          <MdFilterList className="text-sm" />
          <span>Edit filters</span>
        </button>
        <button className="bg-white border rounded px-3 py-1 flex items-center space-x-1.5 px-2 py-1 text-sm text-gray-600 hover:text-blue-600">
          <MdEdit className="text-sm" />
          <span>Edit columns</span>
        </button>
        <button className="flex items-center space-x-1.5 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
          <BsArrowUpRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default LeadFilter;
