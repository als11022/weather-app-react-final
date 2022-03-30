import React from "react";
import "./Footer.css"

export default function Footer() {
  return (
    <div className="Footer">
        {" "}This project was coded by <a href="https://keen-wing-9e9d53.netlify.app/" target="_blank" rel="noreferrer" title="Front-end developer portfolio- Abby Szach">Abby Szach</a>{" "}and is open-sourced on {" "}
        <a
          href="https://github.com/als11022/weather-react-wk4"
          target="_blank"
          rel="noreferrer"
          title="Open-sourced Github repository"
        >
          Github
        </a>{" "}
     and hosted on {" "}
     <a href="https://www.netlify.com" target="_blank" rel="noreferrer" title="Netlify Homepage">Netlify</a>
    </div>
  );
}
