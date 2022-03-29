import React from "react";
import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
<div className="container">
        <div className="weather-wrapper">
          <div className="weather-app">
            <Weather defaultCity="Berlin" />
          </div>
          <Footer />
        </div>
        </div>
    </div>
  );
}


export default App;
