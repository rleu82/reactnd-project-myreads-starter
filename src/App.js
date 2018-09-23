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

    // Get all books stored
    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books });
            console.log(this.state.books);
        });
    }

    // Update using update method and refresh this.state.books array
    moveBook = (book, shelf) => {
        BooksAPI.update(book, shelf);
        BooksAPI.getAll().then(books => {
            this.setState({ books });
            console.log(this.state.books);
        });
    };
    // functions for child component to open close search page
    closeSearch = e => {
        e.preventDefault();
        this.setState({ showSearchPage: false });
    };
    openSearch = e => {
        e.preventDefault();
        this.setState({ showSearchPage: true });
    };

    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <BookSearch closesSearch={this.closeSearch} books={this.state.books} moveBook={this.moveBook} />
                ) : (
                    <BookCase books={this.state.books} openSearch={this.openSearch} moveBook={this.moveBook} />
                )}
            </div>
        );
    }
}

export default BooksApp;
