import React from 'react'
import './SearchBar.css'

class SearchBar extends React.Component {
    render() {
        return(
            <div className="SearchBar">
                <label htmlFor="searchbox">Search: </label>
                <input
                    placeholder="Enter search term..."
                    name="searchbox"
                    id="searchbox" />
                <button 
                    type="submit">Search</button>
            </div>
        )
    }
}

export default SearchBar