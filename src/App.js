
import Home from "./components/Home";
import IndoorOutdoor from "./components/IndoorOutdoor";
import flowerBoquet from "./components/flowerBoquet";
import Photographer from "./components/Photographer";
import makupArtist from "./components/makupArtist";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   
    
    <Router>
      <Routes> 
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/flowerBoquet" element={<flowerBoquet/>} />
      <Route exact path="/IndoorOutdoor" element={<IndoorOutdoor/>} />
      <Route exact path="/Photographer" element={<Photographer/>} />
      <Route exact path="/makupArtist" element={<makupArtist/>} />

      </Routes>
    </Router>
  );
}

export default App;


