import React, { Component } from 'react';
import Book from './Book';

class BookCaseShelves extends Component {
    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map(book => (
                                // fixed key error by using id 'https://reactjs.org/docs/lists-and-keys.html#keys'
                                <li key={book.id}>
                                    <Book book={book} />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map(book => (
                                <li key={book.id}>
                                    <Book book={book} />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map(book => (
                                <li key={book.id}>
                                    <Book book={book} />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default BookCaseShelves;
