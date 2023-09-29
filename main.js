import './style.css'
import logoBatoi from '/logoBatoi.png'

import {
  booksFromUser,
  booksFromModule,
  booksCheeperThan,
  booksWithStatus,
  averagePriceOfBooks,
  booksOfTypeNote,
  booksNotOfTypeNote,
  booksNotSold,
  incrementPriceOfbooks,
  getUserById,
  getUserIndexById,
  getUserByNickName,
  getModuleByCode,
  getModuleIndexByCode
} from './src/functions'

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

setupCounter(document.querySelector('#counter'))
