'use client';

import { GoPencil } from "react-icons/go";
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineCheck, MdStar, MdOutlineSignalCellularAlt } from "react-icons/md";

const Modal = ({ selectedLead, closeModal }) => {
  if (!selectedLead) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[100%] max-w-5xl h-auto md:h-[100%] p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
        >
          ×
        </button>

        <div className="space-y-6 overflow-y-auto max-h-full">
          <div>
            <p className="text-lg font-bold text-gray-800">
              Engage with {selectedLead.name}
            </p>
          </div>

          <div className="flex items-center space-x-4 border p-4 rounded-lg shadow-md bg-white">
            {selectedLead.icon}
            <div>
              <h3 className="text-xl font-bold">{selectedLead.name}</h3>
              <p className="text-sm text-gray-500">{selectedLead.company}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center bg-blue-50 p-4 rounded-md space-y-4 md:space-y-0">
            <div className="text-md text-gray-700">{selectedLead.details}</div>
            <div className="flex space-x-2">
              <button
                className="px-4 py-2 border bg-white text-blue-600 rounded shadow-sm hover:bg-gray-100"
                onClick={() => alert("Editing...")}
              >
                <GoPencil className="h-5 w-5 mr-2 inline" />
                Edit
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600"
                onClick={() => alert("Approved!")}
              >
                <FaPaperPlane className="h-5 w-5 mr-2 inline" />
                Approve and Send
              </button>
            </div>
          </div>

          {selectedLead.whyIPickedThisLead && (
            <div className="border p-4 rounded-lg bg-blue-50 space-y-4">
              <h4 className="text-lg font-bold text-blue-500">Why I Picked This Lead</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {selectedLead.whyIPickedThisLead.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mt-4">
                {selectedLead.decisionMaker && (
                  <div className="flex items-center border p-4 rounded-lg shadow-md bg-white">
                    <MdOutlineCheck className="text-green-500 mr-2 text-3xl" />
                    <p className="text-gray-700 text-sm">
                      Decision Maker: {selectedLead.decisionMaker}
                    </p>
                  </div>
                )}
                {selectedLead.potentialDealValue && (
                  <div className="flex items-center border p-4 rounded-lg shadow-md bg-white">
                    <MdStar className="text-yellow-500 mr-2 text-3xl" />
                    <p className="text-gray-700 text-sm">
                      Potential Deal Value: ${selectedLead.potentialDealValue}
                    </p>
                  </div>
                )}
                {selectedLead.intent && (
                  <div className="flex items-center border p-4 rounded-lg shadow-md bg-white">
                    <MdOutlineSignalCellularAlt className="text-blue-500 mr-2 text-3xl" />
                    <p className="text-gray-700 text-sm">Intent: {selectedLead.intent}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {selectedLead.about && (
            <div className="border p-4 rounded-lg shadow-md bg-white">
              <h4 className="text-lg font-bold text-gray-800">About {selectedLead.name}</h4>
              <p className="text-sm text-gray-600 mt-2">{selectedLead.about}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
