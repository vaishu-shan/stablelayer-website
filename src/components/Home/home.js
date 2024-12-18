import React from 'react'
import "./home.css"
import "../../styles/global.css"
import Navbar from '../../containers/Navbar/navbar'
import BackedBy from '../../containers/BackedBy/backedBy'
import StableLayerIcon from "../../assets/Images/SL-icon.png"
import HomeBanner from "../../assets/Images/home-right.png"


const HomeSection = () => {
    return (
        <div className='main-container'>
            <div className='main-container-two layout-background-image border-cblue-600  '>
                <Navbar />
                <div className='home-section'>
                    <div className='home-sec-left'>
                        <div className='gap-5 left-flex'>
                            <h1 className='logo-text' style={{marginBottom:10}}> StableLayer</h1>
                            <div className='left-head'> Your Stablecoin:<br/>Smarter, More Efficient, Less Hassle</div>
                            <div className="left-subhead">Stable, scalable, and seriously smart—because your <br/> stablecoin shouldn’t make life unstable.</div>

                            <a href="https://clinquant-peony-16a13b.netlify.app/" target='_blank' class="custom-button">
                                <img src={StableLayerIcon} alt="" className='c-b-img' />
                                <div>ENTER STABLELAYER </div>
                            </a>
                 
                        </div>
                    </div>
                    <div className='home-sec-right'>
                        <img src={HomeBanner} alt="" className='home-image' />
                    </div>
                </div>
                <BackedBy />
            </div>
        </div>
    )
}

export default HomeSection
