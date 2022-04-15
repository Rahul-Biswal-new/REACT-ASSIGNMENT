import React from "react";
import './ThirdRow.css';

const ThirdRow = (props) => {
    return (
        <div className="third-container">
            <input type="checkbox" id="vehicle1"></input>
            <div>
                <img src={props.val.profilepicture} alt="Image" />
            </div>
            <div>
                <h4>{props.val.name}</h4>
                <p>{props.val.designation}</p>
            </div>
        </div>
    )
}

export default ThirdRow;