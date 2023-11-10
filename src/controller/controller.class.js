import Books from "../model/books.class"
import Book from "../model/book.class"
import Modules from "../model/modules.class"
import Users from "../model/users.class"
import BooksRepository from "../repositories/books.repository"
import View from "../view/view.class"
import Cart from "../model/cart.class"

export default class Controller {
    constructor() {
        this.books = new Books()
        this.modules = new Modules()
        this.users = new Users()
        this.view = new View();
        this.cart = new Cart();
    }

    async init() {
        try{
            await Promise.all([
                this.books.populateData(),
                this.modules.populateData(),
                this.users.populateData(),
                this.cart.populateData(),
            ])
        } catch (error) {
            this.view.renderMessage('error', 'No se encuentran los datos')
            return
        }

        this.view.renderOptions(this.modules.data)

        this.books.data.forEach(book => {
            const div = this.view.renderBook(book)
            this.setListeners(book, div)
        });

        this.view.renderTitulo('Añadir libro')
    
        this.view.bookForm.addEventListener('submit', async (event) => {
            
            event.preventDefault();
            const idUser = 2
            const idModule = document.getElementById('id-module').value
            const publisher = document.getElementById('publisher').value
            const price = document.getElementById('price').value
            const pages = document.getElementById('pages').value
            const status = document.getElementById('status').value
            const comments = document.getElementById('comments').value
            const id = document.getElementById('id').value
            
            // - los validará
            if ( idModule === '' || publisher === '' || price === '' || pages === '' || status === '' || comments === '') {
              alert('Per favor, ompliu tots els camps obligatoris.');
              return;
            }
        
            if (isNaN(price) || isNaN(pages)) {
              alert('El preu i el nombre de pàgines han de ser números.');
              return;
            }
        
            if(id == '') {
              const finalBook = this.books.addItem({idUser, idModule, publisher, price, pages, status, comments})
              const div = this.view.renderBook(finalBook)
              this.setListeners(finalBook, div)
            } else {
              const newBook = await this.books.changeBook({id, idUser, idModule, publisher, price, pages, status, comments})
              const div = this.view.modifyBook(newBook)
              this.setListeners(newBook, div)
              this.view.renderTitulo("Añadir libro")
            }
            
        })
    }
   
    setListeners(book, div){
        div.querySelector('.cart').addEventListener('click', () => {
            try {
                this.cart.addItem(book)
                this.view.renderMessage('Libro añadido correctamente')
            } catch (error) {
                this.view.renderMessage(error.renderMessage)
                return
            }
        })

        div.querySelector('.delete').addEventListener('click', async () => {
            try {
                const confirm = window.confirm('Deseas eliminar el libro')
                if(confirm) {
                    await this.books.removeBook(book)
                    this.view.removeBook(book)
                    this.view.renderMessage('Libro borrado correctamente')
                } else {
                    return
                }
            } catch (error) {
                this.view.renderMessage('error', 'No se ha añadido ningun libro.')
                return
            }
        })

        div.querySelector('.edit').addEventListener('click', async () => {
            this.view.renderTitulo('Modificar libro')
            this.view.renderModLibro(book)
            document.getElementById('id-module').value = book.idModule
            document.getElementById('publisher').value = book.publisher
             document.getElementById('price').value = book.price
            document.getElementById('pages').value = book.pages
            document.getElementById('status').value = book.status
            document.getElementById('comments').value = book.comments
            document.getElementById('id').value = book.id
        })
    }


}