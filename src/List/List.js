import React from 'react'
import Book from '../Book/Book'

class List extends React.Component {

    render() {        
        let bookResults = this.props.books.items.map((book, i) => 
            <Book {...book} key={i} />
        )

    

        return(
            <div className="list">
                { bookResults }
            </div>
        )
           
    }
}

export default List