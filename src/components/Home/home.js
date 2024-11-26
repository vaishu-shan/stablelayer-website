import React from 'react'
import "./home.css"
import "../../styles/global.css"
import Navbar from '../../containers/Navbar/navbar'
import BackedBy from '../../containers/BackedBy/backedBy'
import StableLayerIcon from "../../assets/Images/SL-icon.png"

const HomeSection = () => {
    return (
        <div className='main-container'>
            <div className='main-container-two layout-background-image border-cblue-600  '>
                <Navbar />
                <div className='home-section'>
                    <div className='home-sec-left'>
                        <div className='gap-5 left-flex'>
                            <h1 className='logo-text' style={{marginBottom:10}}> StableLayer</h1>
                            <div className='left-head'> Enabling Internet Money</div>
                            <div className="left-subhead">Synthetic Dollar with Internet Native Yield</div>

                            <a href="#" class="custom-button">
                                <img src={StableLayerIcon} alt="" className='c-b-img' />
                                <div>ENTER STABLELAYER </div>
                            </a>
                            <div className='metric-home'>

                                <div class="metric">
                                    <span>sUSDe APY</span>
                                    <div className='metric-data'>   29%</div>
                                </div>
                                <div className='metric-break' />
                                <div class="metric">
                                    <span>TVL</span>
                                    <div className='metric-data'> $3.28B</div>
                                </div>
                                <div className='metric-break' />

                                <div class="metric">
                                    <span>APY</span>
                                    <div className='metric-data'>  29% </div>
                                </div>
                                <div className='metric-break' />

                                <div class="metric">
                                    <span>Est. APY</span>
                                    <div className='metric-data'>  31% </div>
                                </div>
                                <div className='metric-break' />

                                <div class="metric">
                                    <span>Users</span>
                                    <div className='metric-data'>     303.16K </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='home-sec-right'></div>
                </div>
                <BackedBy />
            </div>
        </div>
    )
}

export default HomeSection
