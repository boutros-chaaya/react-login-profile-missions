import './App.css';
import React from 'react'

function App() {
  return (
    <div className="App">
      <Header/>
      <ProfileInfo/>
    </div>
  );
}

function Header(){
  return (
    <div>
      <h1>Mon Profil</h1>
      <hr/>
      <br/>
      <br/>
    </div>
  )
}

function TextBox(props){
  // input must be the second child element in this div !!
  return(
    <div className="inputBox">
      <span>{props.fieldName}</span>
      <input
        className= {props.class}
        type= {props.type}
        required="required"
        defaultValue={props.value}
        readOnly={true}
      />
    </div>
  )
}

function ProfileInfo(){
  const allInputBoxes = document.getElementsByClassName("inputBox");
  

  function handelEdit(){
    const passwordInput = allInputBoxes[3].children[1]
    passwordInput.type = "text"

    for (let elt in allInputBoxes){
      let inputs = allInputBoxes[elt].children[1]
      inputs.readOnly = false
    }
  }
  
  function handelSave(){
    const passwordInput = allInputBoxes[3].children[1]
    passwordInput.type = "password"

    for (let elt in allInputBoxes){
      let inputs = allInputBoxes[elt].children[1]
      inputs.readOnly = true
    }    
  }

  return(
    <div>
      <div className="fieldRow">
        <TextBox value="Chaaya" fieldName="Nom"/>
        <TextBox value="Boutros" fieldName="Prénom"/>
      </div>
      <br/>
      <div className="fieldRow">
        <TextBox type="email" value="boutros.chaaya@randomemail.com" fieldName="Email"/>
        <TextBox class = "password" type="password" value="password" fieldName="Password"/>
      </div>
      <br/>
      <div className='btnDiv'>
        <button type="button" className='editBtn' onClick={handelEdit}>Modifier</button>
        <button type="button" className='saveBtn' onClick={handelSave}>Sauvegarder</button>
      </div>
    </div>
  )
}


export default App;
