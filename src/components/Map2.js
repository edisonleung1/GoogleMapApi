import React,{useState} from 'react';
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
      zoom: 11a
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

  const [mapApiLoaded, setMapApiLoaded] = useState(false)
  const [mapInstance, setMapInstance] = useState(null)
  const [mapApi, setMapApi] = useState(null)
  const apiHasLoaded = (map, maps) => {
    setMapInstance(map)
    setMapApi(maps)
    setMapApiLoaded(true)
  };

  const findLocation = () => {
    let request={};
    if(mapApiLoaded && (props.name!=='') ) {
      const service = new mapApi.places.PlacesService(mapInstance)
      if((props.lat!=='') && (props.lng!=='')){
        request = {
          location: {lat:props.lat,lng:props.lng},
          radius: 1000,
          name:props.name
        };
      }
      else{
        request = {
          location: {lat:43.651070,lng: -79.347015},
          radius: 1000,
          name:props.name
        };
      }
      service.nearbySearch(request, (results, status) => {
        if(status === mapApi.places.PlacesServiceStatus.OK) {
          props.results(results);
        }
      })
    }
  }

    return(
      <div style={{ height: '500px', width: '100%' }}>
        {findLocation()}
        <GoogleMapReact
          bootstrapURLKeys={{
            key: keys.googleKey,
            language:'en',
            libraries:['places']}}
          center={location.center}
          zoom={location.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={43.651070}
            lng={-79.347015}
            text="My Position"
            />
        </GoogleMapReact>
      </div>
    );
}

export default Map;
