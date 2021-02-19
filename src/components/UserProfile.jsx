import React from 'react';
import Avatar from './Avatar';
import './UserProfile.css';

function UserProfile(props) {
    const user = props.user;
    const keys = ['posts', 'followers', 'following'];

    const capitalize = (text) => {
        return text.slice(0, 1).toUpperCase() + text.slice(1);
    }
    
    const profileInfo = keys.map((key, index) =>
        <li key={index}>
            <div className="UserProfile-InfoAmount">{ user[key] }</div>
            <div className="UserProfile-InfoText">{ capitalize(key) }</div>
        </li>
    );
    
    return (
        <div className="UserProfile">
            <Avatar imageSrc={user.imageSrc} alt={user.name} />
            <p className="UserProfile-Name">
                {user.name}
            </p>
            <p className="UserProfile-Username">
                @{user.username}
            </p>

            <div className="UserProfile-Info">
                <ul className="UserProfile-InfoList">
                    {profileInfo}
                </ul>
            </div>
        </div>
    )
}

export default UserProfile
