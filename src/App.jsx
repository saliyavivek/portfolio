import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import Finds from "./pages/Finds";

function App() {
  return (
    <div className="app">
      <div className="app__sidebar-left">
        <Nav />
      </div>
      <div className="app__sidebar-right">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/finds" element={<Finds />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
