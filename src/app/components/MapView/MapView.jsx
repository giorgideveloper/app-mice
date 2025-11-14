"use client";
import { use, useEffect, useState } from "react";
import MapCard from "./MapCard";
import MapSelects from "./MapSelects";
import {
  fetchVenues,
  fetchLocation,
  fetchVenuesFilter,
  fetchCategory,
} from "@/service/service";
import { IoMdArrowRoundBack } from "react-icons/io";
import MapSearch from "./MapSearch";
import MapShow from "./MapShow";

export default function MapView({ lang, id, dict }) {
  const [venues, setVenues] = useState([]);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationValue, setLoacationValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [categoryValue, setCategoryValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchVenues(lang, id).then((data) => {
      setVenues(data.venues);
      setLoading(false);
    });
  }, [lang, id]);

  useEffect(() => {
    fetchLocation(lang).then((data) => {
      setLocation(data);
    });
  }, [lang]);

  useEffect(() => {
    fetchCategory(lang).then((data) => {
      setCategory(data);
    });
  }, [lang]);

  useEffect(() => {
    if (locationValue.length > 0) {
      fetchVenuesFilter(lang, id, locationValue).then((data) => {
        setVenues(data.venues);
        setLoading(false);
      });
    }
  }, [lang, id, locationValue]);

  useEffect(() => {
    if (categoryValue.length > 0) {
      fetchVenuesFilter(lang, id, locationValue, categoryValue).then((data) => {
        setVenues(data.venues);
        setLoading(false);
      });
    } else {
      // If category filter is cleared, refetch venues based on location only
      if (locationValue.length > 0) {
        fetchVenuesFilter(lang, id, locationValue).then((data) => {
          setVenues(data.venues);
          setLoading(false);
        });
      } else {
        // If no filters are applied, refetch all venues
        fetchVenues(lang, id).then((data) => {
          setVenues(data.venues);
          setLoading(false);
        });
      }
    }
  }, [lang, id, categoryValue, locationValue]);

  const handleSearchClick = () => {
    if (searchTerm.length > 0) {
      const filteredVenues = venues.filter((venue) =>
        venue.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setVenues(filteredVenues);
    } else {
      // If search term is empty, refetch the original venues
      fetchVenues(lang, id).then((data) => {
        setVenues(data.venues);
        setLoading(false);
      });
    }
  };

  const handleVenueClick = (venue) => {
    // Toggle venue selection
    setSelectedVenue(selectedVenue?.id === venue.id ? null : venue);
  };

  return (
    <div className="container">
      <div className="row mt-5 mb-2">
        {/* navigation back to venues page */}
        <div className="col-12">
          <button
            className="btn btn-light mb-5"
            onClick={() => window.history.back()}
          >
            <IoMdArrowRoundBack /> {dict?.venue?.map?.backToVenues}
          </button>
          <h3>{dict?.venue?.map?.viewOnMap}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-12">
          <MapSearch
            dict={dict}
            venues={venues}
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            handleSearchClick={handleSearchClick}
          />
          <div className="select mb-3">
            <MapSelects
              id={id}
              location={location?.results}
              setLocationValue={setLoacationValue}
              category={category?.results}
              setCategoryValue={setCategoryValue}
              dict={dict}
            />
          </div>
          <div
            className="map-cards overflow-auto"
            style={{ maxHeight: "50vh", marginBottom: "40px" }}
          >
            {loading ? (
              <p>Loading...</p>
            ) : (
              venues.map((venue) => (
                <MapCard
                  key={venue.id}
                  venue={venue}
                  onVenueClick={handleVenueClick}
                  isSelected={selectedVenue?.id === venue.id}
                />
              ))
            )}
          </div>
        </div>
        <div className="col-lg-6 col-12 mb-5">
          <MapShow venues={venues} selectedVenue={selectedVenue} />
        </div>
      </div>
    </div>
  );
}
