import React, { Component } from 'react'
import propTypes from 'prop-types'
import * as BooksAPI from '../library/BooksAPI'

import ShelfChanger from './ShelfChanger'


class Book extends Component {

    handleChangeBookShelf = (shelf) => {
        const { book, onChange } = this.props;

        BooksAPI
            .update(book, shelf)
            .then((books) =>
            {
                onChange && onChange(book, book.shelf || 'none', shelf, books);
            });
    }

    render() {
        const { book, onBookChange } = this.props;
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                        <ShelfChanger
                            key={book.id}
                            book={book}
                            onChange={this.handleChangeBookShelf}
                            onBookChange={onBookChange}
                        />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors.map(item => item + ' ')}</div>
                </div>
            </li>
        )
    }
}


Book.propTypes = {
    book: propTypes.objectOf(propTypes.any),
    onChange: propTypes.func,
    onBookChange: propTypes.func,

}


export default Book;
