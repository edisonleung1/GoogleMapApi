import React from 'react';
import GoogleMapReact from 'google-map-react';
const keys=require('../config/keys');
//import * as script from "https://maps.googleapis.com/maps/api/js?key=AIzaSyD5gKYClUYvfmTPUhbkvEk41zqduLVWOew&callback=initMap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map=(props)=>{

  let location={};
  if((props.lat!=='') && (props.lng!=='')){
    location={
      center: {
        lat: props.lat,
        lng: props.lng
      },
      zoom: 11
    }
  }
  else{
    location={
      center:{
        lat: 43.651070,
        lng: -79.347015
      },
      zoom: 11
    }
  }
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    console.log('載入完成!') // 印出「載入完成」
  };
    return(
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: keys.googleKey,language:'en'}}
          center={location.center}
          zoom={location.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >

        </GoogleMapReact>
      </div>
    );
  //return <div>{displaymap()}</div>;
}

export default Map;
