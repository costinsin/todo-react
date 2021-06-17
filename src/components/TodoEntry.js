import './TodoEntry.css';
import React from "react";

function TodoEntry(props) {
    return (
        <div className={"entry"} key={props.i}>
            <p className={"text"}>{props.item}</p>
            <button className={"remove-button"} onClick={props.onRemoval}>Remove</button>
        </div>
    );
}

export default TodoEntry;