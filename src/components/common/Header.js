import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import "./header.scss"
const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        FoodApp
      </div>
      <div className="links">
        <a href="/">Home</a>
        <a href="">Pizza</a>
        <a href="">Burger</a>
        <a href="">Pasta</a>
      </div>
      <div className="card">
        <FaShoppingBag />
      </div>
    </div>
  )
}

export default Header