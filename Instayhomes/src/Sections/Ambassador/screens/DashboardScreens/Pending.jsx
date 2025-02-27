import React from "react";
import ListingCard from "../../Components/ListingCard";

const listings = [
  {
    status: "inReview",
    name: "Optiquest Student Apartments",
    landlord: "MRS NGOMA",
    phone: "0777777654",
    location: "Near Cavendish University - Main campus, in Villa",
    coordinates: { lat: 36.567, lng: 743.7 },
    image:
      "https://plus.unsplash.com/premium_photo-1682377521625-c656fc1ff3e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwaG9tZXN8ZW58MHx8MHx8fDA%3D",
  },
];

const Pending = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {listings.map((listing, index) => (
        <ListingCard key={index} listing={listing} />
      ))}
    </div>
  );
};

export default Pending;
