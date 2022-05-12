import './App.css';
import  Navbar  from "./Pages/Shared/Navbar/Navbar"
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Appoinment from "./Pages/Appoinment/Appoinment"
import ContactUs from "./Pages/ContactUs/ContactUs"
import Login from "./Pages/LogIn/LogIn"
import Reviews from "./Pages/Reviews/Reviews"
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="apointment" element={<Appoinment />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
