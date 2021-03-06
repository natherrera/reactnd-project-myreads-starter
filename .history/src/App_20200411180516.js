import React, {useState, useEffect} from 'react';
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
        allBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({allBooks});
        });
    }

    onBookChange(book, newShelf) {
        // book.shelf = newShelf;

        // if (book.fromSearching && previousShelf === 'none')
        // {
        //     this.addBook(book);
        // }
        // else
        // {
        //     this.moveBook(book);
        // }

        BooksAPI.update(book, newShelf);
    }

    addBook() {}

    moveBook() {}

    render() {
        return (
            <div className="app">
                <Route path='/search'
                    render={
                        () => (
                            <SearchContainer onBookChange={onBookChange}/>
                        )
                    }/>
                <Route exact path='/'
                    render={
                        () => (
                            <LibraryContainer onBookChange={onBookChange}/>
                        )
                    }/>
            </div>
        )
    }
}


export default BooksApp;
