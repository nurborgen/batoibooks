export default class BooksRepository {
    constructor() {
        this.SERVER = import.meta.env.VITE_URL_API
    }

    async getAllBooks() {
        const response = await fetch(this.SERVER + '/books')
        if(!response.ok) {
            throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
        }
        const books = await response.json()
        return books
    }

    async getBooksById(id) {
        const response = await fetch(this.SERVER + '/books/' + id)
        if(!response.ok) {
            throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
        }
        const book = await response.json()
        return book
    }

    async addBooks(book) {
        const response = await fetch(this.SERVER + '/books', {
            method: 'POST',
            body: JSON.stringify({
                id: book.id,
                idUser: book.idUser,
                idModule: book.idModule,
                publisher: book.publisher,
                price: book.price,
                pages: book.pages,
                status: book.status,
                photo: book.photo,
                comments: book.comments,
                soldDate: book.soldDate,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        if (!response.ok) {
            throw `Error ${response.status} en la API: ${response.statusText}`
        }
        const myData = await response.json()
        return myData
    }

    async removeBooks(id) {
        const response = await fetch(this.SERVER + '/books/' + id, {
            method: 'DELETE',
        })
        if(!response.ok) {
          throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
        }
        const datos = await response.json()
        return datos
    }

    async changeBooks(book) {
        const response = await fetch(this.SERVER + '/books/' + book.id, {
            method: 'PUT',
            body: JSON.stringify(book),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    
        if(!response.ok) {
          throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
        }
        const datos = await response.json()
        return datos
    }

    async updatePriceOfBook(id, newPrice) {
        const response = await fetch(this.SERVER + '/books/' + id, {
            method: 'PATCH',
            body: JSON.stringify({
              price: newPrice,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
    
        if(!response.ok) {
          throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
        }
        const datos = await response.json()
        return datos
    }
}