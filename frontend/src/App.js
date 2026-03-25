import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import SOS from "./pages/SOS";
import Heatmap from "./pages/Heatmap";
import Chatbot from "./pages/Chatbot";
import NGO from "./pages/NGO";
import Map from "./pages/Map";
function App() {
  return (
    <BrowserRouter>

      <nav style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "#6a0dad",
        color: "white"
      }}>
        <h2>ASTITVA 🌈</h2>

        <div style={{ display: "flex", gap: "15px" }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/sos" style={linkStyle}>SOS</Link>
          <Link to="/heatmap" style={linkStyle}>Heatmap</Link>
          <Link to="/chatbot" style={linkStyle}>Chatbot</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/heatmap" element={<Heatmap />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/ngo" element={<NGO />} />
        <Route path="/map" element={<Map />} />
      </Routes>

    </BrowserRouter>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "8px 15px",
  borderRadius: "8px",
  background: "rgba(255,255,255,0.2)"
};

export default App;