import "../index.css";
import Navbar from "../components/Navbar";

const Addlead = () => {
  return (
    <div>
      <Navbar />
      <div className="addleadmenu">
        <h2>Add Lead</h2>
        <form method="post">
          <fieldset className="addleadmenuList">
            <label htmlFor="name">
              Name:
              <input id="name" name="name" type="text" required></input>
            </label>
            <label htmlFor="phone">
              Phone:
              <input id="phone" name="phone" type="number" required></input>
            </label>
            <label htmlFor="email">
              Email:
              <input id="email" name="email" type="email" required></input>
            </label>
            <label htmlFor="date">
              Date:
              <input id="date" name="date" type="date" required></input>
            </label>
            <label htmlFor="service">
              Service:
              <input id="service" name="service" type="text" required></input>
            </label>
            <label htmlFor="price">
              Price:
              <input id="price" name="price" type="text" required></input>
            </label>
          </fieldset>
          <input
            type="submit"
            value="Submit"
            className="addleadmenusubmitbutton"
          />
        </form>
      </div>
    </div>
  );
};
export default Addlead;
