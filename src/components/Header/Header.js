import React from "react";
import "./Header.css";

const Header = (props) => {
    return (
        <div>
            <h1>{props.data.title}</h1>
            <p>Date: {props.data.date}</p>
        </div>
    )
}

export default Header;