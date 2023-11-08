import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("black");

  const ToogleClass = () => {
    if (show) {
      setShow(false);
      setColor("black");
    } else {
      setShow(true);
      setColor("white");
    }
  };

  const handlesearch=()=>{
    console.log("Searching Start...")
  }
  return (
    <div className="navbar">
      <div className="max-width">
        <div className="logo">
          <Link to="/">
            <span>Daily News</span> Network
          </Link>
        </div>
        <div className="Search">
          <input type="text" name="search" />
          <button className="btn" onClick={handlesearch}>Search</button>
        </div>
        <div className="nav">
          <button className="btn">Category <i className="fa-solid fa-caret-down"></i></button>
          <ul className={show ? "menu active" : "menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link to="/sports">Sports</Link>
            </li>
            <li>
              <Link to="/health">Health</Link>
            </li>
            <li>
              <Link to="/science">Science</Link>
            </li>
            <li>
              <Link to="/technology">Technology</Link>
            </li>
          </ul>
        </div>
        <div
          className="logo1"
          onClick={ToogleClass}
          style={{ backgroundColor: { color } }}
        >
          {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
        </div>
      </div>
    </div>
  );
}
