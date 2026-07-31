class Veiculo {
    constructor(fabricante, modelo, tipo, ano, qtdPortas) {
        this.fabricante = fabricante; // propriedade da Classe
        this.modelo = modelo; // propriedade da Classe
        this.tipo = tipo; // propriedade da Classe
        this.ano = ano // propriedade da Classe
        this.qtdPortas = qtdPortas; // propriedade da Classe
    }

     mostrarInfoVeiculo(){
        console.log(`${this.fabricante}, ${this.modelo}, ${this.ano},${this.tipo}, ${this.qtdPortas} portas`)
    }

    mostrarModeloVeiculo(){
        console.log(`${this.modelo}`)
    }
}

class Moto extends Veiculo {
    constructor (fabricante, modelo, ano){
        super(fabricante, modelo, null, ano, null)
    }
    mostrarInfoVeiculo(){
        console.log(`${this.fabricante}, ${this.modelo}, ${this.ano}`)
    }
}

class Carro extends Veiculo {
    constructor (fabricante, modelo, ano, tipo, qtdPortas){
        super (fabricante, modelo, ano, tipo, qtdPortas)
    }
}


const meuCarro = new Carro ("Ford", 'KA', '2009', 'Sedan', 4)
meuCarro.mostrarInfoVeiculo()


const minhaMoto = new Moto ('Honda', 'Cb300', 2015)
minhaMoto.mostrarInfoVeiculo()


