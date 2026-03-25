import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>

      {/* APP NAME */}
      <h1 style={{ fontSize: "40px", color: "#6a0dad" }}>
        ASTITVA 🌈
      </h1>

      <p>Your identity. Your safety. Your space.</p>

      {/* BUTTON GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        marginTop: "30px"
      }}>

        <Link to="/sos" style={boxStyle}>
          🚨 SOS
        </Link>

        <Link to="/heatmap" style={boxStyle}>
          🗺️ Heatmap
        </Link>

        <Link to="/chatbot" style={boxStyle}>
          💬 Chatbot
        </Link>

        
        <Link to="/ngo" style={boxStyle}>
  🤝 NGO Help
</Link>

      </div>
    </div>
  );
}

// 🎨 STYLE
const boxStyle = {
  padding: "40px",
  background: "#f3e8ff",
  borderRadius: "15px",
  fontSize: "20px",
  textDecoration: "none",
  color: "#333",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

export default Home;