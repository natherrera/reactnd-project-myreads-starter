import React, {useState} from 'react'
import {Route} from 'react-router-dom'
import './resources/css/App.css'

import LibraryContainer from './containers/LibraryContainer'
import SearchContainer from './containers/SearchContainer'


function BooksApp() {

    // const [state, setState] = useState({allBooks: ''});

    function changeComponent(e) {
      console.log(e);
    }

    return (
        <div className="app">
            <Route path='/search'
                render={
                    () => (
                        <SearchContainer onChange={changeComponent($event)}/>)
                }/>
            <Route exact path='/'
                render={
                    () => (
                        <LibraryContainer onChange={changeComponent($event)}/>)
                }/>
        </div>
    )
}

export default BooksApp
