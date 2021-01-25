import React from "react";

import Logo from "./logo.png";

import "./styles.css";

export default function Navbar() {
  return (
    <div className="nav">
    <input type="checkbox" id="nav-check" />
    <div className="nav-header">
      <div className="nav-title">
       <img src={Logo} alt="logo" className="nav-brand"/>
      </div>
    </div>
    <div className="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    
    <div className="nav-links">
      <a href="//github.io/jo_geek" target="_blank">Quem somos</a>
      <a href="http://stackoverflow.com/users/4084003/" target="_blank">Assessorias</a>
      <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Depoimentos</a>
      <a href="https://codepen.io/jo_Geek/" target="_blank">Contato</a>
    </div>
  </div>


  );
}
