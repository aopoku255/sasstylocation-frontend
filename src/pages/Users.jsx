import React, { useEffect, useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, InfoWindow, Marker, useJsApiLoader,  } from '@react-google-maps/api';
import axios from '../axios';
import axiosInstance from '../axios';
// import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 6.6720338,
  lng: -1.5693139
};

const Users = ()  => {
    const [data, setData] = useState([])
    const [activeMarker, setActiveMarker] = useState(null);
    const [directions, setDirections] = useState(null);
const [selectedMarker, setSelectedMarker] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAaquW_WUJP20HZnftmUWYGEXdNUqGoai0"
  })

  useEffect(() => {
    axiosInstance.get('/get-users').then((res) => {
       
        setData(res?.data?.data)
    }).catch((err) => {
        console.log(err)
    })
  }, [])


  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        {data.map(({ location, _id, name, email, contact, address }, index) => (
          <>
        <Marker
          key={_id}
          position={location}
          // onClick={() => handleMarkerClick(_id)}
          onClick={() => setActiveMarker(_id)} // Show tooltip on mouse over
          // onMouseOut={() => setActiveMarker(null)} // Hide tooltip on mouse out
        >
          {activeMarker === _id && (
            <InfoWindow>
              <div className='flex flex-col space-y-2 text-indigo-500'>
                {/* Tooltip content */}
                {/* <span>Marker ID: {_id}</span> */}
                <span>NAME: {name}</span>
                <span>EMAIL: {email}</span>
                <span>CONTACT: {contact}</span>
                <span>AREA: {address}</span>
                {/* Add a link to open Google Maps */}
    <a
      href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline font-bold"
    >
      View on Google Maps
    </a>
              </div>
            </InfoWindow>
          )}
         
        </Marker>
      
        </>
      ))}
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Users)