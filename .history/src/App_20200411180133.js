import React, { useState, useEffect }  from 'react';
import {Route} from 'react-router-dom';
import './resources/css/App.css';
import * as BooksAPI from '../library/BooksAPI';
import LibraryContainer from './containers/LibraryContainer';
import SearchContainer from './containers/SearchContainer';


function BooksApp() {



  useEffect(() => {
    const [setState] = useState({
      allBooks: []
    });
    BooksAPI
    .getAll()
    .then((allBooks) => {
        setState({ allBooks })
    })
  });

  function onBookChange(book, previousShelf, newShelf)
  {
      // book.shelf = newShelf;

      // if (book.fromSearching && previousShelf === 'none')
      // {
      //     this.addBook(book);
      // }
      // else
      // {
      //     this.moveBook(book);
      // }

      BooksAPI
        .update(book, newShelf);
  }

  function addBook() {

  }

  function moveBook() {

  }

    return (
        <div className="app">
            <Route path='/search'
                render={
                    () => (
                        <SearchContainer
                          onBookChange={onBookChange}
                        />)
                }/>
            <Route exact path='/'
                render={
                    () => (
                        <LibraryContainer
                          onBookChange={onBookChange}
                        />)
                }/>
        </div>
    )
}

export default BooksApp
