import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const BoardingHouseWidget = () => {
  const [boardingHouses, setBoardingHouses] = useState([
    {
      id: 1,
      name: "Sunrise Hostel",
      location: "Cavendish - Main",
      verified: false,
    },
    { id: 2, name: "Maple Lodge", location: "ZCAS", verified: false },
    { id: 3, name: "Oakwood Residence", location: "UNZA", verified: true },
    { id: 4, name: "Hilltop Apartments", location: "Unilus", verified: true },
  ]);

  // Count verified and pending boarding houses
  const verifiedCount = boardingHouses.filter((house) => house.verified).length;
  const pendingCount = boardingHouses.length - verifiedCount;

  return (
    <div className="border border-gray-100 w-full mx-auto bg-white shadow-md rounded-lg p-6 my-2">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Submitted Boarding Houses💃
      </h2>

      {/* Counters */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-center">
          <p className="text-2xl text-red-500 font-bold">
            {boardingHouses.length}
          </p>
          <p className="text-sm text-gray-600">Total Houses</p>
        </div>
        <div className="text-center">
          <p className="text-2xl text-green-600 font-bold">{verifiedCount}</p>
          <p className="text-sm text-gray-600">Verified</p>
        </div>
        <div className="text-center">
          <p className="text-2xl text-yellow-600 font-bold">{pendingCount}</p>
          <p className="text-sm text-gray-600">Pending</p>
        </div>
      </div>

      {/* Boarding Houses List */}
      <div className="space-y-4">
        {boardingHouses.map((house) => (
          <div
            key={house.id}
            className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-gray-800">{house.name}</h3>
                <p className="text-sm text-gray-600">{house.location}</p>
              </div>
              <div>
                {house.verified ? (
                  <span className="flex items-center text-green-600">
                    <FaCheckCircle className="mr-2" /> Verified
                  </span>
                ) : (
                  <span className="flex items-center text-yellow-600">
                    <FaTimesCircle className="mr-2" /> Pending
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardingHouseWidget;
