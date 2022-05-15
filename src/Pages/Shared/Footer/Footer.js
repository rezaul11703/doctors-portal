import React from "react";
import { Link } from "react-router-dom";
import foter from "../../../assets/images/footer.png";
const Footer = () => {
  return (
    <div>
      <footer
        className="footer p-10 "
        style={{ background: `url(${foter})`, backgroundSize: "cover" }}
      >
        <div>
          <span className="footer-title">SERVICES</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">ORAl HEALTH</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">OUR ADRESS</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
        <div className="text-center flex flex-rows">
          {" "}
          Copyright @ All Right reserves.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
