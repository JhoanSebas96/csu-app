import React from 'react'
import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './pages/oferta.css';
import  iconM from '../assets/marker.png';
import { Icon, L, Browser } from 'leaflet';




export const MapLeaflet = () => {
  
  
  const myIcon = new Icon({
    iconUrl: iconM,
    iconSize: [38,58],
    iconAnchor: [18, 53],
    popupAnchor: [5, -46]
  });

  const dragg = !Browser.mobile


  

  return (
    <MapContainer
      center={[5.34487, -72.38865]}
      zoom={18}
      dragging={dragg}
      scrollWheelZoom={false}
    >

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={myIcon}
        position={[5.34487, -72.38865]}
      >
        <Popup>
          CSU AREANDINA YOPAL <br /> CC. El Hobo - local 130
        </Popup>
      </Marker>
    </MapContainer>
  )
}
