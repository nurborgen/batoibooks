import Books from "../model/books.class"
import Modules from "../model/modules.class"
import Users from "../model/users.class"
import BooksRepository from "../repositories/books.repository"
import View from "../view/view.class"

export default class Controller {
    constructor() {
        this.books = new Books()
        this.modules = new Modules()
        this.users = new Users()
        this.view = new View();
    }

    async init() {
        try{
            await this.books.populateData()
            await this.modules.populateData()
            await this.users.populateData()
        } catch (error) {
            this.view.renderMessage('error', 'No se encuentran los datos')
            return
        }

        this.view.renderOptions(this.modules.data)
        this.view.renderAllBooks(this.books.data)

        this.view.remove.addEventListener('click', async (event) => {
 
            const id = prompt('Introduce la id del libro que quiere borrar:')
            try{
                await this.books.removeBook(id)
            } catch (error) {
                this.view.renderMessage('error', 'No se encuentra ningun libro con esa id')
                return
            }
            this.view.listenDelete(id)
        })
    
        this.view.bookForm.addEventListener('submit', (event) => {
            // Aquí poned el código que
            // - cogerá los datos del formulario
            event.preventDefault();
            const id = 1
            const idUser = 2
            const idModule = document.getElementById('id-module').value
            const publisher = document.getElementById('publisher').value
            const price = document.getElementById('price').value
            const pages = document.getElementById('pages').value
            const status = document.getElementById('status').value
            const comments = document.getElementById('comments').value
            // - los validará
            if (title === '' || idModule === '' || publisher === '' || price === '' || pages === '' || status === '') {
                alert('Per favor, ompliu tots els camps obligatoris.');
                return;
              }
            
              if (isNaN(price) || isNaN(pages)) {
                alert('El preu i el nombre de pàgines han de ser números.');
                return;
              }
            // - pedirá al modelo que añada ese libro
            const constr = {id: id, idUser: idUser, idModule: idModule, publisher: publisher, price: price, status: status, comments: comments}
            const book = new Book(constr)
            this.books.addItem(book)
            // - una vez hecho lo añadirá a la vista y borrará el formulario
            this.view.clearForm()
        })

    }
    
}