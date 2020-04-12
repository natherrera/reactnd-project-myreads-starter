import React, {useState} from 'react'
import {Route} from 'react-router-dom'
import './resources/css/App.css'

import LibraryContainer from './containers/LibraryContainer'
import SearchContainer from './containers/SearchContainer'


function BooksApp() {

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
      console.log(book, previousShelf, newShelf)
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
