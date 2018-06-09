var nome_idade1 = new Map();
nome_idade1.set('Fulano', 50);
nome_idade1.set('Beltrano', 40);
console.log(nome_idade1);
var nome_idade2 = new Map().set('Fulano', 60).set('Beltrano', 30);
console.log(nome_idade2);
var nome_idade3 = new Map([
    ['Ciclano', 70], ['Belciclano', 20]
]);
console.log(nome_idade3);
console.log(nome_idade3.get('Ciclano'));
console.log(nome_idade3.has('Ciclano'));
for (var _i = 0, _a = nome_idade3.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
for (var _b = 0, _c = nome_idade3.values(); _b < _c.length; _b++) {
    var val = _c[_b];
    console.log(val);
}
for (var _d = 0, _e = nome_idade3.entries(); _d < _e.length; _d++) {
    var ent = _e[_d];
    console.log(ent[0] + " " + ent[1]);
}
nome_idade3.clear();
console.log(nome_idade3.size);
