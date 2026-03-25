import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SOS from "./pages/SOS";
import Heatmap from "./pages/Heatmap";
import Chatbot from "./pages/Chatbot";
import NGO from "./pages/NGO";

function App() {
  return (
    <BrowserRouter>
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

export default App;