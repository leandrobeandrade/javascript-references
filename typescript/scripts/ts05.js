function imprimir(val) { 
    console.log(val);
}
imprimir('Mensagem');
function teste(flag) {
    if (flag === void 0) { flag = true; }
    var result = flag ? 'flag está true' : 'flag está false';
    console.log(result);
}
teste(true);
var somar = function (n1, n2) {
    console.log("soma: " + (n1 + n2)); 
}; 
somar(10, 10);
var arrow1 = function (n1, n2) { return n1 + n2; }; 
var arrow2 = function (n1, n2) { return n1 + n2; };
var arrow3 = function (nome, sobrenome) { return nome + sobrenome; };
var arrow4 = function (nome, sobrenome) { return ({ nome: nome, sobrenome: sobrenome }); };
console.log(arrow1(100, 100));
console.log(arrow2(200, 200));
console.log(arrow3('Fulano', ' Ciclano'));
console.log(arrow4('Beltrano', ' Belciclano'));
var loteria = {
    nomes: ['Javascript', 'Ecmascript', 'Typescript'],
    teste: 'Testando',
    criaLoteria: function () {
        var _this = this;
        console.log('Primeiro nível do "this": ' + this.nomes + "-" + this.teste);
        return function () {
            console.log('Segundo nível do "this:" ' + _this);
            var pessoas = Math.floor(Math.random() * 3);
            return { nome: _this.nomes[pessoas] };
        };
    }
};
var t1 = loteria.criaLoteria();
var t2 = t1();
console.log(t2);
