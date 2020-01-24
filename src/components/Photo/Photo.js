import React from "react";
import "./Photo.css";


const Photo = (props) => {
  
    return (
        <div className="photoContainer">
            <img src={props.data.hdurl} alt={props.data.title} />
        </div>
    )

}

export default Photo;