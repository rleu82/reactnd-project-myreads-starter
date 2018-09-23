import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';

class BookSearch extends Component {
    state = {
        query: '',
        booksFound: []
    };

    updateQuery = query => {
        this.setState({ query: query });
        this.queryResults(query);
    };

    queryResults = query => {
        if (query) {
            BooksAPI.search(query).then(booksFound => {
                booksFound.error ? this.setState({ booksFound: [] }) : this.setState({ booksFound });
            });
            console.log(this.state.booksFound);
        } else {
            this.setState({ booksFound: [] });
        }
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="./" className="close-search">
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={event => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {/* Map the booksFound query results and check if book already has a shelf.
                            Map through this.state.books(your library) to see if the books is already on a shelf in your library.
                            If true then set the shelf to the current shelf the book resides in. If not in
                            your library, set the shelf to none and list the query results
                        */}
                        {this.state.booksFound.map(bookFound => {
                            let currentShelf = 'none';
                            this.props.books.map(
                                currentBooks =>
                                    currentBooks.id === bookFound.id ? (currentShelf = currentBooks.shelf) : ''
                            );
                            return (
                                <li key={bookFound.id}>
                                    <Book book={bookFound} shelf={currentShelf} moveBook={this.props.moveBook} />
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookSearch;
