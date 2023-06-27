import "../index.css";

import { AiOutlineHome } from "react-icons/ai";
import { BsPeople, BsTable } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        <Link to="/">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <AiOutlineHome />
            </a>
          </li>
        </Link>

        <Link to="/users">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <BsPeople />
            </a>
          </li>
        </Link>

        <Link to="/panel">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <BsTable />
            </a>
          </li>
        </Link>

        <Link to="/settings">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <FiSettings />
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
