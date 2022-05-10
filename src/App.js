import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import reactRouterDom from 'react-router-dom';

function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
      // here what is happens like showalert function is sent to textform using props go there now 
      // welcome back so now the message which was passed there in textform.js that message will go into the alert.js and return it from there and then that messages gets set by setAlert state variable  
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const [mode, setmode] = useState('light');
  const [switchText, setswitchText] = useState("Enable Dark Mode")
  const toggleMode = () => {
    if (mode === "light" && switchText === "Enable Dark Mode") {
      // see mode and switchText is the state variable so whenever i use the toggleMode funciton then at that time both state variable comes into the use 
      setmode("dark");
      setswitchText("Disable Dark Mode");
      document.body.style.backgroundColor = "#091240";
      showAlert("Dark mode is enables", "success");
      document.title = "TextUtils-Dark Mode";
    }
    else {
      setmode("light");
      setswitchText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enables", "success");
      document.title = "TextUtils-Light Mode";
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="textutils" aboutText="About" mode={mode} toggleMode={toggleMode} switchText={switchText} />
        {/* here i have understood one thing is that if you want to change the state from app.js then  */}
        <Alert alert={alert} />
        {/* here i have added alert coz i have to bring the alert component into the app.js and i have to sent intial value which is null to alert.js */}


        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}
            {/* <Route exact path="/"> */}
              <Textform showAlert={showAlert} heading="Enter your text here for Analyize" mode={mode} />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}

      {/* <Navbar /> */}
      {/* this is how one can sent the props  */}
      {/* here i created navbar componets so that the app.js remains clean and i can use that components next time too . Here i am just retuning the navbar components like above*/}
    </> // this is called fregmentation
  );
}

export default App;

    // <div classNameNameName="blank">
    //   Lovely
    // </div>
    // <div classNameNameName="nav">
    //   <nav>
    //     <ul>
    //       <li>Home</li>
    //       <li>About</li>
    //       <li>Contact</li>
    //     </ul>
    //   </nav>
    //   <h1>Hello {name}</h1>
    //   {/* here you can see that javascript is used and in  curly braces nothing like colon or "" or ''used */}
    // </div>
    // <div classNameNameName="para">
    //   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur excepturi quasi aspernatur porro itaque laudantium ad accusantium debitis quisquam repudiandae quod inventore temporibus, aliquid minima maxime quaerat exercitationem doloribus eaque?
    // </div>


// we create components into src folder
// function based components using nowadays 
