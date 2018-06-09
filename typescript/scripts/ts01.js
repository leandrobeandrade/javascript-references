var p = document.createElement('p');
var ola = 'Começando com Typescript';
p.textContent = ola;
document.body.appendChild(p);
/*-------------*/
var numer = 10; // tipo NUMBER
var boole = true; // tipo BOOLEAN
var nulos; // tipo NULL
var indef; // tipo UNDEFINED
var annys = 'tyufsd' + 10; // tipo ANY - qualquer tipo
var text1 = 'Testando'; // tipo STRING		
var text2 = "Testando";
var text3 = "" + text2;
console.log(numer);
console.log(boole);
console.log(nulos);
console.log(indef);
console.log(annys);
console.log(text1);
console.log(text2);
console.log(text3);
/*-------------*/
function func() { } // tipo VOID
console.log(func);
/*-------------*/
var lista1 = [1, 2, 3]; // tipo VETOR
var lista2 = [1, 2, 3];
console.log(lista1);
console.log(lista2);
/*-------------*/
var tupla; // tipo TUPLA
tupla = ['Qualquer texto!', 2018];
console.log(tupla[0].length);
console.log(tupla[1].valueOf);
/*-------------*/
var Dia;
(function (Dia) {
    Dia[Dia["SEGUNDA"] = 0] = "SEGUNDA";
    Dia[Dia["TERCA"] = 1] = "TERCA";
    Dia[Dia["QUARTA"] = 5] = "QUARTA";
    Dia[Dia["QUINTA"] = 6] = "QUINTA";
    Dia[Dia["SEXTA"] = 7] = "SEXTA";
})(Dia || (Dia = {}));
; // tipo ENUM
var dia1 = Dia.SEGUNDA;
var dia2 = Dia[1];
console.log(dia1);
console.log(dia2);
console.log(Dia.QUARTA + " | " + Dia.QUINTA);
