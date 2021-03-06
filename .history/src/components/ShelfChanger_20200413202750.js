import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as BooksAPI from '../library/BooksAPI';


class ShelfChanger extends Component {


    doChangeShelf = (event) => {
        const { onBookChange, book } = this.props;
        const newShelf = event.target.value;

        BooksAPI
        .update(book, newShelf)
        .then((books) =>
        {
            onBookChange && onBookChange(book, book.currentShelf, newShelf || 'none', book.currentShelf, books);
            console.log('Component: shelfchanger ',book, book.currentShelf, newShelf);
        });

    }


    render() {

        const { book } = this.props;

        return (
            <div className="book-shelf-changer">
                <select onChange={ this.doChangeShelf }  defaultValue={ book.currentShelf }>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

ShelfChanger.propTypes = {
    currentShelf: propTypes.any,
    onChange: propTypes.func,
    onBookChange: propTypes.func
}

export default ShelfChanger;
