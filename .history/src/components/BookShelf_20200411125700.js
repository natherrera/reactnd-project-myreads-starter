import React, { Component } from 'react'
import propTypes from 'prop-types';
import Book from './Book'


class BookShelf extends Component {


    render() {
        const { title, books, onBookChange } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            books
                                .filter(item => item.shelf.toLowerCase() === title.toLowerCase().replace(/\s/g, ''))
                                .map((book) =>
                                    <Book
                                        key={book.id}
                                        book={book}
                                    />
                                )
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

BookShelf.propTypes = {
    title: propTypes.string.isRequired,
    books: propTypes.arrayOf(propTypes.objectOf(propTypes.any)),
    onBookChange: propTypes.func
}

export default BookShelf;
