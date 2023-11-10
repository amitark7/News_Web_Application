import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar({handleSearch}) {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("black");
  const [category,setCategory]=useState('Category')
  const [element,setElement]=useState('')


  const ToogleClass = () => {
    if (show) {
      setShow(false);
      setColor("black");
    } else {
      setShow(true);
      setColor("white");
    }
  };

  return (
    <div className="navbar">
      <div className="max-width">
        <div className="logo">
          <Link to="/">
            <span>Daily News</span> Network
          </Link>
        </div>
        <div className="Search">
          <input type="text" name="search" onChange={(e)=>setElement(e.target.value)}/>
          <button className="btn" onClick={handleSearch}>Search</button>
        </div>
        <div className="nav">
          <button className="btn">{category}<i className="fa-solid fa-caret-down"></i></button>
          <ul className={show ? "menu active" : "menu"}>
            <li>
              <Link to="/" onClick={()=>setCategory('Category')}>Home</Link>
            </li>
            <li>
              <Link to="/business" onClick={()=>setCategory('Business')}>Business</Link>
            </li>
            <li>
              <Link to="/entertainment" onClick={()=>setCategory('Entertainment')}>Entertainment</Link>
            </li>
            <li>
              <Link to="/sports" onClick={()=>setCategory('Sports')}>Sports</Link>
            </li>
            <li>
              <Link to="/health" onClick={()=>setCategory('Health')}>Health</Link>
            </li>
            <li>
              <Link to="/science" onClick={()=>setCategory('Science')}>Science</Link>
            </li>
            <li>
              <Link to="/technology" onClick={()=>setCategory('Technology')}>Technology</Link>
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
