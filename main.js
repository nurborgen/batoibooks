import './style.css'
import logoBatoi from '/logoBatoi.png'
import data from './datos'
import books from './src/model/books.class'
import users from './src/model/users.class'
import module from './src/model/modules.class'

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

const libros = new Books();
libros.populateData(data.books);
const usuarios = new Users();
usuarios.populateData(data.users);
const modulos = new Modules();
modulos.populateData(data.modules);

setupCounter(document.querySelector('#counter'))

const module5021Books = books.filter((book) => book.module === '5021' && book.condition === 'good');
console.log('Libros del módulo 5021 en buen estado:');
module5021Books.toString();

const module5025Books = books.filter((book) => book.module === '5025');
module5025Books.forEach((book) => {
  book.price *= 1.1; 
});

console.log('Libros del módulo 5025 con precio incrementado:');
module5025Books.toString();