import React from 'react'
import style from './MapApp.module.css'
import ImageApp from '@/app/plugins/ImageApp';
import { MdOutlineLocationOn } from "react-icons/md";
 import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function MapApp({ data }) {
  const [map, setMap] = React.useState(true);
  console.log("Map Data:", data.coords);
   
  const cordinations = data?.coords ? data?.coords.split(',').map(coord => parseFloat(coord.trim())) : [0, 0];
  console.log("Cordinations:", cordinations);
const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: data?.latitude || cordinations[0],
  lng: data?.longitude || cordinations[1]
};

const markers = [
  { lat: data?.latitude || cordinations[0], lng: data?.longitude || cordinations[1], title: 'Location 1' },
  { lat: data?.latitude || cordinations[0], lng: data?.longitude || cordinations[1], title: 'Location 2' }
];
  return (
    <div className="row">
      {data?.map_cover ? (
        <div className={style.mapContainer}>
          {map ? (
            <div className={style.mapImage}>
              <a
                href={
                data?.latitude && data?.longitude
                  ? `https://www.google.com/maps?q=${data?.latitude || cordinations[0]},${data?.longitude || cordinations[1]}`
                  : "#"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImageApp  img={data?.map_cover?.image} alt="Map" />
            </a>
            <div className={style.mapImageBtn}>
              <button
                onClick={() => setMap(!map)}
                className="btn btn-light rounded-pill fs-6 p-2 px-3"
              >
                <MdOutlineLocationOn className="me-1 fs-4" /> View on Maps
              </button>
            </div>
          </div>
        ) : (
          <LoadScript googleMapsApiKey="AIzaSyC6VMm5W3Mqxoo71Hdl8HNbkYCdqLFNd_0">
            <GoogleMap
              mapContainerStyle={{ ...containerStyle, height: '600px' }}
              center={center}
              zoom={15}
            >
              {markers.map((marker, index) => (
                <Marker
                  key={index}
                  position={{ lat: marker.lat, lng: marker.lng }}
                  title={marker.title}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        )}
      </div>) : ''}
    </div>
  )
}
