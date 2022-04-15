import React from "react";
import './SecondRow.css'

function SecondRow(props){
    return (
        <div className="second-container">
            <div className="status">
                <h3 className="bold">Status</h3>
                <li>{props.val.status}</li>
            </div>
            <div className="door">
                <h3 className="door">Door</h3>
                <p>{props.val.door}</p>
            </div>
            <div className="time">
                <h3 className="time">Time</h3>
                <div>
                    <p>{props.val.time}<span>{props.val.date}</span></p>
                </div>
            </div>
        </div>
    );
}

export default SecondRow;