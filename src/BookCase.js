import React, { Component } from 'react';
import BookCaseShelves from './BookCaseShelves';
class BookCase extends Component {
    render() {
        return (
            <div className="list-books-content">
                <div>
                    <BookCaseShelves books={this.props.books} />
                </div>
            </div>
        );
    }
}

export default BookCase;
