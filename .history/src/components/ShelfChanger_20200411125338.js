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
            book: currentShelf
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


    }

    info = () => {
        // console.log(this.state.book)
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
