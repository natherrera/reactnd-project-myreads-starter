import React, {useState} from 'react'
import {Route} from 'react-router-dom'
import './resources/css/App.css'

import LibraryContainer from './containers/LibraryContainer'
import SearchContainer from './containers/SearchContainer'


function BooksApp() {

    const [state, setState] = useState({allBooks: ''});

    changeComponent = () => {
      console.log('cambgio una wea');
    }

    return (
        <div className="app">
            <Route path='/search'
                render={
                    () => (
                        <SearchContainer onChange={this.changeComponent}/>)
                }/>
            <Route exact path='/'
                render={
                    () => (
                        <LibraryContainer onChange={this.changeComponent}/>)
                }/>
        </div>
    )
}

export default BooksApp
