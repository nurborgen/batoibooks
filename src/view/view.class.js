export default class View {
    constructor() {
      this.modulesSelect = document.getElementById('id-module');
      this.booksContainer = document.getElementById('books');
      this.bookForm = document.getElementById('form');
      this.remove = document.getElementById('remove');
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
      const list = document.getElementById('list')
      books.forEach(book => {
        this.renderBook(book, list)
      })
    }

    renderBook(book, list) {
      const div = document.createElement('div')
      div.setAttribute('class', 'card')
      div.setAttribute('id', 'book-' + book.id)
      div.innerHTML = `<img src="${book.photo}" alt="Libro: ${book.id}">
      <div>
        <h5>${book.vliteral} (${book.id})</h5>
        <h6>${book.publisher}</h6>
        <p>Precio: ${book.price}</p>
        <p>Páginas: ${book.pages}</p>
        <p>Estado: ${book.status}</p>
        <p>En venta // Vendido el 21/12/2023</p>
        <p>Comentarios: ${book.comments} </p>
      </div>`
      list.appendChild(div)
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
  
  
  }