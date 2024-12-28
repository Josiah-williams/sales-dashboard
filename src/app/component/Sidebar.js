'use client';

import React, { useState } from "react";
import { BsLightningCharge } from 'react-icons/bs';
import {
  MdHome,
  MdAccessTime,
  MdPinDrop,
  MdDashboard,
  MdPerson,
  MdEmail,
  MdOutlineSettings,
  MdList,
  MdKeyboardArrowDown,
  MdMenu,
  MdClose,
} from "react-icons/md";
import {
  FaSalesforce,
  FaUsers,
  FaAlignLeft,
  FaRegCopy,
  FaFileInvoice,
  FaProductHunt,
  FaUserGraduate,
} from "react-icons/fa";
import { TbRoadSign } from "react-icons/tb";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAgentSkillOpen, setIsAgentSkillOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Leads');

  const sections = [
    {
      title: "My Work",
      items: [
        { name: "Sales accelerator", icon: <FaSalesforce /> },
        { name: "Dashboards", icon: <MdDashboard /> },
        { name: "Activities", icon: <MdAccessTime /> },
      ],
    },
    {
      title: "Customers",
      items: [
        { name: "Accounts", icon: <FaUsers /> },
        { name: "Contacts", icon: <MdPerson /> },
        {
          name: "Agent Skills",
          icon: <FaUserGraduate />,
          action: () => setIsAgentSkillOpen(true),
        },
      ],
    },
    {
      title: "Sales",
      items: [
        { name: "Leads", icon: <MdPinDrop />, isActive: true },
        { name: "Opportunities", icon: <MdDashboard /> },
        { name: "Competitors", icon: <MdPerson /> },
      ],
    },
    {
      title: "Collateral",
      items: [
        { name: "Quotes", icon: <FaFileInvoice /> },
        { name: "Orders", icon: <FaFileInvoice /> },
        { name: "Invoices", icon: <FaFileInvoice /> },
        { name: "Products", icon: <FaProductHunt /> },
        { name: "Sales Literature", icon: <FaFileInvoice /> },
      ],
    },
    {
      title: "Marketing",
      items: [
        { name: "Marketing lists", icon: <MdList /> },
        { name: "Quick Campaigns", icon: <BsLightningCharge /> },
      ],
    },
    {
      title: "Performance",
      items: [{ name: "Sales" }],
    },
  ];

  const closeAgentSkillModal = () => {
    setIsAgentSkillOpen(false);
  };

  return (
    <>
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <MdMenu
          className="text-3xl text-gray-600 cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        />
      </div>

      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 bg-gray-100 p-4 shadow-lg transform z-50 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block`}
      >
        <div className="md:hidden flex justify-end">
          <MdClose
            className="text-2xl text-gray-600 cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>

        <div className="space-y-2 mt-4">
          <div className="flex items-center space-x-2">
            <MdHome className="text-gray-600 text-2xl" />
            <span className="text-gray-800 font-medium">Home</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdAccessTime className="text-gray-600 text-2xl" />
            <span className="text-gray-800 font-medium">Recent</span>
            <span className="ml-auto">
              <MdKeyboardArrowDown className="text-gray-600" />
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <MdPinDrop className="text-gray-600 text-2xl" />
            <span className="text-gray-800 font-medium">Pinned</span>
            <span className="ml-auto">
              <MdKeyboardArrowDown className="text-gray-600" />
            </span>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-gray-500 text-sm font-medium mb-2">
                {section.title}
              </h4>
              <div className="space-y-2">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center space-x-2 p-2 hover:bg-blue-100 rounded cursor-pointer ${
                    item.name === activeSection ? 'bg-white' : ''
                    }`}
                    onClick={() => {
                      setActiveSection(item.name);
                    item.action && item.action();
                    }}
                  >
                    <div className="text-black-600">{item.icon}</div>
                    <span className="text-gray-800 font-medium">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {isAgentSkillOpen && <AgentSkillModal closeModal={closeAgentSkillModal} />}
    </>
  );
};

const AgentSkillModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl sm:max-w-3xl lg:max-w-4xl flex flex-col">
        <div className="flex justify-between items-center p-4 sm:p-6 border-b">
          <div className="flex items-center">
            <MdOutlineSettings className="text-blue-500 mr-2 text-lg sm:text-xl" />
            <h2 className="text-xl sm:text-2xl font-semibold">Agent Skill</h2>
          </div>
          <button
            className="text-gray-500 hover:text-gray-700 text-xl"
            onClick={closeModal}
          >
            ×
          </button>
        </div>
        <div className="overflow-y-auto p-4 sm:p-6 flex-grow" style={{ maxHeight: '80vh' }}>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg shadow-inner mb-6">
            <p className="text-md sm:text-lg font-semibold leading-relaxed">
              Check if{' '}
                on-hand inventory
              {' '}
              will allow all{' '}
                sales orders
              {' '}
              to ship without delay.
            </p>

            <p className="mt-4 sm:mt-6 leading-relaxed text-sm sm:text-base">
              When{' '}
              <span className="inline-flex items-center bg-blue-200 text-blue-700 font-semibold px-3 py-1 rounded-full">
                <MdPerson className="text-blue-500 mr-2" />
                any vendor
              </span>{' '}
              sends an email with changes to{' '}
              <span className="inline-flex items-center bg-blue-200 text-blue-700 font-semibold px-3 py-1 rounded-full">
                <MdEmail className="text-blue-500 mr-2" />
                confirmed purchase orders
              </span>{' '}
              , check if the resulting{' '}
              <span className="inline-flex items-center bg-blue-200 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm">
                <FaAlignLeft  className="text-blue-500 mr-2"/>
              on hand inventory
                </span>{' '} 
                will allow{' '}
              <span className="inline-flex items-center bg-blue-200 text-blue-700 font-semibold px-3 py-1 rounded-full">
                <FaRegCopy className="text-blue-500 mr-2" />
                all sales orders
              </span>{' '}
              to{' '}
              <span className="inline-flex items-center bg-blue-200 text-blue-700 font-semibold px-3 py-1 rounded-full">
              <TbRoadSign className="text-blue-500 mr-2" />
               ship without delay. 
              </span>{'  '}
              If so,{' '}
              <span className="inline-flex items-center bg-blue-200 text-blue-700 font-semibold px-3 py-1 rounded-full">
                <TbRoadSign className="text-blue-500 mr-2" />
                update the purchase order
              </span>{' '}
              to reflect the change.
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-inner mb-6">
            <div className="flex items-center mb-4">
              <MdEmail className="text-blue-500 mr-2 text-lg sm:text-xl" />
              <h3 className="text-lg sm:text-xl font-semibold">Enable Email Access</h3>
            </div>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Allow the agent to access email inboxes to read mail from known vendors.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
              <div className="bg-white text-blue-600 px-4 py-2 rounded border border-gray-300 text-sm sm:text-base flex-grow">
                purchasing@contoso.com
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm sm:text-base">
                Allow Access
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4 p-4 sm:p-6 border-t">
          <button className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 text-sm sm:text-base">
            Activate
          </button>
          <button
            className="px-6 py-2 border border-gray-400 bg-white text-gray-700 rounded hover:bg-gray-100 text-sm sm:text-base"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
