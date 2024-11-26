import React from 'react'
import "./backedBy.css"
import Logo1 from "../../assets/Images/Company_logo.png"
import Logo2 from "../../assets/Images/Company_logo _1.png"
import Logo3 from "../../assets/Images/Company_logo_2.png"
import Logo4 from "../../assets/Images/Company_logo_3.png"
import Logo5 from "../../assets/Images/Company_logo _4.png"
import Logo6 from "../../assets/Images/Company_logo_5.png"

const BackedBy = () => {
  return (
    <div className='backed-sec'>
      <div className='b-s-head '>Secured By</div>
      {/* <div className='linear'>
        <div className='linear-inside'></div>
      </div> */}

      <div className='sponser-logo'>
        <img src={Logo1} alt='logo1 ' className='s-l-img' />
        <img src={Logo2} alt='logo1 ' className='s-l-img' />
        <img src={Logo3} alt='logo1 ' className='s-l-img' />
        <img src={Logo4} alt='logo1 ' className='s-l-img' />
        <img src={Logo5} alt='logo1 ' className='s-l-img' />
        <img src={Logo6} alt='logo1 ' className='s-l-img' />
      </div>
    </div>
  )
}

export default BackedBy
