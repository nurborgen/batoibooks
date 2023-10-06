import Book from "./book.class"

export default class Books {
    constructor () {
        this.data = []
    }


    booksFromModule(module) {
        return this.data.filter(books => books.idModule == module) 
    }

    booksFromUser(number) {
        return this.data.filter(books => books.idUser == number)
    }

    booksCheeperThan(number) {
        return this.data.filter(books => books.price <= number) 
    }

    booksWithStatus(status) {
        return this.data.filter(books => books.status == status) 
    }
    
    averagePriceOfBooks() {
        if(this.data.lenght <= 0) {
          return 0.00.toFixed(2) + ' €'
        }
        return this.data.reduce((total, books) => total += books.price)/array.lenght
    }

    booksOfTypeNote() {
        return this.data.filter(books => books.publisher == "Apunts")
    }

    booksNotOfTypeNote() {
        return this.data.filter(books => books.publisher != "Apunts")
    }

    booksNotSold() {
        return this.data.filter(books => books.soldDate == "")
    }

    incrementPriceOfbooks(number) {
        if(this.data.lenght <= 0) {
          return NaN
        }
        this.data = this.data.map((book) => {
            const updatedBook = { ...book }; 
            updatedBook.price *= (1 + number); 
            return updatedBook.toFixed(1); 
        });
    }

    booksFromUser(userId) {
        const filteredBooks = new Books()
        filteredBooks.data = this.data.filter((item) => item.idUser === userId)
        return filteredBooks
    }

    populateData(array) {
        this.data = array.map(arrayData => new Book(arrayData));
    }

    addItem(object) {
        object.id = this.getNewId()
        let book = new Book(object)
        this.data.push(book)
        return book
    }

    getNewId() {
        if(this.data.length === 0) {
            return 1
        }
        return this.data.reduce((max, user) => user.id > max ? user.id : max, 0) + 1
    }

    removeItem(item) {
        let index = this.data.findIndex(user => user.id === item)
        if(index === -1) {
            throw 'El libro con el id ' + item + ' no existe'
        }
        this.data.splice(index, 1)
        return {}
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
}