import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Appoinment from "./Pages/Appoinment/Appoinment";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/LogIn/LogIn";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./Pages/Shared/Footer/Footer";
import SignUp from "./Pages/LogIn/SignUp";
import RequiredAuth from "./Pages/LogIn/RequiredAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyHistory from "./Pages/Dashboard/MyHistory";
import AllUsers from "./Pages/Dashboard/AllUsers";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="apointment"
          element={
            <RequiredAuth>
              <Appoinment />
            </RequiredAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        >
          <Route index element={<MyAppointment />} />
          <Route path="/dashboard/reviews" element={<Reviews />} />
          <Route path="/dashboard/history" element={<MyHistory />} />
          <Route path="/dashboard/allusers" element={<AllUsers />} />
        </Route>
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
