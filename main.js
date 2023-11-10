import './style.css'
import logoBatoi from '/logoBatoi.png'
import books from './src/model/books.class'
import users from './src/model/users.class'
import modules from './src/model/modules.class'
import Controller from './src/controller/controller.class'

document.querySelector('#app').innerHTML = `
  <header>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${logoBatoi}" class="logo" alt="Vite logo" />
    </a>
    <h1>BatoiBooks</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#list">Ver Libros</a></li>
      <li><a href="#form">Añadir Libro</a></li>
      <li><a href="#about">Acerca de...</a></li>
    </ul>
  </nav>
  <div id="message"></div>
  <div>
    <div id="list">
    </div>
    <div id="form">
      <div id="titulo"></div>
      <form id="bookForm">
        <div hidden>
         <label for="id">Id:</label>
          <input id ="id" readonly>
        </div>
        <div>
          <label for="id-module">Módulo:</label>
          <select id="id-module">
            <option>- Selecciona un módulo -</option>
          </select><br>
        </div>

        <div>
          <label for="publisher">Editorial:</label>
          <input type="text" id="publisher" required><br>
        </div>

        <div>
          <label for="price">Precio:</label>
          <input type="number" id="price" required><br>
        </div>

        <div>
          <label for="pages">Páginas:</label>
          <input type="number" id="pages" required><br>
        </div>

        <div>
          <label>Estado:</label>
          <div></div>
          <input type="radio" id="status" name="status" value="new">
          <label>Nuevo</label>
          <input type="radio" id="status" name="status value="good"">
          <label>Bien</label>
          <input type="radio" id="status" name="status" value="used">
          <label>Usado</label>
          <input type="radio" id="status" name="status" value="bad">
          <label>Malo</label>
        </div>

        <div>
          <label for="comments">Comentarios:</label>
          <textarea id="comments" required></textarea>
        </div>

        <button type="submit">Añadir</button>
        <button type="reset">Reset</button>
      </form>
    </div>
    <div id="about">
    </div>
  </div>
`

document.addEventListener('DOMContentLoaded', () => {
  const myController = new Controller()
  myController.init()
})