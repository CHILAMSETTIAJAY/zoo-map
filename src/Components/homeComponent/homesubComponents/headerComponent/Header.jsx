import React, { useState } from "react";
import "./header.css";
import dp from "../../../../assets/dp-user.png";
import menuicon from "../../../../assets/menu.png";

const Header = () => {
  const [topsearch, setTopsearch] = useState([
    "Food near me",
    "Safari",
    "Toilets",
    "Lion",
    "Tiger",
    "Drinking Water",
    "Birds",
    "Snakes",
  ]);

  const removeItem = (index) => {
    const newTopsearch = topsearch.filter((_, i) => i !== index);
    setTopsearch(newTopsearch);
  };

  return (
    <div className="main-container">
      <div className="user-info">
        <div className="user-details">
          <img src={dp} alt="User DP" className="dp-img" />
          <div className="user-text">
            <p className="user-wish">Welcome to Owl</p>
            <p className="user-name">Ajay Chilamsetti</p>
          </div>
        </div>
        <img src={menuicon} alt="Menu Icon" className="menuicon" />
      </div>
      <div className="search-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          className="icon-sm"
        >
          <path
            fill="currentColor"
            d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z"
          ></path>
        </svg>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for animal or zone"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          viewBox="0 0 32 32"
          className="icon-2xl"
        >
          <path
            fill="currentColor"
            d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z"
          ></path>
        </svg>
      </div>
      {topsearch.length > 0 && (
        <div className="top-search">
          {topsearch.map((item, index) => (
            <div className="name-container" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
                onClick={() => removeItem(index)}
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
