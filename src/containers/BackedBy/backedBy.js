import React from 'react'
import "./backedBy.css"
import InjectiveImage from "../../assets/Images/injective.png"
import TriaImage from "../../assets/Images/tria.png"
import ApeImage from "../../assets/Images/ape.png"

const BackedBy = () => {
  return (
    <div className='backed-sec'>
      <div className='b-s-head '>Partnered with</div>


      <div className='sponser-logo'>
        <img src={InjectiveImage} alt='logo1 ' className='s-l-img' />
        <img src={ApeImage} alt='logo1 ' className='s-l-img' />
        <img src={TriaImage} alt='logo1 ' className='s-l-img' />
      </div>
    </div>
  )
}

export default BackedBy
