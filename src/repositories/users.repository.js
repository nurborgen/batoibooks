export default class UsersRepository {
    constructor() {
        this.SERVER = import.meta.env.VITE_URL_API
    }

    async getAllUsers() {
        const response = await fetch(this.SERVER + '/users')
        if(!response.ok) {
            throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
        }
        const users = await response.json()
        return users
    }

    async getUserById(id) {
        const response = await fetch(this.SERVER + '/users/' + id)
        if(!response.ok) {
            throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
        }
        const user = await response.json()
        return user
    }

    async addUser(user) {
        const response = await fetch(this.SERVER + '/users', {
            method: 'POST',
            body: JSON.stringify({
                id: user.id,
                email: user.email,
                nick: user.nick,
                password: user.password
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

    async removeUser(id) {
        const response = await fetch(this.SERVER + '/users/' + id, {
            method: 'DELETE',
          })
          if(!response.ok) {
            throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
          }
          const datos = await response.json()
          return datos
    }

    async changeUser(user) {
        const response = await fetch(this.SERVER + '/users/' + user.id, {
            method: 'PUT',
            body: JSON.stringify(user),
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

    async updateUserPassword(id, newPassword) {
        const response = await fetch(this.SERVER + '/users/' + id, {
            method: 'PATCH',
            body: JSON.stringify({
              password: newPassword,
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