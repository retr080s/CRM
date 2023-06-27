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
            <div className="nav-link">
              <AiOutlineHome />
            </div>
          </li>
        </Link>

        <Link to="/users">
          <li className="nav-item">
            <div className="nav-link">
              <BsPeople />
            </div>
          </li>
        </Link>

        <Link to="/panel">
          <li className="nav-item">
            <div className="nav-link">
              <BsTable />
            </div>
          </li>
        </Link>

        <Link to="/settings">
          <li className="nav-item">
            <div className="nav-link">
              <FiSettings />
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
