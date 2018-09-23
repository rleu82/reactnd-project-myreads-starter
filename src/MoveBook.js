import React, { Component } from 'react';

class MoveBook extends Component {
    // BooksAPI.update(book, shelf)
    // Decided to use the method on App.js page and pass the props down
    // because this.state.books would need to be updated on app page.

    render() {
        return (
            <div className="book-shelf-changer">
                <select
                    onChange={event => this.props.moveBook(this.props.book, event.target.value)}
                    value={this.props.shelf}
                >
                    <option value="move" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        );
    }
}
export default MoveBook;
