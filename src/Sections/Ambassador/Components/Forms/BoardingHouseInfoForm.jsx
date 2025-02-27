import React, { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
const BoardingHouseInfo = () => {
  const [location, setLocation] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [image, setImage] = useState(null);

  // Function to get user's current coordinates
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates(`${position.coords.latitude}, ${position.coords.longitude}`);
        },
        () => {
          alert("Unable to retrieve location. Please enable GPS.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  // Function to handle image upload
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="w-full mx-auto  ">
      <h3 className="text-lg  mb-2">Boarding House Information</h3>

      <label htmlFor="BoardingHouseName" className="block text-sm font-medium text-gray-700">BoardingHouse Name (if any)</label>
      <input
        type="text"
        id="BoardingHouseName"
        className="mt-2 w-full  border border-gray-3bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2"
        placeholder="Sunshine boarding house"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      
      {/* Manual Location Input */}
      <label htmlFor="location" className="block text-sm font-medium text-gray-700">Enter Location</label>
      <input
        type="text"
        id="location"
        className="mt-2 w-full  border border-gray-3bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="e.g., Lusaka, Thornpark"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      {/* Auto Location Button */}
      <label htmlFor="coordinates" className="block text-sm font-medium text-gray-700 mt-4">Auto Exact Coordinates (Click button)</label>
      <p className="mt-2 italic text-gray-600 rounded-r-lg border-l-2 border-red-500 p-2 bg-red-100" >Ensure that you are at the exact location of the Boarding house before clicking the button </p>
      <input
        type="text"
        id="coordinates"
        className="mt-2 w-full  border border-gray-3bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={coordinates}
        readOnly
      />

      <button type="button" onClick={getLocation} className="relative mt-2 inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
          <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
          <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
              <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
          </span>
          <span class="relative flex items-center gap-1 text-white"><CiLocationArrow1/>Get Current Location</span>
      </button>


      {/* Image Upload */}
      <label htmlFor="image" className="block text-sm font-medium text-gray-700 mt-4 mb-2">Upload Image</label>
      <p className="italic text-gray-600 rounded-r-lg border-l-2 border-red-500 p-2 bg-red-100" >Upload one good QUALITY image of the outside (Front View) </p>
      <input
        type="file"
        id="image"
        accept="image/*"
        className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default BoardingHouseInfo;