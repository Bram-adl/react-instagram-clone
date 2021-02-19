import React, { Component } from 'react'
import './SearchInput.css';

export class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }
    
    render() {
        return (
            <div className="SearchInput">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.75 10C19.75 4.61522 15.3848 0.25 10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C12.4226 19.75 14.6388 18.8664 16.344 17.404L22.3336 23.3943L22.4177 23.4669C22.7114 23.6848 23.128 23.6606 23.3943 23.3943C23.6872 23.1014 23.6872 22.6265 23.3943 22.3336L17.404 16.344C18.8664 14.6388 19.75 12.4226 19.75 10ZM1.75 10C1.75 5.44365 5.44365 1.75 10 1.75C14.5563 1.75 18.25 5.44365 18.25 10C18.25 14.5563 14.5563 18.25 10 18.25C5.44365 18.25 1.75 14.5563 1.75 10Z" fill="#fff"/>
                </svg>

                <input 
                    type="text" 
                    placeholder="Search"
                    value={this.state.value}
                    onChange={this.handleChange} />
            </div>
        )
    }
}

export default SearchInput
