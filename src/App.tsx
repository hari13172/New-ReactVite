import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Network from "./pages/Network";
import Labs from "./pages/Labs";
import Service from "./pages/Service";
import Domain from "./pages/Domain";
import LabUbuntu from "./pages/LabUbuntu";

function App() {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/network" element={<Network />} />
          <Route path="/Labs" element={<Labs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/domains" element={<Domain />} />
          <Route path="/labs/ubuntu" element={<LabUbuntu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
