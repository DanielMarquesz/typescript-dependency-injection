class BookService {

  books = [
    { id: 1, name: 'The Pragmatic Programmer' },
    { id: 2, name: 'Poems that Solve Puzzles' },
  ];

  getBooks() {
    return this.books;
  }
}

export default BookService;
