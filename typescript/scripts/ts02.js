var teste = "Javascript";
var comprim = teste.length; // (<string>) força para tipo string
var tamanho = teste.toUpperCase();
console.log(comprim);
console.log(tamanho);
/*-------------*/
function num(v1, v2, v3) {
    if (v3 != undefined) {
        return v1 + v2 + v3;
    }
    return v1 + v2;
}
console.log(num(10, 10, 10));
/*-------------*/
function test(v1, v2, v3) {
    if (v3 != undefined) {
        return v1 + v2 + v3;
    }
    return v1 + v2;
}
console.log("retorno com number: " + test(10, 10, 10));
console.log("retorno com string: " + test('Fulano ', 'Ciclano ', 'Beltrano'));
/*-------------*/
function add(v1) {
    var v2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        v2[_i - 1] = arguments[_i];
    }
    var soma = 0;
    for (var i = 0; i < v2.length; i++) {
        soma += v2[i];
    }
    console.log(v1 + soma);
}
add('A soma é: ', 10, 5, 5);
function nome(pessoa) {
    console.log(pessoa.nome);
}
var randomObj1 = { nome: 'Fulano', idade: 32 };
nome(randomObj1);
