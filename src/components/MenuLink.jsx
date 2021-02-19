import React from 'react';
import './MenuLink.css';

function MenuLink(props) {
    const handleClick = (e) => {
        e.preventDefault();
        props.onLinkClick(props.text);
    };
    
    return (
        <li className={props.active.toLowerCase() == props.text.toLowerCase() ? 'MenuLink MenuLink-Active' : 'MenuLink'}>
            <a href="#" onClick={handleClick}>
                {props.children}
                <span>{props.text}</span>
            </a>
        </li>
    )
}

export default MenuLink
