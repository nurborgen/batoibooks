export default class ModulesRepository {
    constructor() {
        this.SERVER = import.meta.env.VITE_URL_API
    }

    async getAllModules() {
        const response = await fetch(this.SERVER + '/modules')
        if(!response.ok) {
            throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
        }
        const modules = await response.json()
        return modules
    }

    async getModulesById(code) {
        const response = await fetch(this.SERVER + '/modules/' + code)
        if(!response.ok) {
            throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
        }
        const module = await response.json()
        return module
    }

    async addModule(module) {
        const response = await fetch(this.SERVER + '/modules', {
            method: 'POST',
            body: JSON.stringify({
                code: module.code,
                cliteral: module.cliteral,
                vliteral: module.vliteral,
                idCourse: module.idCourse,
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

    async removeModule(code) {
        const response = await fetch(this.SERVER + '/modules/' + code, {
            method: 'DELETE',
          })
          if(!response.ok) {
            throw 'Error ' + response.status + ' de la BBDD: ' + response.statusText
          }
          const datos = await response.json()
          return datos
    }

    async changeModule(module) {
        const response = await fetch(this.SERVER + '/modules/' + module.code, {
            method: 'PUT',
            body: JSON.stringify(module),
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