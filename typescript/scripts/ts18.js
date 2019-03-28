var nomes1 = new Set(); gtg
nomes1.add('Fulano');
nomes1.add('Beltrano');
nomes1.add('Fulano');
nomes1.add('Fulano');
console.log(nomes1);
var nomes2 = new Set(['Ciclano', 'Belciclano']);
console.log(nomes2);
console.log(nomes2.has('ciclano'));
console.log(nomes2.has('Ciclano'));
for (var _i = 0, nomes2_1 = nomes2; _i < nomes2_1.length; _i++) {
    var aux = nomes2_1[_i];
    console.log(aux);
} 
nomes2.forEach(function (value) { return console.log(value); });
