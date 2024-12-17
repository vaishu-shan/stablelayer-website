import React from 'react'
import "./navbar.css"
import { RiShareLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const Navbar = () => {
    return (
        <div class="navbar mt-6 mb-2">
            <div class="navbar-left">
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 24, marginRight: 10 }} >StableLayer</div>
                <a href="#products">Products</a>
                <a href="#service">Service</a>
                <a href="#pricing">Pricing</a>
                <a href="#rResource">Resource</a>
                <a href="#about">About</a>
            </div>
            <div class="navbar-right">
  
                <button class="socials-btn">
                  Connect Wallet  </button>
            </div>
        </div>

    )
}

export default Navbar
