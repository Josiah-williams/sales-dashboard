'use client'

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DashboardTable = () => {
  const [data, setData] = useState([
    { name: "Winford Asher", subject: "Cafe A100 for commercial use", status: "New", created: "4/02/2024 12:00 PM", isChecked: false },
    { name: "Josia Love", subject: "Upgrading service plan", status: "New", created: "3/30/2024 7:45 AM", isChecked: false },
    { name: "Harrison Curtis", subject: "Issue with throughput", status: "New", created: "3/28/2024 9:30 AM", isChecked: false },
    {
      name: "Jermaine Berrett",
      subject: "New roaster in distribution facility",
      status: "New",
      created: "3/25/2014 11:05 AM",
      isChecked: false
    },
    {
      name: "Gerald Steufels",
      subject: "Concerns on current machines",
      status: "New",
      created: "3/23/2014 4:50 PM",
      isChecked: false
    },
    {
      name: "Halle Grihs",
      subject: "Expanding business",
      status: "New",
      created: "3/21/2014 10:20 AM",
      isChecked: false
    },
    {
      name: "Rachel Michael",
      subject: "Addressing service concerns",
      status: "New",
      created: "3/10/2014 1:15 PM",
      isChecked: false
    },
    {
      name: "Alex Brown",
      subject: "Premium coffee beans",
      status: "New",
      created: "1/17/2014 8:00 AM",
      isChecked: false
    },
    {
      name: "Lilly Pyles",
      subject: "Cafe A100 bulk rate",
      status: "New",
      created: "3/13/2014 2:45 PM",
      isChecked: false
    },
    {
      name: "Jane Reyes",
      subject: "Improving cost per cup",
      status: "New",
      created: "3/10/2014 9:30 AM",
      isChecked: false
    }
  ]);

  const handleCheckboxChange = (index) => {
    const updatedData = [...data];
    updatedData[index].isChecked = !updatedData[index].isChecked;
    setData(updatedData);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.subject.toLowerCase().includes(searchQuery.toLowerCase()) 
    );
  });

  return (
    <div className="bg-white p-4 md:p-6 rounded shadow">
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Sort, filter and search with copilot" 
          value={searchQuery} 
          onChange={handleSearchChange} 
          className="border border-blue-500 rounded-md p-2 w-full md:w-[400px]" 
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="p-2 md:p-4">
                <div className="flex items-center space-x-2">
                  <span>Name</span>
                  <FaChevronDown className="text-gray-400" />
                </div>
              </th>
              <th className="p-2 md:p-4">
                <div className="flex items-center space-x-2">
                  <span>Topic</span>
                  <FaChevronDown className="text-gray-400" />
                </div>
              </th>
              <th className="p-2 md:p-4">
                <div className="flex items-center space-x-2">
                  <span>Status reason</span>
                  <FaChevronDown className="text-gray-400" />
                </div>
              </th>
              <th className="p-2 md:p-4">
                <div className="flex items-center space-x-2">
                  <span>Created on</span>
                  <FaChevronDown className="text-gray-400" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="p-2 md:p-4 flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={item.isChecked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span className="text-blue-500">{item.name}</span>
                </td>
                <td className="p-2 md:p-4">{item.subject}</td>
                <td className="p-2 md:p-4">{item.status}</td>
                <td className="p-2 md:p-4">{item.created}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
