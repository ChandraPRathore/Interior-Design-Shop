import React from 'react'
import './Profile.css'

export default function Profile() {
  return (
    <div>
      <div className="contain">
        <div className="leftcontain">Where better to find inspiration than at your finger tips on the best interior design websites? Beautiful spaces and creative interior ideas grace many pages of the web. To help narrow it down to the best of the best, we’ve put together a list of favorites. Here you’ll find ideas, tips, and even resources – from décor to designers. Read on to discover which interior design websites are bookmark-worthy!
        <br />Durable & hygienic surface,Water & termite proof Fire retardant
Easy to install / clean. <br /> No need for paint ever
Relocatable/Reusable/ Recyclable <br />
Excellent heat insulation <br /> Light weight / No Maintenance
Cost effective / long lasting</div>
        <div className="rightcontain">
          <div className="containimg1"><img src="./images/containimg1.jpg" alt="" height="400px" width="500px"/></div>
          {/* <div className="containimg2"><img src="./images/containimg2.jpg" alt=""  height="400px" width="500px"/></div> */}
        </div>
      </div>
      <div className="bottom">
        <div className="leftbottom"></div>
        <div className="rightbottom"></div>
      </div>
    </div>
  )
}
