import React from 'react'
import B from './B';
import A from './A';
import A1 from './A1';
import C from './C';
export default function Home() {
  return (
    <div>
      <div className="M0">
          {/* <A/> */}
          
          <A1/>
          
          <div className="line">
      <img src="./images/line.png" alt="xyz.png" height="100px" />
    </div>
          
      </div>
    <div className="F">
      <div className="M1">
        <div className="M11">
          <B title="Doodad Textured " src="images/img1.jpeg" data="Shortening design lead times while maintaining product quality requires careful planning of the design process" 
           >
            <button>click here</button>
            </B>
        </div>
        <div className="M12">
          <B title="Brown PVC" src="images/img8.jpeg" data="Shortening design lead times while maintaining product quality requires careful planning of the design process">
          <button>click here</button> 
          </B>
        </div>
        <div className="M13">
        <B title= "Customized Wallpapers" src="images/img7.jpeg" data="Shortening design lead times while maintaining product quality requires careful planning of the design process">
          <button>click here</button> 
          </B>
        </div>
      </div>
      <div className="N1">
        <div className="N11">
        <B title= "Winter Tree Vinyl Pvc" src="images/img4.jpeg" data="Shortening design lead times while maintaining product quality requires careful planning of the design process">
          <button>click here</button> 
          </B>
        </div>
        <div className="N12">
        <B title= "PVC Royal Pattern " src="images/img5.jpeg" data="Shortening design lead times while maintaining product quality requires careful planning of the design process">
          <button>click here</button> 
          </B>
        </div>
        <div className="N13">
        <B title= "Vinyl Brown DARK" src="images/img7.jpeg" data="Shortening design lead times while maintaining product quality requires careful planning of the design processic">
          <button>click here</button> 
          </B>
        </div>
      </div> 
      <div className="O1">
        <div className="O11">
        <B title= "Royal Pattern Black" src="images/img7.jpeg" data="Shortening design lead times while maintaining product quality requires careful planning of the design process">
          <button>click here</button> 
          </B>
        </div>
        <div className="O12">
        <B title= "Cream Designer PVC" src="images/img8.jpeg" data="Shortening design lead times while maintaining product quality requires careful planning of the design process">
          <button>click here</button> 
          </B>
        </div>
        <div className="O13">
        <B title= "Light Color Teak Wood PVC" src="images/img8.jpeg" data="Shortening design lead times while maintaining product quality requires careful planning of the design process">
          <button>click here</button> 
          </B>
        </div>
      </div>
    </div>
      <div>
      <C/>
        
      </div> 
    </div>
  )
}
