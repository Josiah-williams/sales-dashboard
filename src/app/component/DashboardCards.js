'use client';

import React, { useState } from "react";
import { FaUsers, FaChartLine, FaDollarSign, FaRegClock } from "react-icons/fa";
import { MdPerson, MdOutlineEmail, MdOutlineCalendarToday } from "react-icons/md";
import Modal from "./Modal";

const DashboardCards = () => {
  const [selectedLead, setSelectedLead] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activities = [
    {
      id: 1,
      name: "Jane Reyes",
      role: "COO",
      about: "Jane Reyes, the Chief Operating Officer at Northwind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-store coffee shops have flourished, becoming a hallmark of quality and innovation.",
      company: "COO . Northwind Traders",
      description: "Engage with Jane Reyes",
      details:
        "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
      label: "Expand business . High buying intent",
      icon: <MdPerson className="text-pink-500 text-4xl" />,
      potentialDealValue: "1M",
      intent: "High",
      decisionMaker: "Yes",
      whyIPickedThisLead: ["Jane is a key decision maker and was browsing expresso machines on first coffee website .", "Multiple people at her company have reported 'slowness' during service requests.", "Northwind Traders currently sees $200M in revenue from their in-store coffee shops."]
    },
    {
      id: 2,
      name: "Allan Munger",
      role: "Head of real estate Development",
      description: "Prepare for meeting with Allan",
      company: "Head of real estate Development . Contoso Coffee",
      details:
        "Prepare for a high-buying intent meeting scheduled at 2 PM regarding upgrading service contract.",
      label: "Upcoming meeting . Due Today",
      icon: <MdPerson className="text-pink-500 text-4xl" />,
    },

  ];
  const otherActivities = [
    {
      title: "Cafe A100 woodland bank",
      marker: "Woodland bank . $280,000 . 8 days to close",
      tag: "Review draft and reply to Chris Naido",
      icon: <FaUsers className="text-blue-500 text-2xl" />,
    },
    {
      title: "Partnership opportunity for Fabrikam",
      marker: "Fabrikam . $5,000,000 . 12 days to close",
      tag: "Prepare one for Fabrikam's key stakeholder meeting",
      icon: <FaChartLine className="text-green-500 text-2xl" />,
    },      
  ];

  const openModal = (activity) => {
    setSelectedLead(activity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedLead(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded shadow">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-md mb-4 md:mb-6 font-bold">
          Hi Mona, <span className="text-blue-600">68% </span>of goal achieved
          and rest can be achieved by focusing on 20 top leads.
        </h2>
        <ProgressBar
          timeRemaining="1 month until Q4 ends"
          target="$45 million"
          achieved="68%"
          segments={[
            { percentage: 30, color: "#98db49", label: "Won $18m" },
            { percentage: 15, color: "#2a9dec", label: "Committed $8m" },
            { percentage: 15, color: "#da2aec", label: "Best Case $7m" },
            { percentage: 5, color: "#FFC300", label: "Qualified $3m" },
            { percentage: 35, color: "#f5f4f2", label: "Leads $75m" },
          ]}
        />
      </div>

      <div className="text-gray-500 mt-8">
        <h3 className="text-sm; text-xs md:translate-y-9 font-bold">
          Copilot has pinpointed 20 leads that show strong purchase intent and are actively engaging. These leads need your focus.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {activities.map((activity, index) => (
          <div key={activity.id} onClick={() => openModal(activity)}
          className="mt-1 md:mt-10"
          >
            <Card
              name={activity.name}
              company={activity.company}
              description={activity.description}
              details={activity.details}
              icon={activity.icon}
              tag={activity.tag}
              label={activity.label}
              marker={activity.marker}
            />
          </div>
        ))}

        <div>
        <h3 className="text-sm font-semibold mb:2 md:mb-4 text-gray-500">Other Key Activities</h3>
          <div className="space-y-2">
            {otherActivities.map((activity, index) => (
              <Card key={index} {...activity} />
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal selectedLead={selectedLead} closeModal={closeModal} />
      )}
    </div>
  );
};

const ProgressBar = ({ segments, timeRemaining, target, achieved }) => {
  return (
    <div className="w-full md:w-[600px] mb-5">
      <div className="flex flex-col md:flex-row justify-between items-center mb-1">
        <div className="text-xs text-gray-600 flex items-center space-x-2">
          <FaRegClock className="text-gray-500 mr-1" />
          {timeRemaining}
        </div>
        <div className="text-xs text-gray-600 font-semibold">
          Target: <span className="text-black">{target}</span>
        </div>
        <div className="text-xs text-gray-600">
          <span className="font-semibold">{achieved}</span> of target achieved
        </div>
      </div>

      <div className="relative w-full bg-gray-200 rounded h-2 flex overflow-hidden mt-1">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="h-full"
            style={{
              width: `${segment.percentage}%`,
              backgroundColor: segment.color,
            }}
          ></div>
        ))}
      </div>

      <div className="flex mt-1 text-xs font-medium text-gray-600">
        {segments.map((segment, index) => (
          <div
            key={index}
            className="flex items-center space-x-2"
            style={{
              flexGrow: segment.percentage,
              textAlign: "center",
            }}
          >
            
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: segment.color }}
            ></span>
            <span>{segment.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({
  title,
  description,
  marker,
  tag,
  icon,
  details,
  name,
  company,
  onClick,
  label,
}) => {
  return (
    <div
      className="p-4 border rounded-lg hover:shadow-md cursor-pointer w-full"
      onClick={onClick}
    >
      {icon && (
        <div className="flex items-center">
          {icon}
          {name && <h3 className="text-lg font-bold ml-2">{name}</h3>}
          {title && <p className="text-black-500 font-bold ml-2">{title}</p>}
        </div>
      )}
      {company && <p className="text-gray-500 ml-11 text-sm">{company}</p>}

      {description || details ? (
        <div className="bg-blue-50 rounded-md p-2 mt-2">
          <div className="flex items-center">
            {description && (
              <>
                {description.startsWith("Engage") ? (
                  <MdOutlineEmail className="mr-2" />
                ) : (
                  <MdOutlineCalendarToday className="mr-2" />
                )}
                <p className="text-md font-bold">{description}</p>
              </>
            )}
          </div>
          {details && <p className="text-sm">{details}</p>}
        </div>
      ) : null}
      {marker && <p className="text-gray-500 ml-8 text-sm">{marker}</p>}
      {tag && (
        <span className="inline-flex items-center px-2 py-1 rounded bg-blue-50 text-sm">
          {tag.startsWith("Review") ? (
            <MdOutlineEmail className="mr-1" />
          ) : (
            <MdOutlineCalendarToday className="mr-1" />
          )}
          {tag}
        </span>
      )}
      {label && <p className="text-gray-500 text-sm mt-4">{label}</p>}
    </div>
  );
};

export default DashboardCards;
