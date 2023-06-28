import "../index.css";
import Navbar from "../components/Navbar";

const Panel = () => {
  return (
    <div>
      <Navbar />
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
          <option value="NotPaid">Not Paid</option>
          <option value="Paid">Paid</option>
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
          <option value="Called">Called</option>
          <option value="Paid">Paid</option>
          <option value="NotPaid">Not Paid</option>
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
          <option value="NotCalled">Not Called</option>
          <option value="Paid">Paid</option>
          <option value="NotPaid">Not Paid</option>
          <option value="Called">Called</option>
        </select>
        <button className="submitbtn">Submit</button>
      </div>
    </div>
  );
};
export default Panel;
