import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="input-group" id="search-form">
        <input
          type="text"
          className="form-control mb-3 "
          placeholder="enter a city"
          id="city-input"
          autoComplete="off"
          autoFocus="on"
        />
        <button
          className="btn btn-outline-secondary mb-3"
          type="submit"
          id="search-button"
        >
          <i className="fas fa-search-location"></i>
        </button>
        <button
          className="btn btn-outline-secondary mb-3"
          type="button"
          id="current-button"
        >
          <i className="fas fa-map-pin"></i> current location
        </button>
      </form>
    </div>
  );
}
