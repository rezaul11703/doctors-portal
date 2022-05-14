import React from 'react';
import { Link } from 'react-router-dom';
import foter from '../../../assets/images/footer.png'
const Footer = () => {
  return (
    <div>
      <footer class="footer p-10 " style={{background : `url(${foter})`, backgroundSize:'cover'}}>
  <div>
    <span class="footer-title">SERVICES</span> 
    <Link to="/" class="link link-hover">Branding</Link>
    <Link to="/" class="link link-hover">Design</Link>
    <Link to="/" class="link link-hover">Marketing</Link>
    <Link to="/" class="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span class="footer-title">ORAl HEALTH</span> 
    <Link to="/" class="link link-hover">About us</Link>
    <Link to="/" class="link link-hover">Contact</Link>
    <Link to="/" class="link link-hover">Jobs</Link>
    <Link to="/" class="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span class="footer-title">OUR ADRESS</span> 
    <Link to="/" class="link link-hover">Terms of use</Link>
    <Link to="/" class="link link-hover">Privacy policy</Link>
    <Link to="/" class="link link-hover">Cookie policy</Link>
  </div>
  <div class="text-center flex flex-rows"> Copyright @  All Right reserves.</div>
  </footer>

  
    </div>
    

  

    
  )
};

export default Footer;