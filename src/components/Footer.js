import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <h6 className="heading-2">See what's happening..follow us on instagram</h6>
            <button><a href="/">follow along on IG @kaekooshop</a></button>
            <ul>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">COLLABORATE</Link>
          </li>
          <li>
            <Link to="/">SHIPPING & RETURNS</Link>
          </li>
          <li>
            <Link to="/Contact">TERMS & PRIVACY</Link>
          </li>
            </ul>
            <p>
                @copyright All rights reserved || Ankita Banerjee
            </p>
        </footer>
    )
}

export default Footer
