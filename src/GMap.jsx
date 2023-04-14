import React, { useEffect, useRef,useState } from 'react';
import Cookies from 'js-cookie';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from './constants';


const GMap = () => {
    
  const googleMapRef = useRef(null);
  let googleMap = null;
  const [data,setData]=useState([]);
    const [lat,setLat]=useState(null);
    const [lng,setLng]=useState(null);
    const [status,setStatus]=useState(null);

  // list of icons
  const iconList = {
    icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
    icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
    icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
    icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
  }

  // list of the marker object along with icon
  const [markerList,setMarkerList] = useState([
    { latitude: 59.2967322, longitude: 18.0009393, icon: iconList.icon1 },
    { latitude: 59.2980245, longitude: 17.9971503, icon: iconList.icon2 },
    { latitude: 59.2981078, longitude: 17.9980875, icon: iconList.icon3 },
    { latitude: 59.2987638, longitude: 17.9917639, icon: iconList.icon4 }
  ])

  useEffect(() => {
    const getN = async () => {
        let token = Cookies.get('token');
    await Axios.get(`${baseURL}/getNGO`, { headers: { tokenstring: token } }).
        then((response) => {
            setData(response.data.message);
            console.log(response.data.message);
            setMarkerList(response.data.message);
        })
        .catch(async (res) => {
            if (res.response.data.message === 'Error in connection') {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please Check Network Connection!',
                })
            }
            else if (res.response.data.message === 'Token not found' || res.response.data.message === 'Invalid token' || res.response.data.message === 'Session Logged Out , Please Login Again') {
                await Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Login Error',
                })
                navigate('../login')
            }
        })
    }
    if(!navigator.geolocation)
    {
    setStatus("Geolocation is not supported by browser");
    }
    else
    {
    setStatus("Locating..");
    navigator.geolocation.getCurrentPosition((postion)=>{
        setStatus(null);
        setLat(postion.coords.latitude);
        setLng(postion.coords.longitude);
        setViewport({
            latitude: postion.coords.latitude,
            longitude: postion.coords.longitude,
            width: "50vw",
            height: "50vh",
            zoom: 10
        })
    },
    ()=>{
        setStatus("Unable to retrieve your location");
    })
    }
    console.log(markerList)
    getN();
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    data.map(x => {
      const marker = createMarker(x);
      bounds.extend(marker.position);
    });
    googleMap.fitBounds(bounds); // the map to contain all markers
  }, []);


  // initialize the google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 13.0213, lng: 80.2231 },
      zoom: 8
    });
  }

  // create marker on google map
  const createMarker = (markerObj) => new window.google.maps.Marker({
    position: { lat: markerObj.latitude, lng: markerObj.longitude },
    map: googleMap,
    icon: {
      url: iconList.icon2,
      // set marker width and height
      scaledSize: new window.google.maps.Size(50, 50)
    }
  });

  return <div
  ref={googleMapRef}
  style={{ width: 600, height: 500 }}
/>

};

export default GMap;