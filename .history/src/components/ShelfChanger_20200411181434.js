import React, { Component } from 'react'
import propTypes from 'prop-types'


class ShelfChanger extends Component {

    constructor(props) {
        super(props);

        const { currentShelf } = this.props

        this.state = {
            currentShelf: currentShelf.shelf,
            newShelf: '',
            book: currentShelf,

        };
    }

    doChangeShelf = (event) => {
        const { onBookChange } = this.props;
        const newShelf = event.target.value;

        this.setState({ currentShelf: newShelf });
        onBookChange && onBookChange(this.state.book, this.state.currentShelf, newShelf);

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
