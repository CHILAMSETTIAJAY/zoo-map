import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import ticketicon from "../../../../assets/ticket.png";
import knowicon from "../../../../assets/knowledge.png";
import mapicon from "../../../../assets/map.png";

const Nav = () => {
  return (
    <div className="nav-main-container">
      <div className="nav-body">
        <Link to="/TicketBooking">
          <div className="nav-item">
            <img src={ticketicon} alt="Info Icon" className="nav-img" />
            <p className="nav-btn-text">Ticket</p>
          </div>
        </Link>
        <div className="nav-item">
          <img src={knowicon} alt="Know Icon" className="nav-img" />
          <p className="nav-btn-text">knowledge</p>
        </div>

        <div className="nav-item">
          <img src={mapicon} alt="Map Icon" className="nav-img" />
          <p className="nav-btn-text">ZooMap</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
