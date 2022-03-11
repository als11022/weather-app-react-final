import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div className="Card">
      <div className="card">
        <section className="forecast">
          <div className="card-header">5 Day Forecast</div>
          <div className="card-body" id="forecast"></div>
        </section>
      </div>
    </div>
  );
}
