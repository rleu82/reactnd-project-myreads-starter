import React, { Component } from 'react';
import MoveBook from './MoveBook';

class Book extends Component {
    render() {
        const { moveBook, book, shelf } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            // ternary operator: (condition) ? expression on true : expression on false
                            // check for imageLinks key on object, if true grab thumbnail, if not true ':' display nothing
                            backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`
                        }}
                    />
                    <MoveBook shelf={shelf} book={book} moveBook={moveBook} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        );
    }
}

export default Book;
