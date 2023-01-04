import './App.css';
import Modal from './modal';
import React, {useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


// model : https://website3176491.nicepage.io/Les-missions.html
// mui: https://mui.com/material-ui/getting-started/overview/

function App() {
  return (
    <div className="App">
    <Header/>
    <AllMissions/>
    <Footer />
      
    </div>
  );
}

//Components
function Header(){
  return(
    <div>
  <header>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
  </a>
  </header>
  <h3 className='page-title'>My missions</h3>
  </div>
  )
}

function Footer(){
  return(
  <footer>
      <p><a>Contact Us!</a></p>
  </footer>
  )
}


function Mission(props){

  const info = props.info

  const [isOpen, setOpen] = useState(false)

  // Check for ESC key press (close modal)
  window.addEventListener("keydown", function(event) {
    if (event.key == "Escape"){
        setOpen(false)
    }
  });
  

  //for (let i = 0; i < ; i++) {
  //  console.log(i);

  return (
    <div className='mission-block'>

      <div className= 'mission-name-img'>
        <img className='mission-img' src={require("./images/planet.png")} width = "150" height = "150"/>
        <h4 className='mission-name'>{info.name}</h4>
      </div>
      <div>
        <p className='mission-desc'>{info.desc}</p>
      
      <div className='mission-extra-info'>
        <div className='extra-info1'>
        <p>Planet size: {info.size}</p>
        <p>Postition of the robot: {info.robotPos}</p>
        </div>
        <div className='extra-info2'>
        <p>Enemy: {info.minerai}, {info.mineraiCondition}</p>
        <p>Excluded Commands: {info.commandeExc}</p>
        </div>
      </div>
        
             <button className='open-modal-button'>Open mission</button>
      
            <Modal  open={isOpen} onClose={() => setOpen(false)}>
              onClick={() => setOpen(true)}
                modal text
            </Modal>
      </div>
            
    <footer>  
               
    	  
    </footer>
      
    </div>
  )
}


function AllMissions(){
    
      const lvl12 = {
    name:"Level 12",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    size: "24x45",
    robotPos: "Contre un mur",
    minerai: "oui",
    mineraiCondition: "pas contre un mur",
    commandeExc: "None",
    planetImg: "./images/planet.png"
  }
  
  const lvl15 = {
    name:"Level 15",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    size: "10x80",
    robotPos: "Unknown",
    minerai: "No",
    mineraiCondition: "",
    commandeExc: "None",
    planetImg: "./images/planet.png"
  }
  
const lvl16 = {
    name:"Level 16",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    size: "10x80",
    robotPos: "Unknown",
    minerai: "No",
    mineraiCondition: "",
    commandeExc: "None",
    planetImg: "./images/planet.png"
  }
    
    return ( 
        <div>
            <Mission info={lvl16}/>
        <br/>
        <br/>
            <Mission info={lvl15}/>
        <br/>
        <br/>
            <Mission info={lvl12}/>
        </div>
    )
}

export default App;
