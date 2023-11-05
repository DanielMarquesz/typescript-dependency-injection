import 'reflect-metadata'
import { container } from 'tsyringe'
import express from 'express';
import BookController from './book/BookController';
// import BookService from './book/BookService';
// import BookRepository from './book/BookRepository';
const port = process.env.port || 5000;

const app = express();

// const bookRepository = new BookRepository()
// const bookService = new BookService(bookRepository);
// const bookController = new BookController(bookService);

const bookController = container.resolve(BookController)

app.use('/books', bookController.routes());
app.listen(port, () => console.log(`listening on port: ${port}`));
