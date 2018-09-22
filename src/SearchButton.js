import React, { Component } from 'react';

class SearchButton extends Component {
    render() {
        return (
            <div className="open-search">
                <a onClick={this.props.openSearch}>Add a book</a>
            </div>
        );
    }
}
export default SearchButton;
