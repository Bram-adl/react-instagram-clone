import React from 'react';
import './MainPanel.css';
import SearchInput from './SearchInput';
import ActionLink from './ActionLink';
import ActionButton from './ActionButton';
import UserStories from './UserStories';

function MainPanel(props) {
    return (
        <div className="MainPanel">
            <header className="MainPanel-Header">
                <SearchInput />

                <div className="MainPanel-HeaderLink">
                    <ActionLink>
                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.2427 19.7815C12.4804 20.4729 11.3179 20.4729 10.5556 19.7815L10.3188 19.5668C4.70572 14.4714 1 11.109 1 6.99455C1 3.63215 3.63215 1 6.99455 1C8.89101 1 10.7112 1.88283 11.8992 3.27248C13.0872 1.88283 14.9074 1 16.8038 1C20.1662 1 22.7984 3.63215 22.7984 6.99455C22.7984 11.109 19.0926 14.4714 13.4796 19.5668L13.2427 19.7815Z" stroke="white" strokeWidth="2"/>
                        </svg>
                    </ActionLink>
                    <ActionLink>
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.5262 1.05885L1.79836 0.921692L10.7872 7.83638M22.5262 1.05885L10.7872 7.83638M22.5262 1.05885L12.2811 19.0783L10.7872 7.83638" stroke="white" strokeWidth="1.80155" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </ActionLink>
                    <ActionButton buttonClass={'ActionButton ActionButton-CreatePost'}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M17 0.25C20.7279 0.25 23.75 3.27208 23.75 7V17C23.75 20.7279 20.7279 23.75 17 23.75H7C3.27208 23.75 0.25 20.7279 0.25 17V7C0.25 3.27208 3.27208 0.25 7 0.25H17ZM17 1.75H7C4.10051 1.75 1.75 4.10051 1.75 7V17C1.75 19.8995 4.10051 22.25 7 22.25H17C19.8995 22.25 22.25 19.8995 22.25 17V7C22.25 4.10051 19.8995 1.75 17 1.75ZM12.7432 5.89823C12.6935 5.53215 12.3797 5.25 12 5.25L11.8982 5.25685L11.8006 5.27679C11.4832 5.36411 11.25 5.65482 11.25 6V11.249L6 11.25L5.89823 11.2568C5.53215 11.3065 5.25 11.6203 5.25 12L5.25685 12.1018C5.30651 12.4678 5.6203 12.75 6 12.75L11.25 12.749V18L11.2568 18.1018C11.3065 18.4678 11.6203 18.75 12 18.75L12.1018 18.7432C12.4678 18.6935 12.75 18.3797 12.75 18V12.75H18L18.1018 12.7432C18.4678 12.6935 18.75 12.3797 18.75 12L18.7432 11.8982C18.6935 11.5322 18.3797 11.25 18 11.25H12.75V6L12.7432 5.89823Z" fill="#ffffff"/>
                        </svg>
                        <span>Add Post</span>
                    </ActionButton>
                </div>
            </header>

            <UserStories />
        </div>
    )
}

export default MainPanel
