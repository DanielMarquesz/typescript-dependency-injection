import BookRepository from "./BookRepository";

export default class BookService {
  bookRepository: BookRepository

  constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository
  }

  getBooks() {
    return this.bookRepository.getBooks();
  }
}
