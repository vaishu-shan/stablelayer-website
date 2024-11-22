import React from 'react'
import "./navbar.css"
import { RiShareLine } from "react-icons/ri";
import { IconContext } from "react-icons";

const Navbar = () => {
    return (
        <div class="navbar mt-6 mb-2">
            <div class="navbar-left">
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 24, marginRight: 10 }}>StableLayer</div>
                <a href="#home">Home</a>
                <a href="#ecosystem">Ecosystem</a>
                <a href="#network">Network</a>
                <a href="#transparency">Transparency</a>
                <a href="#docs">Docs</a>
                <a href="#community">Community</a>
            </div>
            <div class="navbar-right">
                <div class="metric">
                    <span>TVL</span>
                    $3.28B
                </div>
                <div class="metric">
                    <span>APY</span>
                    29%
                </div>
                <div class="metric">
                    <span>Est. APY</span>
                    31%
                </div>
                <div class="metric">
                    <span>Users</span>
                    303.16K
                </div>
                <button class="socials-btn">
                    <IconContext.Provider value={{ color: "#fff", className: "social-icon" }}>
                        <div style={{ margin: '0 5px 0 0' }}>
                            <RiShareLine />
                        </div>
                    </IconContext.Provider>
                    <span>Socials</span>  </button>
            </div>
        </div>

    )
}

export default Navbar
