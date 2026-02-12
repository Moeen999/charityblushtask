import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Donor from "./pages/Donor";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Campaign from "./pages/Campaign";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-[#8A1538]">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/campaign" element={<Campaign />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/donor" element={<Donor />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
