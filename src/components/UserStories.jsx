import React, { Component } from 'react';
import Avatar from './Avatar';
import './UserStories.css';

export class UserStories extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            user: {},
            users: [],
        };

        this.fetchUser = this.fetchUser.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
    }

    fetchUser() {
        this.setState({
            user: {
                name: 'Michaelle Jong',
                username: 'mi-jong',
                imageSrc: 'https://images.unsplash.com/photo-1582533552406-234434284c17?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
                posts: 46,
                followers: 2811,
                following: 526,
            }
        });
    }

    fetchUsers() {
        fetch('/data/users.json')
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    users: data,
                });
            })
    }
    
    componentDidMount() {
        this.fetchUser();
        this.fetchUsers();
    }
    
    render() {
        const user = this.state.user;
        const users = this.state.users;
        
        const avatars = users.map(user => (
            <Avatar key={user.id} imageSrc={user.imageSrc} className={'Avatar-ImageBorderSm Flex-Shrink-0 Margin-Right-4'} />
        ));
        
        return (
            <div className="UserStories">
                <header className="UserStories-Header">
                    <h2 className="UserStories-HeaderText">Stories</h2>
                </header>

                <main className="UserStories-Row">
                    <Avatar imageSrc={user.imageSrc} className={'Avatar-ImageBorderSm Avatar-ImageBorder-Off Flex-Shrink-0 Margin-Right-4'} alt={user.name} />

                    {avatars}
                    {avatars}
                </main>
            </div>
        )
    }
}

export default UserStories

