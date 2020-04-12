import React, { Component } from 'react'
import propTypes from 'prop-types'
import * as BooksAPI from '../library/BooksAPI'


class ShelfChanger extends Component {

    constructor(props) {
        super(props);

        const { currentShelf } = this.props

        this.state = {
            currentShelf: currentShelf.shelf,
            newShelf: '',
            book: currentShelf,
            // allShelfs: [
            //         {value: 'move', disabled: 'true', text: 'Move to...'},
            //         {value: 'currentlyReading', disabled: 'false', text: 'Currently Reading'},
            //         {value: 'wantToRead', disabled: 'false', text: 'Want to Read'},
            //         {value: 'read', disabled: 'false', text: 'Want to Read'},
            //     ]
        };
    }

    doChangeShelf = (event) => {
        const { onChange, onBookChange } = this.props;
        const newShelf = event.target.value;

        BooksAPI
        .update(this.state.book, newShelf)
        .then((newShelf) => {
            onBookChange && onBookChange(this.state.book, currentShelf, newShelf);
            this.setState({ currentShelf: newShelf })
        })

        console.log(newShelf)

    }


    render() {

        return (
            <div className="book-shelf-changer" onClick={this.info}>
                <select onChange={this.doChangeShelf}  defaultValue={this.state.currentShelf}>
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
