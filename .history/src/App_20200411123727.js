import React, {useState} from 'react'
import {Route} from 'react-router-dom'
import './resources/css/App.css'

import LibraryContainer from './containers/LibraryContainer'
import SearchContainer from './containers/SearchContainer'


const BooksApp = () => {

    const [state, setState] = useState({allBooks: ''});

    const changeComponent = () => {
      console.log('cambgio una wea');
    }

    return (
        <div className="app">
            <Route path='/search'
                render={
                    () => (
                        <SearchContainer onChange={changeComponent()}/>)
                }/>
            <Route exact path='/'
                render={
                    () => (
                        <LibraryContainer onChange={changeComponent()}/>)
                }/>
        </div>
    )
}

export default BooksApp
