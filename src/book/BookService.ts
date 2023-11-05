import { autoInjectable } from "tsyringe";
import BookRepository from "./BookRepository";

@autoInjectable()
export default class BookService {
  bookRepository: BookRepository

  constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository
  }

  getBooks() {
    const books = this.bookRepository.getBooks();
    if(!books || !books.length) {
      throw new Error("Books not found!")
    }
    return books
  }
}
