import { useState } from "react";

function NGO() {
  const [selectedHelp, setSelectedHelp] = useState("");

  // 👇 THIS IS THE FUNCTION YOU WERE ASKING ABOUT
  const sendRequest = (ngoName) => {
    const location = {
      latitude: 28.61,
      longitude: 77.20
    };

    alert(
      `Request sent to ${ngoName}
Help: ${selectedHelp}
Location: ${location.latitude}, ${location.longitude}`
    );
  };

  const ngos = [
    { name: "Naz Foundation", type: "Health + Legal" },
    { name: "Sangama", type: "Shelter + Support" },
    { name: "Humsafar Trust", type: "Medical + Counseling" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>NGO Help 🤝</h1>

      <h3>Select Help Type:</h3>
      <select onChange={(e) => setSelectedHelp(e.target.value)}>
        <option value="">Select</option>
        <option value="Legal">Legal Help</option>
        <option value="Shelter">Housing</option>
        <option value="Medical">Medical</option>
      </select>

      <h3>Available NGOs:</h3>

      {ngos.map((ngo, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px"
          }}
        >
          <h4>{ngo.name}</h4>
          <p>{ngo.type}</p>

          <button onClick={() => sendRequest(ngo.name)}>
            Send Request
          </button>
        </div>
      ))}
    </div>
  );
}

export default NGO;