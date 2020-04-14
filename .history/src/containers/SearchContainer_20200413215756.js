import React from 'react';
import propTypes from 'prop-types';
import * as BooksAPI from '../library/BooksAPI';
import Book from '../components/Book';
import SearchBar from '../components/SearchBar';

class SearchContainer extends React.Component {

    state = {
        query: '',
        booksSearched: [],
    };


    // onSearch = (query) => {

    //     const { newLibrary }  = this.props;
    //     if (query === '') {
    //         this.setState({ query });
    //         return;
    //     }

    //     BooksAPI
    //         .search(query)
    //         .then((response) => {
    //             if (response.error) {
    //                 this.setState({ query, booksSearched: [] });
    //             }
    //             else {
    //                 this.setState({ query, booksSearched: response });
    //                 newLibrary && newLibrary(this.state.booksSearched);
    //             }
    //         });
    // }

    render() {
        const { query, onBookChange, onQuery, allBooks } = this.props
        return (
            <div>
                <div className="search-books">

                    <SearchBar
                        query={this.state.query}
                        onChange={this.onSearch}
                        onQuery={onQuery}
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
    onQuery: propTypes.func,
    newLibrary: propTypes.func
}

export default SearchContainer;
