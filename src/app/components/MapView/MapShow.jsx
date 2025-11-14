"use client";
import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Image from "next/image";

const containerStyle = {
  width: "100%",
  height: "100%",
  minHeight: "600px",
};

// Helper function to parse coordinates from coords string or latitude/longitude
const parseCoordinates = (venue) => {
  if (venue.coords) {
    const [lat, lng] = venue.coords
      .split(",")
      .map((coord) => parseFloat(coord.trim()));
    return { lat: isFinite(lat) ? lat : null, lng: isFinite(lng) ? lng : null };
  }

  const lat = parseFloat(venue.latitude);
  const lng = parseFloat(venue.longitude);
  return {
    lat: isFinite(lat) ? lat : null,
    lng: isFinite(lng) ? lng : null,
  };
};

export default function MapShow({ venues = [], selectedVenue = null }) {
  const [activeMarker, setActiveMarker] = useState(null);
  const [map, setMap] = useState(null);

  // Determine which venues to display
  const displayVenues = selectedVenue ? [selectedVenue] : venues;

  // Calculate center based on venues
  const calculateCenter = () => {
    if (displayVenues.length === 0) {
      return { lat: 0, lng: 0 }; // Default center
    }

    let validVenues = displayVenues
      .map((venue) => parseCoordinates(venue))
      .filter((coords) => coords.lat !== null && coords.lng !== null);

    if (validVenues.length === 0) {
      return { lat: 0, lng: 0 };
    }

    const totalLat = validVenues.reduce((sum, coord) => sum + coord.lat, 0);
    const totalLng = validVenues.reduce((sum, coord) => sum + coord.lng, 0);

    return {
      lat: totalLat / validVenues.length,
      lng: totalLng / validVenues.length,
    };
  };

  const center = calculateCenter();

  // Center map when selected venue changes
  React.useEffect(() => {
    if (map && selectedVenue) {
      const coords = parseCoordinates(selectedVenue);
      if (coords.lat !== null && coords.lng !== null) {
        map.panTo(coords);
        map.setZoom(16);
      }
    } else if (map && !selectedVenue) {
      map.panTo(center);
      map.setZoom(13);
    }
  }, [selectedVenue, map, center]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyC6VMm5W3Mqxoo71Hdl8HNbkYCdqLFNd_0">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={selectedVenue ? 16 : 13}
        options={{
          gestureHandling: "greedy",
        }}
        onLoad={(mapInstance) => setMap(mapInstance)}
      >
        {displayVenues.map((venue) => {
          const coords = parseCoordinates(venue);
          if (coords.lat === null || coords.lng === null) return null;

          return (
            <React.Fragment key={venue.id}>
              <Marker
                position={coords}
                onClick={() => setActiveMarker(venue.id)}
                title={venue.name}
              />
              {activeMarker === venue.id && (
                <InfoWindow
                  position={coords}
                  onCloseClick={() => setActiveMarker(null)}
                >
                  <div
                    style={{
                      padding: "10px",
                      maxWidth: "200px",
                      backgroundColor: "white",
                      borderRadius: "8px",
                    }}
                  >
                    {venue.image && (
                      <div style={{ marginBottom: "8px" }}>
                        <Image
                          src={venue.image}
                          width={180}
                          height={100}
                          style={{ objectFit: "cover", borderRadius: "4px" }}
                          alt={venue.name}
                        />
                      </div>
                    )}
                    <h6 style={{ margin: "8px 0", fontWeight: "bold" }}>
                      {venue.name}
                    </h6>
                    <p
                      style={{
                        margin: "4px 0",
                        fontSize: "12px",
                        color: "#666",
                      }}
                    >
                      {venue.address}
                    </p>
                  </div>
                </InfoWindow>
              )}
            </React.Fragment>
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
}
