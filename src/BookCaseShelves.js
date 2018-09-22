import React, { Component } from 'react';
import Book from './Book';

class BookCaseShelves extends Component {
    // Refernce: The shelf(key) that the book is placed in is listed under shelf. Use book.shelf to categorize book.
    // Mozilla example: words.filter(word => word.length > 6).
    // Filter the books and for each book check if their book.shelf === shelf (ie: currentlyReading, wantToRead, read)
    sortBooks = shelf => {
        this.props.books.filter(book => book.shelf === shelf);
    };
    render() {
        return (
            <div className="list-books-content">
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
