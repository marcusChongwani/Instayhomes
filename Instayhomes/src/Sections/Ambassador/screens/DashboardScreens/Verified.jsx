import React from "react";
import ListingCard from "../../Components/ListingCard";

const listings = [
  {
    status: "selected",
    name: "Elite Residences",
    landlord: "MR BANDA",
    phone: "0788888999",
    location: "Near ZCAS University, Lusaka",
    coordinates: { lat: 45.123, lng: 78.91 },
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=60&w=3000",
  },
  {
    status: "notSelected",
    name: "Elite Residences",
    landlord: "MR BANDA",
    phone: "0788888999",
    location: "Near ZCAS University, Lusaka",
    coordinates: { lat: 45.123, lng: 78.91 },
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=60&w=3000",
  },
];

const Verified = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {listings.map((listing, index) => (
        <ListingCard key={index} listing={listing} />
      ))}
    </div>
  );
};

export default Verified;
