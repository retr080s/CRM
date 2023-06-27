// internal
import "./index.css";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Panel from "./pages/Panel";
import Settings from "./pages/Settings";

// external
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="panel" element={<Panel />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
