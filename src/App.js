import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  //Alert show krne ka logic
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    //alert show krne ka time limit set krne ka logic 2000 means 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode has been enabled", "success");
      //This is use for like in email show how many message are unread like(4)...
      document.title = 'TextUtils - Dark Mode';
      //ye logic use krte h title chamkaane ke liye  means hacking type
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // },1500);
    }
    else{
    setMode('light');
    document.body.style.background = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title = 'TextUtils - Light Mode';
    }
  }

return (
  <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
        {/* /users --> Component 1
       /users/home --> Component 2......as we use exact not compulsory to use exact */}
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={ <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          />
        </Routes>
      </div>
    {/* </Router> */}
  </>
);
}

 export default App;
