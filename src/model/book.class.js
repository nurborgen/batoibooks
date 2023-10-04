export default class Book {
    constructor(id, idUser, idModule, publisher, price, pages, status, photo, comments, soldDate) {
        this.id = id
        this.idUser = idUser
        this.idModule = idModule
        this.publisher = publisher
        this.price = price
        this.pages = pages
        this.status = status
        this.photo = photo
        this.comments = comments
        this.soldDate = soldDate
    }

    booksFromModule(books, module) {
        return books.filter(books => books.idModule == module) 
    }

    booksFromUser(books, number) {
        return books.filter(books => books.idUser == number)
    }

    booksCheeperThan(books, number) {
        return books.filter(books => books.price <= number) 
    }

    booksWithStatus(books, status) {
        return books.filter(books => books.status == status) 
    }
    
    averagePriceOfBooks(books) {
        if(array.lenght <= 0) {
          return 0.00.toFixed(2) + ' €'
        }
        return array.reduce((total, books) => total += books.price)/array.lenght
    }

    booksOfTypeNote(books) {
        return books.filter(books => books.publisher == "Apunts")
    }

    booksNotOfTypeNote(books) {
        return books.filter(books => books.publisher != "Apunts")
    }

    booksNotSold(books) {
        return books.filter(books => books.soldDate == "")
    }

    incrementPriceOfbooks(books, number) {
        if(array.lenght <= 0) {
          return NaN
        }
        books.map((books) => books.price + books.price * number)
    }


}

