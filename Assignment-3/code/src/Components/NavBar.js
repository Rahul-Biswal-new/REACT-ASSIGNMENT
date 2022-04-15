import React from "react";
import './NavBar.css';

function NavBar(props){
    return (
        <div className="navbar">
            <div></div>
            <div className="details">
                <h3>{props.val.name}</h3>
                <p>{props.val.eid}</p>
            </div>
            <div className="print">
                <button>Print</button>
            </div>
        </div>
    );
}

export default NavBar; 