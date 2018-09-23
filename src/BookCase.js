import React, { Component } from 'react';
import BookCaseShelves from './BookCaseShelves';
import SearchButton from './SearchButton';

class BookCase extends Component {
    render() {
        const { moveBook, books } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <BookCaseShelves books={books} moveBook={moveBook} />
                <SearchButton />
            </div>
        );
    }
}

export default BookCase;
