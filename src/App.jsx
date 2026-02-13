import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Donor from "./pages/Donor";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Campaign from "./pages/Campaign";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";
import { useEffect } from "react";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] relative min-h-screen w-full overflow-hidden bg-linear-to-br from-[#723134] via-[#8a1538] to-[#543D2E] pt-10 ">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/campaign" element={<Campaign />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/donor" element={<Donor />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
