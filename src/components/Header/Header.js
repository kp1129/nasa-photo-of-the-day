import React from "react";
import "./Header.css";

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>Date: {props.date}</p>
        </div>
    )
}

export default Header;