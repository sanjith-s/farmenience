import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Cookies from 'js-cookie';
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from '../constants';
import * as parkDate from "./skateboard-parks.json";

const Map = () => {
    const [data,setData]=useState([]);
    const [lat,setLat]=useState(null);
    const [lng,setLng]=useState(null);
    const [status,setStatus]=useState(null);
    const navigate=useNavigate();
    useEffect(()=>{
        const getN = async () => {
            let token = Cookies.get('token');
        await Axios.get(`${baseURL}/getNGO`, { headers: { tokenstring: token } }).
            then((response) => {
                setData(response.data.message);
                console.log(response.data.message);
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
        getN();
        const listener = e => {
            if (e.key === "Escape") {
              setSelectedPark(null);
            }
          };
          window.addEventListener("keydown", listener);
      
          return () => {
            windowNaNpxoveEventListener("keydown", listener);
          };
    },[]);
    const [currentLocation, setCurrentLocation] = useState({});
    const [viewport, setViewport] = useState({
        latitude: 13.0213,
        longitude: 80.2231,
        width: "50vw",
        height: "50vh",
        zoom: 10
      });
      function changeCoord(lat, lon) {
        setCurrentLocation({ lat, lon });
      }
      const [selectedPark, setSelectedPark] = useState(null);

    return (
        <div>
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={"sk.eyJ1IjoiaGFyc2hpdDMiLCJhIjoiY2xnZ2lmOHF2MGM0bDNodDF1Zzl4OTE0eSJ9.Z-mEEb2FgqfHN3ez9ofjww"}
        mapStyle="mapbox://styles/mapbox/navigation-day-v1"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >

        {parkDate.features.map(park => (
          <Marker
            // key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-location-marker-png-image_5990782.jpg" alt="Skate Park Icon" width="62.5rem" height="62.5rem" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          () => changeCoord(selectedPark.geometry.coordinates[1], selectedPark.geometry.coordinates[0]),
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
            {/* <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoiaGFyc2hpdDMiLCJhIjoiY2xnZ2h4aWkzMGJ4cDNxcnJlZXc5NzFwYSJ9.14QFUcNfm5PoxgxkdCEKOg"}
        mapStyle="mapbox://styles/mapbox/navigation-day-v1"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >

        {data.map(park => (
          <Marker
            // key={park.properties.PARK_ID}
            latitude={park.latitude}
            longitude={park.longitude}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src="https://png.pngtree.com/png-clipart/20210311/original/pngtree-location-marker-png-image_5990782.jpg" alt="Skate Park Icon" width="62.5rem" height="62.5rem" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          () => changeCoord(selectedPark.latitude, selectedPark.longitude),
          <Popup
            latitude={selectedPark.latitude}
            longitude={selectedPark.longitude}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.name}</h2>
              <p>{selectedPark.state}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL> */}

        </div>
    );
};

export default Map;