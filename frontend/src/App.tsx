import "./index.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsMoonFill, BsFillSunFill, BsPeople } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { BiMessageAltDetail } from "react-icons/bi";

function App() {
  return (
    <div>
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <AiOutlineHome />
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <BsPeople />
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <BiMessageAltDetail />
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <FiSettings />
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <BsMoonFill />
            </a>
          </li>
        </ul>
      </div>
      <div className="custInfoPaid">
        <p>ID: 1238919</p>
        <p>Name: John Smith</p>
        <p>Phone: 3333549</p>
        <p>Email: test@example.com</p>
        <p>Date: 07/07/2023</p>
        <p>Service: Moving lawn</p>
        <p>Price: $550</p>
        <p>Status:</p>
        <select name="leadOption" id="leadOption">
          <option value="Paid">Paid</option>
          <option value="NotPaid">Not Paid</option>
          <option value="Called">Called</option>
          <option value="NotCalled">Not Called</option>
        </select>
        <button className="submitbtn">Submit</button>
      </div>

      <div className="custInfoNotPaid">
        <p>ID: 1238919</p>
        <p>Name: John Smith</p>
        <p>Phone: 3333549</p>
        <p>Email: test@example.com</p>
        <p>Date: 07/07/2023</p>
        <p>Service: Moving lawn</p>
        <p>Price: $550</p>
        <p>Status:</p>
        <select name="leadOption" id="leadOption">
          <option value="Paid">Paid</option>
          <option value="NotPaid">Not Paid</option>
          <option value="Called">Called</option>
          <option value="NotCalled">Not Called</option>
        </select>
        <button className="submitbtn">Submit</button>
      </div>
      <div className="custInfoCalled">
        <p>ID: 1238919</p>
        <p>Name: John Smith</p>
        <p>Phone: 3333549</p>
        <p>Email: test@example.com</p>
        <p>Date: 07/07/2023</p>
        <p>Service: Moving lawn</p>
        <p>Price: $550</p>
        <p>Status:</p>
        <select name="leadOption" id="leadOption">
          <option value="Paid">Paid</option>
          <option value="NotPaid">Not Paid</option>
          <option value="Called">Called</option>
          <option value="NotCalled">Not Called</option>
        </select>
        <button className="submitbtn">Submit</button>
      </div>
      <div className="custInfoNotCalled">
        <p>ID: 1238919</p>
        <p>Name: John Smith</p>
        <p>Phone: 3333549</p>
        <p>Email: test@example.com</p>
        <p>Date: 07/07/2023</p>
        <p>Service: Moving lawn</p>
        <p>Price: $550</p>
        <p>Status:</p>
        <select name="leadOption" id="leadOption">
          <option value="Paid">Paid</option>
          <option value="NotPaid">Not Paid</option>
          <option value="Called">Called</option>
          <option value="NotCalled">Not Called</option>
        </select>
        <button className="submitbtn">Submit</button>
      </div>
    </div>
  );
}

export default App;
