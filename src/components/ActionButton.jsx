import React from 'react';
import './ActionButton.css';

function ActionButton(props) {
    return (
        <button className={props.buttonClass}>
            {props.children}
        </button>
    );
}

export default ActionButton