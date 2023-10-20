import ModulesRepositoy from "../repositories/modules.repository"
import Module from "./module.class"

export default class Modules {
    constructor () {
        this.data = []
    }

    getModuleByCode(codigo) {
        return this.data.find(modulos => modulos.code == codigo)
    }

    getModuleIndexByCode(codigo) {
        return this.data.findIndex(modulos => modulos.code == codigo)
    }

    populateData(array) {
        const modulesRepositoy = new ModulesRepositoy()
        return modulesRepositoy.getAllModules()
    }

    addItem(object) {
        let module = new Module(object["code"], object["cliteral"], object["vliteral"], object["idCourse"])
        this.data.push(module)
        return module
    }

    removeItem(item) {
        let index = this.data.findIndex(module => module.code === item)
        if(index === -1) {
            throw 'El modulo con el codigo ' + item + ' no existe'
        }
        this.data.splice(index, 1)
        return {}
    }

    toString() {
        if (this.data.length === 0) {
            return "No hay módulos en la lista.";
        }

        const moduleStrings = this.data.map((module) => {
            return `    - ${module.code} ${module.vliteral} (${module.cliteral})`;
        });

        return `Módulos (total ${this.data.length})\n${moduleStrings.join('\n')}`;
    }
}