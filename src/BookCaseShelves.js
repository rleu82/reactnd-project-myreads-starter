import React, { Component } from 'react';
import Book from './Book';

class BookCaseShelves extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map(book => {
                            return <Book book={book} />;
                        })}
                    </ol>
                </div>
            </div>
        );
    }
}

export default BookCaseShelves;
