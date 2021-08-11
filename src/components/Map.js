import React,{useState,useRef,useEffect} from 'react';
const keys=require('../config/keys');

const Map = (props) => {

/*  const [lat, setLat] = useState(43.651070);
  const [lng, setLng] = useState(-79.347015);
  if((props.lat!=='') && (props.lng!=='')){
    setLat(props.lat);
    setLng(props.lng);
  };

*/
  const googleMapRef = useRef();
  let googleMap,center,lat,lng;
  if((props.lat!=='') && (props.lng!=='')){
    lat=props.lat;
    lng=props.lng;
  }
  else{
    lat=43.651070;
    lng=-79.347015;
  }
  useEffect(() => {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${keys.googleKey}&language=en&libraries=places`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", () => {
      createGoogleMap();
    });
  }, []);

  const createGoogleMap = () => {
    center={
      lat: lat,
      lng: lng,
    }
    googleMap = new window.google.maps.Map(googleMapRef.current, {
      zoom: 11,
      disableDefaultUI: true,
      center: center,
    });
    new window.google.maps.Marker({
      position: { lat, lng },
      map: googleMap,
      animation: window.google.maps.Animation.DROP,
      title:`You Location`,
    });
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
