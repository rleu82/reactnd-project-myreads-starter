import React, { Component } from 'react';
import Book from './Book';

class BookCaseShelves extends Component {
    render() {
        const { moveBook, books } = this.props;

        // Filter the books and for each book check if their book.shelf === shelf (ie: currentlyReading, wantToRead, read)
        let sortBooks = shelf => {
            return books.filter(book => book.shelf === shelf);
        };

        return (
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {/* sort books by currentlyReading then map to create new array with these books and list them*/}
                            {sortBooks('currentlyReading').map(book => {
                                return (
                                    <li key={book.id}>
                                        <Book book={book} shelf={'currentlyReading'} moveBook={moveBook} />
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {/* sort books by wantToRead then map to create new array with these books and list them*/}
                            {sortBooks('wantToRead').map(book => {
                                return (
                                    <li key={book.id}>
                                        <Book book={book} shelf={'wantToRead'} moveBook={moveBook} />
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {/* sort books by read then map to create new array with these books and list them*/}
                            {sortBooks('read').map(book => {
                                return (
                                    <li key={book.id}>
                                        <Book book={book} shelf={'read'} moveBook={moveBook} />
                                    </li>
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCaseShelves;
