import React from 'react'
import "./C.css"
export default function C(props) {
    const{title,src}=props;
  return (
    <div>
       <div className="foot">
        <div className="foot1">
          <ul>
            <li><b>Contact</b></li>
            <li>+91 9956022152</li><li>Ashok Kumar Yadav(Ex.Army)</li><li>Kapil Yadav</li>
            

          </ul>
        </div>
        <div className="foot2">
          <ul>
          <li><b>Address</b></li>
            <li>J.N.V Road,</li>
            <li>Fatehgarh,Farrukhabad(UP)</li>
          </ul>
        </div>
        <div className="foot3">
          <ul><li><b>Pincode</b></li>
          <li>209601</li></ul>
        </div>
       </div>
       <hr />
       
   
    </div>
  )
}
