import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookCase from './BookCase';
import BookSearch from './Search';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
    state = {
        books: []
    };

    // Get all books stored
    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books: books });
        });
    }

    // Used to update books array
    updateBooks() {
        BooksAPI.getAll().then(books => {
            this.setState({ books: books });
        });
    }

    // Update book location and update the books in the state
    moveBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => this.updateBooks());
    };

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => <BookCase books={this.state.books} moveBook={this.moveBook} />} />
                <Route
                    exact
                    path="/Search"
                    render={() => <BookSearch books={this.state.books} moveBook={this.moveBook} />}
                />
            </div>
        );
    }
}

export default BooksApp;
