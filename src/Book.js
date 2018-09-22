import React, { Component } from 'react';
import MoveBook from './MoveBook';

class Book extends Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            // For my reference ternary operator: (condition) ? expression on true : expression on false
                            // check for imageLinks key on object, if true grab thumbnail, if not true ':' display nothing
                            backgroundImage: `url(${
                                this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''
                            })`
                        }}
                    />
                    <MoveBook />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        );
    }
}

export default Book;
