
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import BottomModal from "./BottomModal";
  
export default function SchoolFilterButtons() {
  const filters = ["All", "Universities", "Colleges", "High Schools", "Primary Schools"];
  const [activeFilter, setActiveFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-full">
      <div className="flex py-4 overflow-x-auto whitespace-nowrap scrollbar-none" style={{ scrollbarWidth: 'none'}}>
        <div className="flex space-x-2 pl-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`flex items-center gap-2 px-4 py-1 rounded-md border transition-all whitespace-nowrap ${
                activeFilter === filter
                  ? "text-red-600 border-red-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {filter} <IoIosArrowDown/>
            </button>
          ))}
        </div>
      </div>

      <BottomModal open={isModalOpen} setOpen={setIsModalOpen}>
        <div className="mx-auto max-w-2xl space-y-4 text-neutral-200">
          <h2 className="text-2xl font-bold">{activeFilter}</h2>
          <div className="grid grid-cols-2 gap-4">
            {activeFilter === "Universities" && (
              <>
                <button className="p-2 bg-neutral-800 rounded-lg">UNZA</button>
                <button className="p-2 bg-neutral-800 rounded-lg">Cavendish</button>
                <button className="p-2 bg-neutral-800 rounded-lg">UNILUS</button>
                <button className="p-2 bg-neutral-800 rounded-lg">CBU</button>
              </>
            )}
            {/* Add more filter options for other categories */}
          </div>
        </div>
      </BottomModal>
    </div>
  );
}
