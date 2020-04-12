import React, {Component} from 'react'
import propTypes from 'prop-types'
import * as BooksAPI from '../library/BooksAPI'

import {Link} from 'react-router-dom'
import BookShelf from '../components/BookShelf'


class LibraryContainer extends Component {

    constructor(props) {
        super(props);

        const { allBooks } = props;
        this.state = {
            bookShelfs: [
                'Currently Reading', 'Want to Read', 'Read'
            ],
            allBooks: allBooks
        }

    }



    render() {
        const {onBookChange} = this.props;
        console.log(allBooks);

        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content"
                    onChange={
                        () => this.state.allBooks
                }>
                    <div> {
                        this.state.bookShelfs.map((item, i) => <BookShelf key={i}
                            title={item}
                            books={
                                this.state.allBooks
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


LibraryContainer.propTypes = {
    onBookChange: propTypes.func,
    onChange: propTypes.func

}

export default LibraryContainer;
