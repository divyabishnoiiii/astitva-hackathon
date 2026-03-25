import { useState } from "react";
import { sendSOS } from "../sos";

function SOS() {
  const [msg, setMsg] = useState("");

  const handleSOS = async () => {
    await sendSOS();
    setMsg("SOS sent successfully 🚨");
  };

  return (
    <div>
      <h1>SOS Emergency</h1>
      <button
  onClick={sendSOS}
  style={{
    padding: "20px",
    fontSize: "22px",
    background: "red",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer"
  }}
>
  🚨 SEND SOS
</button>
      
      <p>{msg}</p>
    </div>
  );
}

export default SOS;