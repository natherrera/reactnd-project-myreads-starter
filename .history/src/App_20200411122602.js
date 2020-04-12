import React , { useState } from 'react'
import {Route} from 'react-router-dom'
import './resources/css/App.css'

import LibraryContainer from './containers/LibraryContainer'
import SearchContainer from './containers/SearchContainer'


function BooksApp() {

    return (
        <div className="app">
            <Route path='/search'
                render={
                    () => (
                        <SearchContainer/>)
                }/>
            <Route exact path='/'
                render={
                    () => (
                        <LibraryContainer/>)
                }/>
        </div>
    )
}

export default BooksApp
