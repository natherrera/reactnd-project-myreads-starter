import React from 'react';
import {Route} from 'react-router-dom';
import './resources/css/App.css';
import * as BooksAPI from './library/BooksAPI';
import LibraryContainer from './containers/LibraryContainer';
import SearchContainer from './containers/SearchContainer';


class BooksApp extends React.Component() {

    state = {
        bookShelfs: [
            'Currently Reading', 'Want to Read', 'Read'
        ],
        allBooks: [],
        query: ''
    }

    componentDidMount() {
        BooksAPI.getAll().then((allBooks) => {
            this.setState({allBooks});
        });
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
            books: [
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
                                query={query}
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
