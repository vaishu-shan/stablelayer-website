import React from 'react'
import "./home.css"
import "../../styles/global.css"
import Navbar from '../../containers/Navbar/navbar'
import BackedBy from '../../containers/BackedBy/backedBy'
import { IconContext } from "react-icons";
import { BsInfoCircle } from "react-icons/bs";

const HomeSection = () => {
    return (
        <div className='main-container'>
            <div className='main-container-two layout-background-image border-cblue-600 border-2 rounded-4xl'>
                <Navbar />
                <div className='home-section'>
                    <div className='home-sec-left'>
                        <div className='gap-5 left-flex'>
                            <div className='left-head'>ENABLING <br /> INTERNET MONEY_</div>
                            <div className="left-subhead">Synthetic Dollar with Internet Native Yield</div>
                            <div className='left-stats rounded whitespace-nowrap leading-4 text-white stat'>
                                <div>sUSDe APY</div>
                                <div>29%</div>
                                <IconContext.Provider value={{ size:'1em',color: "#fff", className: "social-icon" }}>
                        <div style={{ margin: '0' }}>
                            <BsInfoCircle />
                        </div>
                    </IconContext.Provider>
                            </div>
                            <a href="#" class="custom-button">
                                ENTER ETHENA
                            </a>
                        </div>
                    </div>
                    <div className='home-sec-right'></div>
                </div>
                <BackedBy/>
            </div>
        </div>
    )
}

export default HomeSection
