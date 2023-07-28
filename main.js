class carro {
    constructor(cor, ano, modelo) {
        this.cor = cor
        this.ano = ano
        this.modelo = modelo
    }


    acelerar() {
        console.log('Vrummmmmmmmmm')
    }

    feiar() {
        console.log("crzcrzcrzccrzcrzrcrc")
    }

}
let car = new carro()
console.log(car)