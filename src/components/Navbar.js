import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../global/DataProvider";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const value = useContext(DataContext);
  const [cart] = value.cart
  return (
    <>
      <nav>
        <h1 className="Logo">
          <Link to="/">
            <h1 style={{fontWeight:"lighter"}}>Amory</h1>
          </Link>
        </h1>
        <div className="menu-icon" onClick={handleOpen}>
          <i className={open ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={open ? 'list-item active' : 'list-item'}>
          <li>
            <Link to="/amory">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop <i className="fa fa-caret-down" /></Link>
          </li>
          <li>
            <Link to="/Story">Our Story</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <li className="Cart-icon">
          <span>{cart.length }</span>
          <Link to="/Cart">
            <i className="fa fa-shopping-cart"></i>
          </Link>
        </li>
      </nav>
    </>
  );
};

export default Navbar;