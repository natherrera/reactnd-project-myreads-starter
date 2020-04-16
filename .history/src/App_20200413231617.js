import React from 'react';
import {Route} from 'react-router-dom';
import './resources/css/App.css';
import * as BooksAPI from './library/BooksAPI';
import LibraryContainer from './containers/LibraryContainer';
import SearchContainer from './containers/SearchContainer';
import 'linqjs';

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
        BooksAPI
            .getAll()
            .then((allBooks) =>
            {
                this.setState({ allBooks });
            });
    }

    onBookChange = (book, current, newShelf) => {
        console.log(book);
        const { allBooks, booksSearched } = this.state;
        this.updateBook(allBooks, book.id, newShelf);
        this.updateBook(booksSearched, book.id, newShelf);
        console.log(book);
        if (book.fromSearching && current === 'none')
        {
            this.addBook(book);
            console.log('no existe');
        }
        else
        {
            console.log('de la libreria');
            this.moveBook(book);
        }
    }

    addBook = (book) => {
        // const { allBooks, booksSearched } = this.state;
        // this.updateBook(allBooks, book.id, shelf);
        // this.updateBook(booksSearched, book.id, shelf);
        this.setState((currentState) => ({ allBooks: [ ...currentState.allBooks, book ] }));
    }

    moveBook = (book) => {
        const { allBooks, booksSearched } = this.state;
        // this.updateBook(allBooks, book.id, shelf);
        // this.updateBook(booksSearched, book.id, shelf);
        // console.log(book);
        // this.setState((currentState) => ({ allBooks: [ ...currentState.allBooks, book ] }));
        this.setState({
            allBooks: [ ...allBooks.where((b) => b.id !== book.id || book.shelf !== 'none') ],
            booksSearched: [ ...booksSearched ]
        });
    }

    updateBook = (books, bookId, shelf) => {
        let book = books
        .first((b) => b.id === bookId);

        if (book)
        {
            book.shelf = shelf;
        }
    }


    onSearch = (query) =>
    {
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


                    const shelfs = this.state.allBooks.toDictionary((b) => b.id, (b) => b.shelf);
                    // console.log(shelfs);
                    response
                        .forEach((b) =>
                        {
                            b.shelf = shelfs[b.id] || 'none';
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
                                    this.state.booksSearched
                                }
                                onSearch={this.onSearch}
                                query={this.state.query}
                            />
                        )
                    }/>
                <Route exact path='/'
                    render={
                        () => (
                            <LibraryContainer
                                onBookChange={
                                    this.onBookChange
                                }
                                allBooks={
                                    this.state.allBooks
                                }
                            />
                        )
                    }/>
            </div>
        )
    }
}


export default BooksApp;
