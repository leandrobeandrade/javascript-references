var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa = __decorate([
        curso
    ], Pessoa);
    return Pessoa;
}());
function curso(target) {
    Object.defineProperty(target.prototype, "curso", { value: function () { return "Curso de Typescript"; } }); // passagem por valor
}
var pe = new Pessoa();
console.log(pe.curso());
var Professor = /** @class */ (function () {
    function Professor() {
    }
    Professor = __decorate([
        Curso({
            curso: 'Curso de Javascript'
        })
    ], Professor);
    return Professor;
}());
function Curso(config) {
    return function (target) {
        Object.defineProperty(target.prototype, "curso", { value: function () { return config.curso; } }); // passagem por parâmetro
    }; 
}
var prof = new Professor();
console.log(prof.curso());
