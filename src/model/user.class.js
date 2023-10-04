export default class User {
    constructor(id, email, nick) {
        this.id = id
        this.email = email
        this.nick = nick
    }

    getUserById(users, id) {
        return users.find(users => users.id == id)
    }

    getUserIndexById(users, id) {
        return users.findIndex(users => users.id == id)
    }

    getUserByNickName(users, nick) {
        return users.find(users => users.nick == nick)
    }

    
      
}