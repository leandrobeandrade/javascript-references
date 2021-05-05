# forEach()
Executa uma dada função em cada elemento de um array
    
    let carro = [
        {marca: 'Ford', preco: 28000},
        {marca: 'GM', preco: 32000},
    ];
    let carros = [];
    let total = 0;
    
    carro.forEach(elemento => {
        carros.push(elemento);
        total += elemento.preco;
    })
    
    console.log(carros); // retorna [{marca: 'Ford', preco: 28800}, {marca: 'GM', preco: 34750}]
    console.log(total); // retorna 60000
    
# for...of
Executa uma dada função agindo sobre elementos iteraveis como arrays, string, etc..
    
    let usuarios = [
        {usuario: "Fulano", filhos: ["João", "Maria", "Carlos"]},
        {usuario: "ciclano", filhos: ["Marcos", "Alberto", "Pedro"]}
    ];

    for(let usu of usuarios) console.log(`O ${usu.usuario} tem os filhos: ${usu.filhos.join(", ")}`);
    
    // retorna O Fulano tem os filhos João, Maria, Carlos
    // retrona O Ciclano tem os filhos Marcos, Alberto, Pedro
    
    let texto = "teste";

    for (let valor of texto) console.log(valor);  // retorna t e s t e
    
# for...in
Interage sobre as chaves de um array, na ordem original de inserção
	
    let arr = ["Apple", "Orange", "Pear"];
    let nums = [5, 12, 8, 130, 44];

    for (let key in nums) console.log(nums[key]);   // retorna 5 12 8 130 44
    
# map()
Invoca a função callback passada por argumento para cada elemento do array e devolve um novo array como resultado
    
    let carros = [
	    {marca: 'Ford', modelo: 'Ka'},
	    {marca: 'GM', modelo: 'Corsa'},
	    {marca: 'Fiat', modelo: 'Palio'}
    ];
    
    let mapeia = carros.map(elemento => elemento.modelo.length);

    console.log(mapeia) // retorna [2, 5, 5]

# filter()
Cria um novo array com todos os elementos que passarem no teste implementado pela função fornecida

    let carros = [
	    {marca: 'Ford', modelo: 'Ka'},
	    {marca: 'GM', modelo: 'Corsa'},
	    {marca: 'Fiat', modelo: 'Palio'}
    ];

    let filtra = carros.filter(elemento => elemento.marca === 'Ford');

    console.log(filtra); // retona { marca: "Ford", modelo: "Ka"}

# reduce()
Executa uma função reducer para cada membro do array, resultando num único valor de retorno

    let carro = [
        {marca: 'Ford', preco: 28800},
        {marca: 'GM', preco: 34750},
        {marca: 'Fiat', preco: 32000}
    ];

    let reduz = carro.reduce(function(anterior, atual) {
	    return anterior + atual.preco
    },0)

    console.log(reduz); // retorna 95550

# find()
Retorna o valor do primeiro elemento do array que satisfizer a função de teste provida

    let nums = [5, 12, 8, 130, 44];
    let ret = nums.find((element) => element > 10);
    console.log(ret);  // retorna 5

    const inventario = [
        {nome: 'maças', quantidade: 2},
        {nome: 'bananas', quantidade: 0},
        {nome: 'peras', quantidade: 5}
    ];

    function _frutas(frutas) {
        return frutas.nome === 'peras';
    }	 

    console.log(inventario.find(_frutas)); // retorna {"nome": "peras", "quantidade": 5}
    console.log(inventario.find(frutas => frutas.nome == 'peras')) // retorna {"nome": "peras", "quantidade": 5}

# some()
Testa se ao menos **`1`** dos elementos do array passa no teste implementado pela função atribuída

    function maiorQue(elemento) {
      return elemento > 10;
    }

    let nums1 = [2, 5, 8, 1, 4];
    let nums2 = [12, 5, 8, 1, 4];

    console.log(nums1.some(maiorQue));  // retorna false
    console.log(nums2.some(maiorQue));  // retorna true

    console.log(nums1.some(element => element > 10));  // retorna false
    console.log(nums2.some(element => element > 10));  // retorna true

# every()
Testa se **`todos`** os elementos do array passam pelo teste implementado pela função fornecida

    function maiorQue(elemento) {
      return elemento > 10;
    }

    let array1 = [12, 5, 8, 130, 44];
    let array2 = [12, 54, 18, 130, 44];

    console.log(array1.every(maiorQue)); // false
    console.log(array2.every(maiorQue)); // true


# findIndex()
Retorna o índice do primeiro elemento em um array que passar no teste pela função fornecida


    let idades = [3, 10, 18, 20];

    function adulto(idade) {
      return idade >= 18;
    }

    console.log(idades.findIndex(Adulto); // retorna 2
    console.log(idades.findIndex(idade => idade >= 18)); // retorna 2
    
# fill()
Preenche o array com elementos preeviamente fornecidos

    let array = ["BMW", "GM", "Honda", "Audi"];
    array.fill("Jeep");
    console.log(array); // retorna ["Jeep", "Jeep", "Jeep", "Jeep"]

    let array = ["BMW", "GM", "Honda", "Audi"];
    arr.fill('Jeep', 1); // (1) posição que começa o preenchimento
    console.log(array); // retorna ["BMW", "Jeep", "Jeep", "Jeep"]
    
    let array = ["BMW", "GM", "Honda", "Audi"];
    arr.fill('Jeep', 1, 3); // (1) posição que começa o preenchimento, (3) posição onde deve parar o preenchimento
    console.log(array); // retorna ["BMW", "Jeep", "Jeep", "Audi"]

# Array.from()
Cria uma nova instância de um Array quando for passado um array-like ou um iterable object como argumento

    let texto = "Hello";
    
    console.log(Array.from(texto)); // retorna ["H", "e", "l", "l", "o"]
    
# Array.of()
Cria um nova instância do Array com um número variável de argumentos, independentemente do número ou do tipo dos argumentos

    const array = Array.of(1, 10, "teste", {nome: "Fulano"}, [2, 3, 4]);
    console.log(array); // retorna [1, 10, "teste", {nome: "Fulano"}, [2, 3, 4]]
