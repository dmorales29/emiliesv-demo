import React from "react"
import { Helmet } from "react-helmet"
import { Map, Marker, Popup, TileLayer } from "react-leaflet"
import { Icon } from "leaflet"
import emilieMapStyles from "./emilieMap.module.css"
import myIcon from "../images/gps-icon.png"

function EmilieMap() {
  const position = [13.6777, -89.2449]
  const icon = new Icon({
    iconUrl: myIcon,
    iconSize: [25, 37],
  })

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossorigin=""
        />
      </Helmet>
      <section className={emilieMapStyles.mapContainer}>
        <Map
          center={position}
          zoom={16}
          className={emilieMapStyles.leafletContainer}
        >
          <TileLayer
            className={emilieMapStyles.leafletContainer}
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={icon}>
            <Popup className={emilieMapStyles.leafletPopup}>
              <strong>Emilie</strong>
              <br />
              Plaza Mango - Antiguo Cuscatlán
            </Popup>
          </Marker>
        </Map>
      </section>
    </>
  )
}

export default EmilieMap
