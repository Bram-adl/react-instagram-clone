import React from 'react';

import './SidebarPanel.css';

import InstagramLogo from './InstagramLogo';
import UserProfile from './UserProfile';
import SidebarPanelMenu from './SidebarPanelMenu';

function SidebarPanel() {
    const user = {
        name: 'Michaelle Jong',
        username: 'mi-jong',
        imageSrc: 'https://images.unsplash.com/photo-1582533552406-234434284c17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
        posts: 46,
        followers: 2811,
        following: 526,
    };
    
    return (
        <div className="SidebarPanel">
            <div className="SidebarPanel-Logo">
                <InstagramLogo />
                <UserProfile user={user} />
                <SidebarPanelMenu />
            </div>
        </div>
    )
}

export default SidebarPanel
