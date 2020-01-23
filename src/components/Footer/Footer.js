import React from "react";
import "./Footer.css";

const Footer = (props) => {
    return (
        <footer>
            <p>Copyright: {props.copyright}</p>
            <p>{props.desc}</p>
        </footer>
    )
}

export default Footer;