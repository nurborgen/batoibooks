export default class View {
    constructor() {
      this.modulesSelect = document.getElementById('id-module');
      this.booksContainer = document.getElementById('books');
      this.bookForm = document.getElementById('form');
      this.remove = document.getElementById('remove');
      this.list = document.getElementById('list')
    }
  
    renderOptions(modules) {
      modules.forEach((module) => {
        const option = document.createElement('option');
        option.value = module.code;
        option.textContent = module.vliteral;
        this.modulesSelect.appendChild(option);
      });
    }

    renderMessage(type, message) {
      const missatge = document.getElementById('message')
      const div = document.createElement('div')
      div.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="this.parentElement.remove()">x</button>
      `
      div.className = type + '_tipo_ alert alert-danger alert-dismissible'
      div.setAttribute('role', 'alert')
      missatge.appendChild(div)
    }
  
    renderAllBooks(books) {
      books.forEach(book => {
        this.renderBook(book)
      })
    }

    renderBook(book) {
      const div = document.createElement('div')
      div.setAttribute('class', 'card')
      div.setAttribute('id', 'book-' + book.id)
      div.innerHTML = `<img src="${book.photo}" alt="Libro: ${book.id}">
      <div>
        <h5>${book.idModule} (${book.id})</h5>
        <h6>${book.publisher}</h6>
        <p>Precio: ${book.price}</p>
        <p>Páginas: ${book.pages}</p>
        <p>Estado: ${book.status}</p>
        <p>${book.soldDate ? "Vendido el: " + book.soldDate : "En venta"}</p>
        <p>Comentarios: ${book.comments} </p>
        <button class="cart">
          <span class="material-icons">add_shopping_cart</span>
        </button>
        <button class="edit">
          <span class="material-icons">edit</span>
        </button>
        <button class="delete">
          <span class="material-icons">delete</span>
        </button>
      </div>`
      this.list.appendChild(div)
      return div;
    }
  
    listenDelete(id) {
      const remove = document.getElementById('book-' + id)
      remove.parentElement.removeChild(remove)
    }

    renderStatus() {
      const status = ['new', 'used', 'good', 'bad']
      const div = document.getElementById('')
    }

    clearForm() {
      this.bookForm.reset();
    }

    removeBook(book) {
      const div = document.getElementById('book-' + book.id)
      div.parentElement.removeChild(div)
    }

    modifyBook(book) {
      const divBook = document.getElementById('book-' + book.id)
      divBook.innerHTML =  `<img src="${book.photo}" alt="Libro: ${book.id}">
        <div>
        <h5>${book.idModule} (${book.id})</h5>
        <h6>${book.publisher}</h6>
        <p>Precio: ${book.price}</p>
        <p>Páginas: ${book.pages}</p>
        <p>Estado: ${book.status}</p>
        <p>${book.soldDate ? "Vendido el: " + book.soldDate : "En venta"}</p>
        <p>Comentarios: ${book.comments} </p>
        <button class="cart">
          <span class="material-icons">add_shopping_cart</span>
        </button>
        <button class="edit">
          <span class="material-icons">edit</span>
        </button>
        <button class="delete">
          <span class="material-icons">delete</span>
        </button>
      </div>`
      return divBook;
    }

    renderTitulo(message) {
      const div =document.getElementById('titulo') 
      div.innerHTML = `${message}`
    }

    renderModLibro(book) {
      document.getElementById('id').parentElement.removeAttribute('hidden')
      document.getElementById('id').value = book.id
    }
  
  }