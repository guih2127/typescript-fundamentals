let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)

let episode: number = 4
console.log("This is episode " + 4)
episode = episode + 1
console.log("Next episode is " + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log("My favorite droid is " + favoriteDroid)

// No TypeScript, ao contrário do JavaScript, temos a tipagem das variáveis.
// Isso facilita na hora de encontrar possíveis erros na aplicação. Porém,
// se não declararmos nenhum tipo, teremos o tipo any, fazendo com que nosso código
// possa ser idêntico à um js em si.

let isEnoughToBeat = function (parsecs: number) : boolean {
    return parsecs < 12
}

let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeat(distance) ? 
'YES' : 'NO'}`)

let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

function inc (speed: number, inc: number = 1) : number {
    return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)

// As funções, no TypeScript, possuem parâmetros e retornos tipados, tornando
// mais fácil identificar erros. Além disso, temos também arrow functions, uma
// sintaxe mais enxuta para funções. No TypeScript traz também as Template Strings,
// que são formas de concatenar strings com expressões. Por último, podemos definir
// parâmetros padrões para as nossas funções, atribuindo um valor já na escrita da função.

class Spacecraft {
    constructor (public propulsor: string) {}

    jumpIntoHyperSpace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()

class MilleniumFalcon extends Spacecraft implements ContainerShip {

    cargoContainers: number

    constructor() {
        super('hyperdrive')
        this.cargoContainers = 2
    }

    jumpIntoHyperSpace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperSpace()
        } else {
            console.log('Failed to jump into hyperspace')
        }
    }
}

let falcon = new MilleniumFalcon()
falcon.jumpIntoHyperSpace()

interface ContainerShip {
    cargoContainers: number
}

let goodForTheJob = (ship: ContainerShip) => ship.cargoContainers > 2

console.log(`Is Falcon good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`)

// No TypeScript, temos a implementação das classes de forma um pouco mais simples comparado ao
// JavaScript. No construtor de uma classe, podemos já definir os parâmetros do construtor como
// propriedades da classe, com a palavra public, enxugando um pouco a sintaxe.
// Para definirmos metódos, não precisamos utilizar a palavra function, simplesmente o nome
// do metódo e seus parâmetros.
// Ao fazermos a herança de uma classe, podemos chamar construtores e metódos da classe pai
// utilizando super. Por último, podemos implementar interfaces no TypeScript. Interfaces
// definem como algo deve ser, como um contrato.