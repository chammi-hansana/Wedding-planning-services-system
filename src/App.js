
import Home from "./components/Home";
import Cakes from "./components/Cakes";
import FlowerBoquet from "./components/FlowerBoquet";
import Photographer from "./components/Photographer";
import MakeupArtist from "./components/MakeupArtist";




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Admin from "./components/admin/Admin";
import Inputpost from "./components/admin/Inputpost";
import Cart from "./components/Cart";


function App() {
  return (
   
     <Router>
      <Routes> 
      <Route exact path="/Home" element={<Home/>} />
      <Route exact path="/FlowerBoquet" element={<FlowerBoquet/>} />
      <Route exact path="/Cakes" element={<Cakes/>} />
      <Route exact path="/Photographer" element={<Photographer/>} />
      <Route exact path="/MakeupArtist" element={<MakeupArtist/>} />

      <Route exact path="/" element={<Login/>} />
      <Route exact path="/signup" element={<Signup/>} />
  
      <Route exact path="/Admin" element={<Admin/>} />
      <Route exact path="/Inputpost" element={<Inputpost/>} />
      <Route exact path="/Cart" element={<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;


