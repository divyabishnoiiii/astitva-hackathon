import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
function Heatmap() {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "sos_alerts"));

    const data = querySnapshot.docs.map((doc) => {
      return [
        doc.data().latitude,
        doc.data().longitude
      ];
    });

    setPositions(data);
  };

  fetchData();
}, []);
  

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#6a0dad" }}>
  Danger Zones Map 📍
</h1>
      <MapContainer center={[28.61, 77.23]} zoom={13} style={{ height: "500px" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {positions.map((pos, index) => (
          <Marker key={index} position={pos}>
            <Popup>Danger Area 🚨</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Heatmap;