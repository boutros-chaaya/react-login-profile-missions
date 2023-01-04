import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Login/>
    </div>
  );
}

function Header(){
  return(
    <div>
      <h1>Log In</h1>
      <hr></hr>
    </div>
  )
}

function TextBox(props){
  return(
    <div className="inputBox">
      <span>{props.fieldName}</span>
      <input
        className= {props.class}
        type= {props.type}
        required="required"
        defaultValue={props.value}
        readOnly={false}
      />
    </div>
  )
}

function Login(){
  return(
    <div>
      <div><Header/></div>
      <div className="loginBox">
        <br/>
        <br/>
        <div><TextBox fieldName = "Email" class = "email-txt-box" type = "text"/></div>
        <br/>
        <div><TextBox fieldName = "Mot de passe" class = "password-txt-box" type = "password"/></div>
        <br/>
        <button className="loginButton">Log In</button>
      </div>
    </div>
  )
}

export default App;
