import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Navbar: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
        <li>
          <Link to="/rockets">Rockets</Link>
        </li>
        <li>
          <Link to="/launches">Launches</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
