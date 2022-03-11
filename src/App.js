import React from "react";
import './App.css';
import Search from "./Search";
import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-wrapper">
          <div className="weather-app">
            <Search />
            <Header />
            <Weather />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default App;
