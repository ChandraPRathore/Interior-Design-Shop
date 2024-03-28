import React, { Component } from 'react'
import "./A.css"
import {Link} from 'react-router-dom' 
export class A extends Component {
  render() {
    return (
      <div className="Menu">
        <div className="Name">
          <div className="Ga">
            <h1>G</h1>
          </div>
          <div className="ali">
          <h1>eetanjali</h1>
          </div>
        </div>
        <div className="Index">
          <ul>
            <li><Link to = '/' >Home</Link></li><hr />
            <li><Link to = '/Contact' >Contact</Link></li><hr />
            <li><Link to = '/Profile' >Profile</Link></li><hr />
            <li><Link to = '/Details' >Details</Link></li>
          </ul>
          
        </div>
        
      </div>
      
    )
  }
}

export default A