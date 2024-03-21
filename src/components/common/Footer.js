import React from 'react'
import "./footer.scss"
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="footer">
     <div className="footer-logo">
      FoodApp
     </div>
     <div className="content">
      © 2024 - Tüm hakları saklıdır. Food App.
     </div>
     <div className="contact">
      <a href=""><FaInstagram /></a>
      <a href=""><FaFacebook /></a>
      <a href=""><MdEmail /></a>
     </div>
    </div>
  )
}

export default Footer