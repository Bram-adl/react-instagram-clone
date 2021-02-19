import React from 'react';
import './Avatar.css';

function Avatar(props) {
    return (
        <div className={props.className ? 'Avatar-ImageBorder ' + props.className : 'Avatar-ImageBorder'}>
            <a href="#">
                <img className="Avatar"
                    src={props.imageSrc} 
                    alt={props.alt} />
            </a>
        </div>
    )
}

export default Avatar
