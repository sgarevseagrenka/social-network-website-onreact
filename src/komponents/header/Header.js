import React from "react";
import logo from "../../img/logo.png";
import "./header.css";

function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} />
            <p>fireball</p>

        </div>
    );

}
export default Header