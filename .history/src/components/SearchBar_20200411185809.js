import React, { Component } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'


class SearchBar extends Component {

    constructor(props) {
        super(props);

        const { query } = this.props

        this.state = {
            value: query
        };
    }

    onSearchChange = (event) => {
        this.setState({ value: event.target.value });
        const { onChange, onQuery } = this.props;
        onChange && onChange(this.state.value);
        onQuery && onQuery(this.state.value);
    }

    render() {
        return (
            <div className="search-books-bar">
                <Link
                    to='/'
                    className="close-search"
                >
                    Close
                </Link>

                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.value}
                        onChange={this.onSearchChange}
                    />
                </div>
            </div>
        )
    }
}

SearchBar.propTypes = {
    delay: propTypes.number,
    onChange: propTypes.func.isRequired,
    query: propTypes.string,
    onQuery: propTypes.func
}

export default SearchBar;
