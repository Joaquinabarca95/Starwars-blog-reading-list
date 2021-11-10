import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CharacterInfo from "./components/CharacterInfo";
import PlanetInfo from "./components/PlanetInfo";
import VehicleInfo from "./components/VehicleInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/characters" element={<CharacterInfo />} />
          <Route exact path="/planets" element={<PlanetInfo />}/>
          <Route exact path="/vehicles" element={<VehicleInfo />}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
