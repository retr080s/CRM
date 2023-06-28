import "../index.css";
import Navbar from "../components/Navbar";

const Users = () => {
  return (
    <div>
      <Navbar />
      <div className="users">
        <div className="usersInfo">
          <p>Name: </p>
          <p>Email: </p>
          <p>Phone: </p>
          <p>Owner </p>
        </div>
        <div className="usersInfo">
          <p>Name: </p>
          <p>Email: </p>
          <p>Phone: </p>
          <p>Co-Owner </p>
        </div>
        <div className="usersInfo">
          <p>Name: </p>
          <p>Email: </p>
          <p>Phone: </p>
          <p>HR </p>
        </div>
        <div className="usersInfo">
          <p>Name: </p>
          <p>Email: </p>
          <p>Phone: </p>
          <p>Support </p>
        </div>
        <div className="usersInfo">
          <p>Name: </p>
          <p>Email: </p>
          <p>Phone: </p>
          <p>Support </p>
        </div>
        <div className="usersInfo">
          <p>Name: </p>
          <p>Email: </p>
          <p>Phone: </p>
          <p>Call Agent </p>
        </div>
      </div>
    </div>
  );
};
export default Users;
