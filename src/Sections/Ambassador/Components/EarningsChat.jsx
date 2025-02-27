import React from "react";

const EarningsChart = ({ earnings, total, growth }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      {/* Total Earnings */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-500 text-sm">Total earnings</h2>
          <div className="flex items-center space-x-2">
            <p className="text-2xl font-bold text-gray-700">
              K{total.toLocaleString()}
            </p>
            <span className="text-green-500 text-sm font-semibold">
              {growth}% ↑
            </span>
          </div>
        </div>

        <div>
          <h2 className="text-gray-500 text-sm">Pending earnings</h2>
          <p className="text-2xl font-bold text-gray-300">
            K{total.toLocaleString()}
          </p>
        </div>
      </div>
      {/* Bar Chart */}
      <div className="flex justify-between mt-4">
        {earnings.map((value, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className="w-3 rounded-lg bg-gray-300 relative"
              style={{ height: "60px" }}
            >
              {/* Filled part */}
              <div
                className="bg-red-500 absolute bottom-0 w-full rounded-lg"
                style={{ height: `${value}%` }} // Adjust height dynamically
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {
                [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ][index]
              }
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarningsChart;
