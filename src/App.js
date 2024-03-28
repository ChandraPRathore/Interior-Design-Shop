import './App.css';
import A from './components/A';
import A1 from './components/A1';
import B from './components/B';
import C from './components/C';
import {BrowserRouter as Router,routes,Route, Routes} from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <A/>
      <Routes>
       <Route path = '/' element = {<Home/>}/>
       <Route path = '/Details' element = {<Details/>}/>
       <Route path = '/Contact' element = {<Contact/>}/>
       <Route path = '/Profile' element = {<Profile/>}/>
       <Route path='*' element= {<Error/>}/>
      </Routes>
      </Router>


{/*       
      <div className="M0">
          <A/>
          
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
        
      </div> */}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
