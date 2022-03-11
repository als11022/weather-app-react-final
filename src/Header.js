import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="overview">
        <h1 id="city">New York</h1>
        <ul>
          <li>
            Last updated: Friday, 17:30 <span id="date"></span>
          </li>
          <li id="description">Mostly Cloudy</li>
        </ul>
      </div>
    </div>
  );
}
