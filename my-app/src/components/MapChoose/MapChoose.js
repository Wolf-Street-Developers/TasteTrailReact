import React, { useState, useMemo, useRef } from 'react';
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import L from "leaflet";
import "./MapChoose.css"

const MapChoose = ({handleChange}) => {
    const Red_MARKER = `data:image/svg+xml;utf8,${encodeURIComponent(`<?xml version="1.0" encoding="iso-8859-1"?>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="36.059" height="36.059" viewBox="0 0 36.059 36.059" style="transform:rotate(${0}deg)">
        <defs>
            <filter id="Path_10080" x="0" y="0" width="36.059" height="36.059" filterUnits="userSpaceOnUse">
            <feOffset input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="2.5" result="blur"/>
            <feFlood flood-opacity="0.161"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
            </filter>
        </defs>
        <g id="Group_8038" data-name="Group 8038" transform="translate(5719.5 1106.5)">
            <rect id="Rectangle_2670" data-name="Rectangle 2670" width="21" height="21" transform="translate(-5712 -1099)" fill="none"/>
            <g transform="matrix(1, 0, 0, 1, -5719.5, -1106.5)" filter="url(#Path_10080)">
            <path id="Path_10080-2" data-name="Path 10080" d="M15.4,12.766a6.414,6.414,0,0,0,1.781-5.634l-.446-2.55-2.55-.446A6.414,6.414,0,0,0,8.553,5.916L6.746,7.723c.234-.232-.845.866-.626.626l-2.96,2.96a2.644,2.644,0,0,0,0,3.735l3.114,3.114a2.644,2.644,0,0,0,3.735,0l2.96-2.96Z" transform="translate(19.2 2.96) rotate(45)" fill="${"red"}"/>
            </g>
        </g>
        </svg>
    `)}`;

    
    const [position, setPosition] = useState([50,50])

    const MapIcon = L.icon({
      iconUrl: Red_MARKER,
      iconSize: [40, 40],
      iconAnchor: [12, 12],
      popupAnchor: [0, 0],
  });

 
    function DraggableMarker({position, setPosition}) {

           
        const markerRef = useRef(null)
        const eventHandlers = useMemo(
            () => ({
            dragend() {
                const marker = markerRef.current
                if (marker != null) {
                    setPosition(marker.getLatLng())
                    handleChange(marker.getLatLng())
                }
            },
            }),
            [],
        )

        return (
            <Marker
            draggable={true}
            eventHandlers={eventHandlers}
            position={position}
            ref={markerRef}
            icon={MapIcon}>
            </Marker>
        )
    }

    return (
        <div className='map'>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: 400, width: 600 }}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <DraggableMarker position={position} setPosition={setPosition}/>
            </MapContainer>
        </div>
    );
};
  
  
export default MapChoose