import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookCase from './BookCase';
import BookSearch from './Search';

class BooksApp extends React.Component {
    state = {
        books: [],
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false
    };

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books });
            console.log(this.state.books);
        });
    }
    // function for child component to open close search page
    closeSearch = e => {
        e.preventDefault();
        this.setState({ showSearchPage: false });
    };

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <BookSearch closesSearch={this.closeSearch} />
                ) : (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <BookCase books={this.state.books} />
                        <div className="open-search">
                            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default BooksApp;
