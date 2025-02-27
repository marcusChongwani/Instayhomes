import React from "react";
import {
  FaRegEye,
  FaCheckCircle,
  FaTimesCircle,
  FaSpinner,
} from "react-icons/fa";

const ListingCard = ({ listing }) => {
  // Determine the badge style and icon based on the listing status
  const badgeStyles = {
    selected: "bg-green-100 text-green-800 border-green-600",
    inReview: "bg-yellow-100 text-yellow-800 border-yellow-600",
    notSelected: "bg-red-100 text-red-800 border-red-600",
  };

  const badgeText =
    listing.status === "selected"
      ? "Selected"
      : listing.status === "inReview"
      ? "In Review"
      : listing.status === "notSelected"
      ? "Not Selected"
      : listing.status;

  const badgeIcon =
    listing.status === "selected" ? (
      <FaCheckCircle />
    ) : listing.status === "inReview" ? (
      <FaRegEye />
    ) : listing.status === "notSelected" ? (
      <FaTimesCircle />
    ) : (
      <FaRegEye />
    );

  return (
    <div className="flex flex-col mb-2.5 bg-white shadow-sm border border-slate-200 rounded-lg">
      <div className="p-4">
        <button
          className={`flex items-center gap-1 text-sm font-medium me-2 px-2.5 py-0.5 rounded-md border ${
            badgeStyles[listing.status] || badgeStyles.notSelected
          } mb whitespace-nowrap`}
        >
          {badgeIcon} {badgeText}
        </button>

        <h6 className="my-2 text-slate-800 text-xl font-semibold">
          {listing.name}
        </h6>

        <p className="text-slate-600 leading-relaxed font-light">
          <span className="text-gray-500">Landlord/Landlady:</span>{" "}
          {listing.landlord} <br />
          <span className="text-gray-500">Phone:</span> {listing.phone} <br />
          <span className="text-gray-500">Location:</span> {listing.location}{" "}
          <br />
          <span className="text-gray-500">Coordinates:</span> (
          {listing.coordinates.lat}, {listing.coordinates.lng})
        </p>
      </div>

      <div className="h-56 m-2.5 overflow-hidden text-white rounded-md">
        <img
          src={listing.image}
          alt="listing"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ListingCard;
