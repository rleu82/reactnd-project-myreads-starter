## Notes jotted down as I go about project:

1. There are three sections or bookshelves that the books are sorted in: Currently Reading, Want to Read and Read
2. Books display cover, title, author
3. There is a select option for each book and when property is changed the book needs to be moved to different section or bookshelf. This should change the state or update the shelf this books resides in.
4. A search page is needed

### Things I might need:

1. Focus on refactoring the app.js page first into different components.
2. Components I might need: the whole app itslef would be a bookcase, within it lies three shelves, from there we have the book, within the book have the select option component to change it's shelf. Also include a search component.
3. Shelf might be able to be broken down to 3 separate components. One for each shelf. Have to see how or it that would be needed
4. Books would need to be pulled in using BooksAPI.js and update their property the same way. Going to the BooksAPI I can use:
    - get (bookId)
    - getAll ()
    - update (book, shelf)
    - search (query)
5. App.js is the bookcase and it renders:
    - a sections or shelf component
    - a book component
    - a options select component
    - search component
6. Refactor app.js into the components
7. ...add more notes here as I go about project if needed.

### Things I might need after:

1. Create routers with react-router-dom
2. propTypes from prop-types
3. Maybe escape-string-regexp and sort-by?ß

### Random notes

1. Bookcase should be a page itself and search is a page itself
