import React from "react";
import Header from "../homesubComponents/headerComponent/Header";
import Homebody from "../homesubComponents/homebodyComponent/Homebody";
import Nav from "../homesubComponents/navComponent/Nav";
import "./home.css";

function Home() {
  return (
    <div className="main-home">
      <Header />
      <Homebody />
      <Nav />
    </div>
  );
}

export default Home;
