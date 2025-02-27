import React from "react";
import { Link } from "react-router-dom";
import EarningsChart from "../../Components/EarningsChat";
import BoardingHouseWidget from "../../Components/Widget";

export default function Overview() {
  const earningsData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const totalEarnings = 0.0;
  const growthRate = 0;

  return (
    <div>
      <div className="flex items-center justify-center mb-2 border border-gray-100 rounded-md">
        <EarningsChart
          earnings={earningsData}
          total={totalEarnings}
          growth={growthRate}
        />
      </div>
      <div>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-md border border-gray-200">
          <h2 className="text-xl font-bold text-gray-600">
            Submit your boarding house infomation🏡
          </h2>
          <p className="text-gray-500 mt-2">Submit it when you're ready.</p>
          <div className="mt-4">
            <div className="mt-6">
              <Link
                to="/dashboard/create"
                className="relative inline-block text-lg group"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-red-500 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Start submission</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center ">
        <BoardingHouseWidget />
      </div>
    </div>
  );
}
