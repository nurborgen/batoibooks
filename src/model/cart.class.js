import BooksRepository from "../repositories/books.repository"
import Book from "./book.class"

export default class Cart {
    constructor () {
        this.data = []
    }

    populateData() {

    }

    getBookByID(id) {
        const book = booksRepository.getBookByID(id)
        if(this.data.find(book)) {
            return book
        } else {
            return {}
        }
    }

    addItem(book) {
        
        if(!this.getBookByID(book.id)) {
            const bookCopy = new Book(book);
            this.data.push(bookCopy)
        } else {
            throw new Error("Este libro ya está guardado.")
        }
    }

    removeItem(id) {
        const item = booksRepository.getBookByID(id)
        if(!this.getBookByID(id)) {
            this.data.removeItem(item)
        } else {
            throw new Error("El libro no se encuentra en el carrito, no se puede eliminar.")
        }
    }

    toString() {
        this.data.forEach(book => {
            book.toString
        });
    }
}