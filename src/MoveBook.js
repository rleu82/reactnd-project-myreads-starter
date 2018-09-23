import React, { Component } from 'react';

class MoveBook extends Component {
    render() {
        const { moveBook, book, shelf } = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange={event => moveBook(book, event.target.value)} value={shelf}>
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
