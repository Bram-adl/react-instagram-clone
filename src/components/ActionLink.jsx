import React from 'react';
import './ActionLink.css';

function ActionLink(props) {
    return (
        <a href="#" className="ActionLink">
            {props.children}
        </a>
    )
}

export default ActionLink
