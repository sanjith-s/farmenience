import React, { useEffect, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from './constants';
import Swal from 'sweetalert2';
import {
    TextField,
    Button
} from "@mui/material";

const MarketMap = (props) => {

    const navigate = useNavigate();
    const googleMapRef = useRef(null);
    let googleMap = null;
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);
    const [status, setStatus] = useState(null);

    // list of icons
    const iconList = {
        icon1: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Flag--Right-Chartreuse.png',
        icon2: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Chartreuse.png',
        icon3: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Ball-Right-Azure.png',
        icon4: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/256/Map-Marker-Marker-Outside-Pink.png'
    }

    // list of the marker object along with icon
    const [markerList, setMarkerList] = useState([
        { latitude: 59.2967322, longitude: 18.0009393, icon: iconList.icon1 },
        { latitude: 59.2980245, longitude: 17.9971503, icon: iconList.icon2 },
        { latitude: 59.2981078, longitude: 17.9980875, icon: iconList.icon3 },
        { latitude: 59.2987638, longitude: 17.9917639, icon: iconList.icon4 }
    ])

    useEffect(() => {
        const getM = async () => {
            let token = Cookies.get('token');
            await Axios.get(`${baseURL}/buyer/getmarkets`, { headers: { tokenstring: token } }).
                then((response) => {
                    console.log("ENTERING");
                    setData(response.data.message);
                    setFilterData(response.data.message);
                    console.log(response.data.message);
                    setMarkerList(response.data.message);
                    googleMap = initGoogleMap();
                    var bounds = new window.google.maps.LatLngBounds();
                    response.data.message.map(x => {
                        const marker = createMarker(x);
                        bounds.extend(marker.position);
                    });
                    googleMap.fitBounds(bounds); // the map to contain all markers
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
        if (!navigator.geolocation) {
            setStatus("Geolocation is not supported by browser");
        }
        else {
            setStatus("Locating..");
            navigator.geolocation.getCurrentPosition((postion) => {
                setStatus(null);
                setLat(postion.coords.latitude);
                setLng(postion.coords.longitude);
            },
                () => {
                    setStatus("Unable to retrieve your location");
                })
        }
        getM();
    }, []);

    useEffect(() => {
        googleMap = initGoogleMap();
        var bounds = new window.google.maps.LatLngBounds();
        filterData.map(x => {
            const marker = createMarker(x);
            bounds.extend(marker.position);
        });
        googleMap.fitBounds(bounds);
    }, [filterData])

    function distance(lat1, lat2, lon1, lon2) {

        // The math module contains a function
        // named toRadians which converts from
        // degrees to radians.
        lon1 = lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;

        // Haversine formula
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a = Math.pow(Math.sin(dlat / 2), 2)
            + Math.cos(lat1) * Math.cos(lat2)
            * Math.pow(Math.sin(dlon / 2), 2);

        let c = 2 * Math.asin(Math.sqrt(a));

        // Radius of earth in kilometers. Use 3956
        // for miles
        let r = 6371;

        // calculate the result
        console.log(c*r);
        return (c * r);
    }
    // initialize the google map
    const initGoogleMap = () => {
        return new window.google.maps.Map(googleMapRef.current, {
            // return new google.maps.Map(googleMapRef.current, {
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
    const closestMarket = () => {
        // var bounds = new window.google.maps.LatLngBounds();
        // googleMap = initGoogleMap();
        //   const marker = createMarker({latitude:lat,longitude:lng});
        //   bounds.extend(marker.position);
        // googleMap.fitBounds(bounds);
        let temp = data.filter(val => {
            return distance(lat, val.latitude, lng, val.longitude) < radius;
        });
        console.log(temp);
        if (temp.length == 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No Markets in the specified radius',
            })
            setFilterData(data);
        }
        else {
            props.filterMarket(data);
            setFilterData(temp);
            props.filterMarket(data);
        }
        // googleMap = initGoogleMap();
        //     var bounds = new window.google.maps.LatLngBounds();
        //     temp.map(x => {
        //       const marker = createMarker(x);
        //       bounds.extend(marker.position);
        //     });
        //       // const marker = createMarker({latitude:lat,longitude:lng});
        //       // bounds.extend(marker.position);
        //     googleMap.fitBounds(bounds); // the map to contain all markers
    }
    const [radius, setradius] = useState(0);

    return (
        <div>
            <div
                ref={googleMapRef}
                style={{ width: 600, height: 500 }}
            />
            <br />
            <TextField type="number" sx={{height: "0.5rem"}} defaultValue={0} onChange={(e) => {
                if (e.target.value == null || e.target.value == '') {
                    setradius(0);
                }
                else {
                    setradius(e.target.value);
                }
            }} placeholder='In km'></TextField>
            
            <Button variant="contained" style={{background: "green", margin: "1rem"}} onClick={() => { closestMarket() }}>Submit</Button>
        </div>
    )
};

export default MarketMap;