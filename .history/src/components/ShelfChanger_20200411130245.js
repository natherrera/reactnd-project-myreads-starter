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
            allShelfs: ['move', 'currentlyReading', 'wantToRead', 'read', 'none']
        };
    }

    doChangeShelf = (event) => {
        const { onChange } = this.props;
        const newShelf = event.target.value;

        BooksAPI
        .update(this.state.book, newShelf)
        .then((newShelf) => {
            this.setState({ currentShelf: newShelf })
            // onChange && onChange(newShelf);
        })

        console.log(this.state.book.shelf)

    }

    info = () => {
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
    onChange: propTypes.func
}

export default ShelfChanger;
