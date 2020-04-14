import React, {Component} from 'react'
import propTypes from 'prop-types'
import * as BooksAPI from '../library/BooksAPI'

import {Link} from 'react-router-dom'
import BookShelf from '../components/BookShelf'


class LibraryContainer extends Component {

    constructor(props) {

        super(props);

        this.state = {
            bookShelfs: [
                'Currently Reading', 'Want to Read', 'Read'
            ]
        }

    }

    render() {
        const {onBookChange, allBooks} = this.props;

        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content"
                    onChange={
                        () => allBooks
                }>
                    <div> {
                        this.state.bookShelfs.map((item, i) => <BookShelf key={i}
                            title={item}
                            books={
                                allBooks
                            }
                            onBookChange={onBookChange}/>)
                    } </div>
                </div>
                <Link to='/search' className="open-search">
                    <button>Add a book</button>
                </Link>
            </div>
        )
    }
}


// LibraryContainer.propTypes = {
//     onBookChange: propTypes.func,
//     onChange: propTypes.func
// }

export default LibraryContainer;
