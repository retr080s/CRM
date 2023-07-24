import Navbar from "../components/Navbar";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Jan",
    Total: 7980,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    Total: 5000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    Total: 8000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    Total: 9315,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    Total: 11580,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    Total: 18852,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    Total: 35800,
    pv: 4300,
    amt: 2100,
  },
];

const dataMonth = [
  {
    name: "Week 1",
    Total: 1950,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Week 2",
    Total: 3450,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Week 3",
    Total: 4100,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Week 4",
    Total: 5550,
    pv: 4300,
    amt: 2100,
  },
];

const dataWeek = [
  {
    name: "Mon",
    Total: 480,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Tues",
    Total: 345,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Wed",
    Total: 870,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Thurs",
    Total: 750,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Fri",
    Total: 650,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sat",
    Total: 1120,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sun",
    Total: 1950,
    pv: 4300,
    amt: 2100,
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <h1>Sales</h1>
      <div className="home">
        <div className="homeInfo" style={{ width: "500px" }}>
          <p>This year 📊</p>
          <AreaChart
            width={500}
            height={290}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="natural"
              dataKey="Total"
              stroke="#00aeff"
              fill="#4e8097"
            />
          </AreaChart>
        </div>
        <div className="homeInfo" style={{ width: "500px" }}>
          <p>This Month 📊</p>
          <AreaChart
            width={500}
            height={290}
            data={dataMonth}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="natural"
              dataKey="Total"
              stroke="#00aeff"
              fill="#4e8097"
            />
          </AreaChart>
        </div>
        <div className="homeInfo" style={{ width: "500px" }}>
          <p>This Week 📊</p>
          <AreaChart
            width={500}
            height={290}
            data={dataWeek}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="natural"
              dataKey="Total"
              stroke="#00aeff"
              fill="#4e8097"
            />
          </AreaChart>
        </div>
      </div>
    </>
  );
};
export default Home;
