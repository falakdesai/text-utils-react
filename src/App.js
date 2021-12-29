import './App.css';
//import About from './components/About';   --> removing temporarily since we are not using Router
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'
import Alert from './components/Alert';

{/*
 Since GitHub pages doesn't support ReactRouter, I'll comment the code out temporarily. All these functionalities works fine on a live server, so don't worry. 

 import {
   BrowserRouter as Router,
   Routes,
   Route
 } from "react-router-dom"; 
*/}

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "warning");
    }
    else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode Has Been Enabled", "success")
    }
  }

  return (
    <>
      {/*
       <Router> 
      */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/*
         Keep the below TextForm component out of Router so that it works nicely on Github server. For live server hosting, remove the below line and make actual router component live. 
        */}

      <TextForm heading="Enter Text To Analyze" mode={mode} showAlert={showAlert} />


      {/*
       <Routes>
         <Route exact path="/" element={<TextForm heading="Enter Text To Analyze" mode={mode} showAlert={showAlert} />} ///>
         <Route exact path="/about" element={<About />} />
       </Routes>
      </Router> 
      */}

    </>
  );
}

export default App;
