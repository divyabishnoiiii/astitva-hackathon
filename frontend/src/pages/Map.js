import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 28.6139,  // Delhi example
  lng: 77.2090,
};

function Map() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>🗺️ Safety Map</h2>

      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          
          {/* Marker */}
          <Marker position={center} />

        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;