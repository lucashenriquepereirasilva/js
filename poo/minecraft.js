/**
 * POO
 * Abstração, Herança e Polimosfismo
 * @author Professor José de Assis
 */

// Classe modelo (iniciar sempre com letra maiúscula)
class Bloco {
    //atributos
    constructor(textura, resistencia) {
        this.textura = textura
        this.resistencia = resistencia
    }
    //ações
    criarBloco() {
        console.log("---------------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }
    
    construir() {
        console.log(`Bloco de ${this.textura} colocado.`)
    }

    minerar() {
        console.log("□ □ □ □ Recursos obtidos!")
    }
}

//Classe modelo Enxada com herança de Bloco
class Enxada extends Bloco {
    //atributos
    constructor(textura, resistencia, conquista) {
        super(textura, resistencia) //super -> classe pai
        this.conquista = conquista
    }
    //ações
    criarEnxada() {
        console.log("--------------------------------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }

    arar() {
        console.log("._._._. Terra arada!")
        if (this.conquista === true) {
            console.log("☀ Conquista obtida!")
        }      
    }

    // polimorfismo (obrigatório manter o nome do método da classe modelo(pai))
    minerar() {
        console.log("✞ Dano atribuído!")
    }
}

/****** MUNDO ******/
console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")
console.log("")

// Instanciando (criando) objetos
const bloco1 = new Bloco("terra", 1)
bloco1.criarBloco()

const bloco2 = new Bloco("madeira", 2)
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("pedra", 5)
bloco3.criarBloco()
bloco3.minerar()

const enxada1 = new Enxada("madeira", 2, false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada("ferro", 10, true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("diamante", 20, false)
enxada3.criarEnxada()
enxada3.minerar()