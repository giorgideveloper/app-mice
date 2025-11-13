'use client'
import { useEffect, useState } from "react"
import MapCard from "./MapCard"
import MapSelects from "./MapSelects"
import { fetchVenues } from "@/service/service"


export default function MapView({ lang, id }) {
        const [venues, setVenues] = useState([]);
        useEffect(() => {
                fetchVenues(lang, id).then(data => {
                        setVenues(data.venues);
                })
        }, [lang, id])

return (
    <div className="container">
            <div className="row mt-5">
                {/* navigation back to venues page */}
                <div className="col-12">
                        <h2>MapView</h2>
                        <button className="btn btn-secondary mb-3" onClick={() => window.history.back()}> Back to Venues</button>
                </div>
            </div>
            <div className="row">
                    <div className="col-lg-6 col-12">
                            <div className="search d-flex justify-content-between mb-3">
                                    <input type="text" className="form-control border-bottom w-75" placeholder="Search..." /> 

                                    <button className="btn btn-primary" style={{width: '22%', backgroundColor: '#062649ff', border: 'none'}}>Search</button>
                            </div>
                            <div className="select mb-3">
                                <MapSelects />
                            </div>
                            <div className="map-cards overflow-auto" style={{maxHeight: '50vh', marginBottom: '40px'}}>
                                    {venues.map(venue => (
                                        <MapCard key={venue.id} venue={venue} />
                                    ))}
                            </div>
                    </div>
                    <div className="col-lg-6 col-12">
                            <p>This is the Map View component.</p>
                    </div>
            </div>
    </div>
)
}
