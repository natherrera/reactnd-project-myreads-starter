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
        BooksAPI
            .getAll()
            .then((allBooks) =>
            {
                this.setState({ allBooks });
            });
    }

    onBookChange = (book, current, newShelf) => {
        console.log('Component: app.js ', book, current, newShelf);
    }


    onQuery = (query) =>
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


                    const shelfs = this.state.allBooks.map([{'id': b.id, 'shelf': b.shelf}]);
                    console.log(shelfs);

                    // response.forEach(el => {
                    //     console.log(el);
                    //     el.shelf = 'none';
                    // });
                    // response
                    //     .forEach((b) =>
                    //     {
                    //         b.shelf = shelves[b.id] || 'none';
                    //         b.fromSearching = true;
                    //     });

                    // this.setState({ query, booksSearched: response });
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
