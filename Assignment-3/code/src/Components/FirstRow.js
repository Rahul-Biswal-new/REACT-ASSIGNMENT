import React  from "react";
import './FirstRow.css';

function FirstRow(props){
    // console.log(props);
    return (
        <div className="first-container">
            <div className="appointment">
                <h3>Appointment:</h3>
                <p>{props.val.name}</p>
            </div>
            <div className="email">
                <h3>Email:</h3>
                <p>{props.val.email}</p>
            </div>
            <div className="phone">
                <h3>Phone:</h3>
                <p>{props.val.phone}</p>
            </div>
        </div>
    );
}

export default FirstRow; 