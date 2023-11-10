import BooksRepository from "../repositories/books.repository"
import Book from "./book.class"

export default class Books {
    constructor () {
        this.data = []
    }

    async changeBook(book) {
        const booksRepository = new BooksRepository()
        const object = await booksRepository.changeBooks(book)
        const newBook = new Book(object)
        const index = this.data.findIndex(llibre => llibre.id == book.id)
        this.data.splice(index,1,newBook)
        return newBook
    }

    async addItem(object) {
        const booksRepository = new BooksRepository()
        const newBook = await booksRepository.addBooks(object)
        let book = new Book(newBook)
        this.data.push(book)
        return book
    }

    booksFromModule(module) {
        let result = new Books
        result.data = this.data.filter(books => books.idModule == module) 
        return result
    }

    booksFromUser(number) {
        let result = new Books
        result.data = this.data.filter(books => books.idUser == number)
        return result
    }

    booksCheeperThan(number) {
        let result = new Books
        result.data = this.data.filter(books => books.price <= number) 
        return result
    }

    booksWithStatus(status) {
        let result = new Books
        result.data = this.data.filter(books => books.status == status) 
        return result
    }
    
    averagePriceOfBooks() {
        let result = new Books
        
        if(this.data.lenght <= 0) {
          return 0.00.toFixed(2) + ' €'
        }
        result.data = this.data.reduce((total, books) => total += books.price)/array.lenght
        return result
    }

    booksOfTypeNote() {
        let result = new Books
        result.data = this.data.filter(books => books.publisher == "Apunts")
        return result
    }

    booksNotOfTypeNote() {
        let result = new Books
        result.data = this.data.filter(books => books.publisher != "Apunts")
        return result
    }

    booksNotSold() {
        let result = new Books
        result.data = this.data.filter(books => books.soldDate == "")
        return result
    }

    incrementPriceOfbooks(number) {
        if(this.data.lenght <= 0) {
          return NaN
        }
        this.data = this.data.map((book) => {
            const updatedBook = { ...book }; 
            updatedBook.price *= (1 + number).toFixed(1); 
            return updatedBook; 
        });
    }

    booksFromUser(userId) {
        const filteredBooks = new Books()
        filteredBooks.data = this.data.filter((item) => item.idUser === userId)
        return filteredBooks
    }

    async populateData() {
        const booksRepository =  new BooksRepository()
        const array = await booksRepository.getAllBooks()
        this.data = array
    }

    

    async removeBook(book) {
        const booksRepository = new BooksRepository()
        return await booksRepository.removeBooks(book.id)
    }

    toString() {
        if (this.data.length === 0) {
            return "No hay libros en la lista.";
        }

        const bookStrings = this.data.map((book) => {
            return `    - ${book.idModule}. Editorial: ${book.publisher}. ${book.pages} páginas. ${book.price.toFixed(2)} €.`;
        });

        return `Libros (total ${this.data.length})\n${bookStrings.join('\n')}`;
    }

    booksCheeperThan(precio) {
        const filteredBooks = new Books()
        filteredBooks.data = this.data.filter(book => book.price <= precio);
        return filteredBooks
    }

    async getBookById(id) {
        const booksRepository = new BooksRepository()
        const book = await booksRepository.getBooksById(id)
        return new Book(book)
    }
}