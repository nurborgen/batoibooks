export default class ModulesRepositoy {
    constructor() {
        this.SERVER = import.meta.env.VITE_URL_API
    }
}