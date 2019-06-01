var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
// No TypeScript, ao contrário do JavaScript, temos a tipagem das variáveis.
// Isso facilita na hora de encontrar possíveis erros na aplicação. Porém,
// se não declararmos nenhum tipo, teremos o tipo any, fazendo com que nosso código
// possa ser idêntico à um js em si.
var isEnoughToBeat = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon? " + (isEnoughToBeat(distance) ?
    'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
// As funções, no TypeScript, possuem parâmetros e retornos tipados, tornando
// mais fácil identificar erros. Além disso, temos também arrow functions, uma
// sintaxe mais enxuta para funções. No TypeScript traz também as Template Strings,
// que são formas de concatenar strings com expressões. Por último, podemos definir
// parâmetros padrões para as nossas funções, atribuindo um valor já na escrita da função.
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperSpace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperSpace();
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 2;
        return _this;
    }
    MilleniumFalcon.prototype.jumpIntoHyperSpace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MilleniumFalcon;
}(Spacecraft));
var falcon = new MilleniumFalcon();
falcon.jumpIntoHyperSpace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is Falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
// No TypeScript, temos a implementação das classes de forma um pouco mais simples comparado ao
// JavaScript. No construtor de uma classe, podemos já definir os parâmetros do construtor como
// propriedades da classe, com a palavra public, enxugando um pouco a sintaxe.
// Para definirmos metódos, não precisamos utilizar a palavra function, simplesmente o nome
// do metódo e seus parâmetros.
// Ao fazermos a herança de uma classe, podemos chamar construtores e metódos da classe pai
// utilizando super. Por último, podemos implementar interfaces no TypeScript. Interfaces
// definem como algo deve ser, como um contrato.
