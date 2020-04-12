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

    componentDidMount() {

        BooksAPI.getAll().then((allBooks) => {
            this.setState({ allBooks });
        });

    console.log(this.state.allBooks);
    }

    onBookChange(book, previousShelf, newShelf) {
        book.shelf = newShelf;

        if (book.fromSearching && previousShelf === 'none') {
            this.addBook(book);
        } else {
            this.moveBook(book);
        }
    }

    addBook = (book) => {
        this.setState((currentState) => ({
            allBooks: [
                ...currentState.books,
                book
            ]
        }));
    }

    moveBook = (book) => {
        const {allBooks, booksSearched} = this.state;

        this.updateBook(allBooks, book.id, book.shelf);
        this.updateBook(booksSearched, book.id, book.shelf);

        this.setState({
            allBooks: [...allBooks.where((b) => b.id !== book.id || book.shelf !== 'none')],
            booksSearched: [...booksSearched]
        });
    }

    updateBook = (books, bookId, shelf) => { // Search for current book in collection.
        let book = books.first((b) => b.id === bookId);

        if (book) { // Updates book shelf.
            book.shelf = shelf;
        }
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
