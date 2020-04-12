import React from 'react';
import propTypes from 'prop-types';
import * as BooksAPI from '../library/BooksAPI';
import Book from '../components/Book';
import SearchBar from '../components/SearchBar';

class SearchContainer extends React.Component {


    constructor(props)
    {
        const { query = '' } = props;

        super(props);

        this.state = {
            query: query,
            booksSearched: [],
        };
    }

    onSearch = (query) => {

        if (query === '') {
            this.setState({ query });

            return;
        }

        BooksAPI
            .search(query)
            .then((response) => {
                if (response.error) {
                    this.setState({ query, booksSearched: [] });
                }
                else {
                    this.setState({ query, booksSearched: response });
                }
            });
    }

    render() {
        const { query, onBookChange } = this.props
        return (
            <div>
                <div className="search-books">

                    <SearchBar
                        query={this.state.query}
                        onChange={this.onSearch}
                    ></SearchBar>

                    <div className="search-books-results">
                        {this.state.booksSearched && query !== '' && (
                            <ol className='books-grid'>
                                {
                                    this.state.booksSearched
                                        .map((book) => (
                                            <li key={book.id}>
                                                <Book book={book} onBookChange={onBookChange} />
                                            </li>
                                        ))
                                }
                            </ol>
                        )}

                        {query !== '' && (
                            <div className='books-grid'>
                                <label className='books-grid-no-results'>
                                    <span>Search a book</span>
                                </label>
                            </div>
                        )}
                        {this.state.booksSearched === [] && (
                            <div className='books-grid'>
                                <label className='books-grid-no-results'>
                                    <span>No results for <i>{query}</i>!</span>
                                </label>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

SearchContainer.propTypes = {
    onBookChange: propTypes.func,
    query: propTypes.string
}

export default SearchContainer;
