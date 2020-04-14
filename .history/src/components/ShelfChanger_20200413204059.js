import React, { Component } from 'react';
import propTypes from 'prop-types';
import * as BooksAPI from '../library/BooksAPI';


class ShelfChanger extends Component {
    constructor(props) {
        super(props);

        const { book } = this.props

        this.state = {
            currentShelf: book.shelf
        };
    }

    doChangeShelf = (event) => {
        const { onBookChange, book } = this.props;
        const newShelf = event.target.value;

        BooksAPI
        .update(book, newShelf)
        .then((books) =>
        {
            onBookChange && onBookChange(book, this.state.currentShelf, newShelf || 'none', newShelf, books);
            this.setState({ currentShelf: newShelf });
        });

    }


    render() {

        const { book } = this.props;

        return (
            <div className="book-shelf-changer">
                <select onChange={ this.doChangeShelf }  defaultValue={ this.state.currentShelf }>
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
