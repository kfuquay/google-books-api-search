import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import SearchFilter from '../SearchFilter/SearchFilter'

export default function Form(props) {
    return(
        <form onSubmit={props.onSubmitForm} className="form">
            <SearchBar />
            <SearchFilter />
        </form>
    )
}
