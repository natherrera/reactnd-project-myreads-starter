import React from 'react';
import propTypes from 'prop-types';
import Book from '../components/Book';
import SearchBar from '../components/SearchBar';

class SearchContainer extends React.Component {

    render() {
        const { query, onBookChange, onSearch, allBooks } = this.props;
        return (
            <div>
                <div className="search-books">

                    <SearchBar
                        query={query}
                        onSearch={onSearch}
                    ></SearchBar>

                    <div className="search-books-results">
                        {allBooks && query !== '' && (
                            <ol className='books-grid'>
                                {
                                    allBooks
                                        .map((book) => (
                                                <Book key={book.id} book={book} onBookChange={onBookChange} />
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
                        {allBooks === [] && (
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
    onQuery: propTypes.func,
    newLibrary: propTypes.func
}

export default SearchContainer;
