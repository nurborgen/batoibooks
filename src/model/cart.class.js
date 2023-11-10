import BooksRepository from "../repositories/books.repository"
import Book from "./book.class"

export default class Cart {
    constructor () {
        this.data = []
    }

    populateData() {

    }

    getBookById(id) {
        return this.data.find(book => book.id === id) || {}
    }

    addItem(book) {
        const exist = this.getBookById(book.id)
        if(!exist.id) {
            const bookCopy = new Book(book);
            this.data.push(bookCopy)
        } else {
            throw new Error("Este libro ya está guardado.")
        }
    }

    async removeItem(id) {
        const item = await this.getBookById(id)
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