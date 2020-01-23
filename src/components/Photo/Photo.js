import React from "react";
import "./Photo.css";


const Photo = (props) => {
  
    return (
        <div className="photoContainer">
            <img src={props.apodImg} alt={props.title} />
        </div>
    )

}

export default Photo;