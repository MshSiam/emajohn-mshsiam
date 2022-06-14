import React from "react"
import "./header.css"
import logo from "./../../2021-ema-john-simple-resources-master/images/logo.png"

const Header = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/review">Review</a>
        <a href="/inventory">Inventory</a>
      </nav>
    </div>
  )
}

export default Header
