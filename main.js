import './style.css'
import logoBatoi from '/logoBatoi.png'
import data from './datos'
import books from './src/model/books.class'
import users from './src/model/users.class'
import modules from './src/model/modules.class'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${logoBatoi}" class="logo" alt="Vite logo" />
    </a>
    <h1>BatoiBooks</h1>
    <p class="read-the-docs">
      Abre la consola para ver el resultado
    </p>
  </div>
`

const libros = new books();
libros.populateData(data.books);
const usuarios = new users();
usuarios.populateData(data.users);
const modulos = new modules();
modulos.populateData(data.modules);

console.log(libros.booksFromUser(4))
const module5021Books =  libros.booksWithStatus('good')
module5021Books.booksFromModule('5021')
console.log('Libros del módulo 5021 en buen estado:')
module5021Books.toString();

const module5025Books = libros.booksFromModule('5025')
module5025Books.incrementPriceOfbooks(1.1)

console.log('Libros del módulo 5025 con precio incrementado:')
module5025Books.toString()