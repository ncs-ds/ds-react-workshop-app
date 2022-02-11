import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonRouter from "./ButtonRouter";
import Display from "./Display";
import Beach from "./Beach";
import Mykonos from "./Mykonos";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import { Button } from "@material-ui/core";

function App() {
  const [cost, setCost] = useState(0);

  return (
    <Router>
      <div>
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
