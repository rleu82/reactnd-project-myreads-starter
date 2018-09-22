import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

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

    sortBooksFound = shelf => {
        return this.state.booksFound.filter(book => book.shelf === shelf);
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={this.props.closesSearch}>
                        Close
                    </a>
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
                        {this.state.booksFound.map(filteredBook => {
                            return (
                                <li key={filteredBook.id}>
                                    <Book book={filteredBook} />
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
