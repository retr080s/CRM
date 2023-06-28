import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="homeInfo">
          <p>Total revenue 💵</p>
          <p>$78,125.00</p>
          <p>May: $10,780.00</p>
          <p>June: $11,858.00</p>
          <p>July: $31,209.00</p>
          <p>August: $24,278.00</p>
        </div>
        <div className="homeInfo">
          <p>Sales this week 📈</p>
          <p>Mon: $2278.00</p>
          <p>Tue: $778.00</p>
          <p>Wed: $3478.00</p>
          <p>Thu: $2448.00</p>
          <p>Fri: $5576.00</p>
        </div>
        <div className="homeInfo">
          <p>Customers 🧑</p>
          <p>Eco LLC</p>
          <p>Green LLC</p>
          <p>Automation LLC</p>
          <p>Testing LLC</p>
          <p>123 Company LLC</p>
        </div>
      </div>
    </>
  );
};
export default Home;
