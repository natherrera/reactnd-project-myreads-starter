import React from 'react';
import {Route} from 'react-router-dom';
import './resources/css/App.css';
import * as BooksAPI from './library/BooksAPI';
import LibraryContainer from './containers/LibraryContainer';
import SearchContainer from './containers/SearchContainer';


class BooksApp extends React.Component {

    state = {
        bookShelfs: [
            'Currently Reading', 'Want to Read', 'Read'
        ],
        allBooks: [],
        query: '',
        booksSearched: []
    }

    refreshLibrary() {
        BooksAPI.getAll().then((allBooks) => {
            this.setState({...allBooks, allBooks})
        })
    }

    onBookChange = (book, previousShelf, newShelf) => {

        BooksAPI.update(book, newShelf);

    }


    onQuery = (query) =>
    {
        // console.log(this.state.allBooks);
        // Empty query handling.
        if (query === '') return this.setState({ query });

        BooksAPI
            .search(query)
            .then((response) =>
            {
                if (response.error)
                {
                    this.setState({ query, booksSearched: [] });
                }
                else
                {
                    // Gets shelf from each book in shelves in a dictionary.
                    debugger;
                    const shelves = this.state.allBooks.toDictionary((b) => b.id, (b) => b.shelf);
                    // Appends 'shelf' to searched books with matching id.
                    response
                        .forEach((b) =>
                        {
                            b.shelf = shelves[b.id] || 'none';
                            b.fromSearching = true;
                        });

                    this.setState({ query, booksSearched: response });
                }
            });
    }

    render() {

        this.refreshLibrary();

        return (
            <div className="app">
                <Route path='/search'
                    render={
                        () => (
                            <SearchContainer
                                onBookChange={
                                    this.onBookChange
                                }
                                allBooks={
                                    this.state.allBooks
                                }
                                onQuery={this.onQuery}
                            />
                        )
                    }/>
                <Route exact path='/'
                    render={
                        () => (
                            <LibraryContainer onBookChange={
                                this.onBookChange
                            }/>
                        )
                    }/>
            </div>
        )
    }
}


export default BooksApp;
