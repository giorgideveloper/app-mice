import React from "react";
import Image from "next/image";

export default function MapCard({ venue, onVenueClick, isSelected }) {
  return (
    <div
      className="card mb-3"
      style={{
        cursor: "pointer",
        height: "130px",
        border: isSelected ? "2px solid #062649" : "1px solid #dee2e6",
        backgroundColor: isSelected ? "#f8f9fa" : "white",
        transition: "all 0.2s ease",
      }}
      onClick={() => onVenueClick(venue)}
    >
      <div className="card-body d-flex align-items-center">
        <div className="card-image me-3">
          <Image
            src={venue.image}
            width={200}
            height={100}
            style={{ objectFit: "cover" }}
            alt="Map Location"
          />
        </div>
        <div className="flex-column">
          <h5 className="card-title ">{venue.name}</h5>
          <p className="card-text ">{venue.address}</p>
        </div>
      </div>
    </div>
  );
}
