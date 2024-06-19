import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WelcomeComponent from "./Components/welcomeComponent/Welcome";
import SplashComponent from "./Components/splashscreenComponent/Splash";
import Home from "./Components/homeComponent/mainHomeComponent/Home";
import Homebody from "./Components/homeComponent/homesubComponents/homebodyComponent/Homebody";
import TicketBooking from "./Components/ticketbookingComponenet/TicketBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeComponent />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/TicketBooking" element={<TicketBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
