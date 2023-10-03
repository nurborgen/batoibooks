'use strict'

function booksFromUser(books, number) {
  return books.filter(books => books.idUser == number)
}

function booksFromModule(books, module) {
  return books.filter(books => books.idModule == module) 
}

function booksCheeperThan(books, number) {
  return books.filter(books => books.price <= number) 
}

function booksWithStatus(books, status) {
  return books.filter(books => books.status == status) 
}

function averagePriceOfBooks(books) {
  if(array.lenght <= 0) {
    return 0.00.toFixed(2) + ' €'
  }
  return array.reduce((total, books) => total += books.price)/array.lenght
}

function booksOfTypeNote(books) {
  return books.filter(books => books.publisher == "Apunts")
}

function booksNotOfTypeNote(books) {
  return books.filter(books => books.publisher != "Apunts")
}

function booksNotSold(books) {
  return books.filter(books => books.soldDate == "")
}

function incrementPriceOfbooks(books, number) {
  if(array.lenght <= 0) {
    return NaN
  }
  array.map((books) => books.price + books.price * 0.1)
}

function getUserById(users, id) {
  return users.find(users => users.id == id)
}

function getUserIndexById(users, id) {
  return users.findIndex(users => users.id == id)
}

function getUserByNickName(users, nick) {
  return users.find(users => users.nick == nick)
}

function getModuleByCode(modulos, codigo) {
  return modulos.find(modulos => modulos.code == codigo)
}

function getModuleIndexByCode(modulos, codigo) {
  return modulos.findIndex(modulos => modulos.code == codigo)
}

export {
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
  }

