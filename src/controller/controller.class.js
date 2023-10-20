import Books from "../model/books.class";
import Modules from "../model/modules.class";
import Users from "../model/users.class";

export default class Controller {
    constructor() {
        this.books = new Books
        this.modules = new Modules
        this.users = new Users
    }

    
}