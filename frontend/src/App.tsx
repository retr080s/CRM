// internal
import "./index.css";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Panel from "./pages/Panel";
import Addlead from "./pages/Addlead";

// external
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="panel" element={<Panel />} />
        <Route path="addlead" element={<Addlead />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
