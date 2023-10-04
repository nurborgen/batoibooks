export default class Module {
    constructor(code, cliteral, vliteral, idCourse) {
        this.code = code
        this.cliteral = cliteral
        this.vliteral = vliteral
        this.idCourse = idCourse
    }

    getModuleByCode(modulos, codigo) {
        return modulos.find(modulos => modulos.code == codigo)
    }

    getModuleIndexByCode(modulos, codigo) {
        return modulos.findIndex(modulos => modulos.code == codigo)
    }
}