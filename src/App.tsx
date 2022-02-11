import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Beach from "./Beach";
import Home from "./Home";
import Mykonos from "./Mykonos";

function App() {
  const [cost, setCost] = useState(0);

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">
            <Button variant="outlined">Home</Button>
          </Link>
          <Link to="/beach">
            <Button variant="outlined">Beach</Button>
          </Link>
          <Link to="/mykonos">
            <Button variant="outlined">Mykonos</Button>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home cost={cost} />}></Route>
          <Route path="beach" element={<Beach />}></Route>
          <Route path="mykonos" element={<Mykonos />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
