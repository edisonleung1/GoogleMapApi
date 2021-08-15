import React,{useState,useRef,useEffect} from 'react';
const keys=require('../config/keys');

const Map = (props) => {

  const googleMapRef = useRef();
  let googleMap,service,center;
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${keys.googleKey}&language=en&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    center={
      lat:props.lat,
      lng:props.lng
    };
    googleMapScript.addEventListener("load", () => {
      createGoogleMap(center);
    });
  }, [props.lat,props.lng,props.name]);

  const createGoogleMap=(center)=> {

    googleMap = new window.google.maps.Map(googleMapRef.current, {
      center: center,
      zoom: 11,
      disableDefaultUI: true,
    });

    const request = {
      query: props.name,
      fields: ["name", "geometry","formatted_address"],
    };
    
    service = new window.google.maps.places.PlacesService(googleMap);
    service.findPlaceFromQuery(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
        for (let i = 0; i < results.length; i++) {
          props.updateresults(results);
          createMarker(results[i]);
        }
        googleMap.setCenter(results[0].geometry.location);
      }
    });

    function createMarker(place) {
      if (!place.geometry || !place.geometry.location) return;
      const marker = new window.google.maps.Marker({
        map:googleMap,
        position: place.geometry.location,
      });
    };
  };

  return (
    <div
      id="google-map"
      ref={googleMapRef}
      style={{ width: "100%", height: "500px" }}
    />
  );
};


export default Map;
