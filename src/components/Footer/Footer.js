import React from "react";
import "./Footer.css";

const Footer = (props) => {
    return (
        <footer>
            <p>Copyright: {props.data.copyright}</p>
            <p>{props.data.explanation}</p>
        </footer>
    )
}

export default Footer;