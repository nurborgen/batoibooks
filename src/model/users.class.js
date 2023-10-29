import UsersRepository from "../repositories/users.repository"
import User from "./user.class"

const usersRepository = new UsersRepository()

export default class Users {
    constructor () {
        this.data = []
    }

    getUserById(id) {
        return usersRepository.getUserById(id)
    }

    getUserIndexById(id) {
        return this.data.findIndex(users => users.id == id)
    }

    getUserByNickName(nick) {
        return this.data.find(users => users.nick == nick)
    }

    async populateData() {
        const usersRepository = new UsersRepository()
        const array = await usersRepository.getAllUsers()
        this.data = array
    }

    addItem(object) {
        let user = new User(this.getNewId(), object["email"], object["nick"])
        this.data.push(user)
        return user
    }

    removeItem(item) {
        let index = this.data.findIndex(user => user.id === item)
        if(index === -1) {
            throw 'El libro con el id ' + item + ' no existe'
        }
        this.data.splice(index, 1)
        return {}
    }

    toString() {
        if (this.data.length === 0) {
            return "No hay usuarios en la lista.";
        }

        const userStrings = this.data.map((user) => {
            return `    - ${user.nick} (${user.id}) - ${user.email}`;
        });

        return `Usuarios (total ${this.data.length})\n${userStrings.join('\n')}`;
    }

}