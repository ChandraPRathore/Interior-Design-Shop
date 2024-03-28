import React from 'react'
import "./B.css"
export default function B(props) {
    console.log(props);
    const{title,data,children,src}=props;
  return (
    <div>
      <div className="title1">
       <b>{title}</b>  <br /><br />
       </div>
       <img src={src} alt="decor.jpg" height="350px" weidth="400px"/>
       <br />
        {data} 
        <br />
       <b> {children}</b>
       <hr />
       <br />
    </div>
  )
}
