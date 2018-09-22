import React, { Component } from 'react';
import BookCaseShelves from './BookCaseShelves';
import SearchButton from './SearchButton';

class BookCase extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <BookCaseShelves books={this.props.books} />
                <SearchButton openSearch={this.props.openSearch} />
            </div>
        );
    }
}

export default BookCase;
