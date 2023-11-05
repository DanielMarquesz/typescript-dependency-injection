import "reflect-metadata"
import BookController from '../../src/book/BookController';
import BookService from '../../src/book/BookService';
import BookRepository from '../../src/book/BookRepository';
import { container } from "tsyringe";

jest.mock('../../src/book/BookRepository')
jest.mock('../../src/book/BookService')

describe('BookController >', () => {
  // const bookRepositoryMock = jest.mocked(BookRepository)
  // const bookServiceMock = jest.mocked(BookService);
  let bookService: BookService;

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Should return the books without errors', () => {
    // Arrange
    BookService.prototype.getBooks = jest.fn().mockReturnValue(
      [
        {
        id: 1,
        name: "name-mock"
        }
      ]
    )
    // Act
    const bookController = container.resolve(BookController)    
    const result = bookController.getBooksRoute()

    // Assert
    expect(BookService.prototype.getBooks).toHaveBeenCalledTimes(1)
    expect(BookService.prototype.getBooks).toHaveBeenCalledWith()
    expect(result).toStrictEqual([{"id": 1, "name": "name-mock"}])
  });

  // TODO ERROR CASE

  // it('Should throw error when books not found', () => {
  //   // Arrange
  //   BookService.prototype.getBooks = () => { throw new Error() }

  //   // Act
  //   const bookController = container.resolve(BookController)    
  //   expect(bookController.getBooksRoute()).toThrow(Error)

  //   // Assert
  //   expect(BookService.prototype.getBooks).toHaveBeenCalledTimes(1)
  //   expect(BookService.prototype.getBooks).toHaveBeenCalledWith()
  //   // expect(result).toStrictEqual([{"id": 1, "name": "name-mock"}])
  // });

});
