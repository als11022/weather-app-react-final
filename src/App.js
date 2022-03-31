import React from "react";
import './App.css';
import Weather from "./Weather";
import Footer from "./Footer";


function App() {
 var currentTime = new Date().getHours();
 if (7 <= currentTime && currentTime <20){
  return (
    <div className="App">
<div className="container">
        <div className="weather-wrapper">
          <div className="weather-app-day">
            <Weather defaultCity="Boston" />
          </div>
          <Footer />
        </div>
        </div>
    </div>
  );
}
else {
  return (
    <div className="App">
    <div className="container">
            <div className="weather-wrapper">
              <div className="weather-app-night">
                <Weather defaultCity= "Boston" />
              </div>
              <Footer />
            </div>
            </div>
        </div>
  );
}
}


export default App;
