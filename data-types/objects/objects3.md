# Object.is() 
Determina se dois valores correspondem ao mesmo valor

    Object.is('name', 'name');   // true
    Object.is(window, window);   // true

    Object.is('name', 'idade');  // false
    Object.is([], []);           // false

    let teste = { a: 1 };
    Object.is(teste, teste);     // true

    Object.is(null, null);       // true

    // Casos especiais
    Object.is(0, -0);            // false
    Object.is(-0, -0);           // true
    Object.is(NaN, 0/0);         // true
    
# Object.isExtensible() 
Verifica se um objeto pode ser extendido (se é ou não possível adicinar novas propriedades)

    const obj = {};
    console.log(Object.isExtensible(obj));  // retorna true

    Object.preventExtensions(obj);
    console.log(Object.isExtensible(obj));  // retorna false
    
    // Objetos selados, não podem ser extendidos
    let selado = Object.seal({});
    Object.isExtensible(selado);  // retorna false

    // Objetos congelados também não podem ser extendidos
    let congelado = Object.freeze({});
    Object.isExtensible(congelado);  // retorna false
    
# Object.isFrozen() 
Determina se um objeto está frozen

    const obj = {
      idade: 42
    };

    console.log(Object.isFrozen(obj));  // retorna false

    Object.freeze(obj);
    console.log(Object.isFrozen(obj));  // retorna true
    
# Object.isSealed() 
Determina se um objeto está selado

    const obj = {
      idade: 42
    };

    console.log(Object.isSealed(obj));  // retorna false

    Object.seal(obj);
    console.log(Object.isSealed(obj));  // retorna true

# Object.keys()
Retorna um array cujo os elementos são strings correspondentes para a propriedade enumerável encontrada diretamente sobre o objeto
	
    let usuario = {
      nome: "Fulano",
      idade: 30
    };

    console.log(Object.keys(user)); // retorna ["nome", "idade"]
	
    // ordena pela chave
    let nums = { 100: 'a', 2: 'b', 7: 'c' };
    console.log(Object.keys(nums)); // retorna ["2", "7", "100"]

# Object.preventExtensions() 
Impede que novas propriedades sejam adicionadas a um objeto (isto é, impede futuras extensões ao objeto)

    // Object.preventExtensions retorna o objeto tornado não-extensível
    let obj1 = {};
    let obj2 = Object.preventExtensions(obj1);
    console.log(obj1 === obj2);  // retorna verdadeiro

    // Objetos são extensíveis por padrão...
    let vazio = {};
    Object.isExtensible(vazio);  // retorna verdadeiro

    // ...mas isso pode ser mudado
    Object.preventExtensions(vazio);
    Object.isExtensible(vazio);  // retorna falso

    // Object.defineProperty lança erro quando adiciona-se uma nova propriedade a um objeto não-extensível
    var naoExtensivel = { removable: true };
    Object.preventExtensions(naoExtensivel);
    Object.defineProperty(naoExtensivel, 'new', {
      value: 8675309
    }); // lança um TypeError

    // No modo restrito, tentar adicionar novas propriedades a um objeto não-extensível lança um TypeError
    function fail() {
      'use strict';
      naoExtensible.novaPropiedade = 'FALHA';  // lança um TypeError
    }
    
    fail();

# Object.seal() 
Sela um Objeto, evitando que novas propriedades sejam adicionadas à ele e marcando todas as propriedades existentes como não configuráveis. Valores das propriedades atuais ainda podem ser alterados desde que essas propriedades sejam graváveis (writable)

    let obj = {
      prop: function() {},
      nome: 'Fulano'
    };

    // Novas propriedades podem ser adicionadas, propriedades existentes podem ser alteradas ou removidas
    obj.nome = 'Ciclano';
    obj.idade = 42;
    delete obj.prop;

    let ob = Object.seal(obj);

    console.log(ob === obj);  // retorna true
    console.log(Object.isSealed(obj));  // retorna true

    // Alterar o valor das propriedades em um objeto selado ainda funciona
    obj.nome = 'Beltrano';

    // Mas você não pode converter propriedades de dados em propriedades de acesso, e vice-versa
    Object.defineProperty(obj, 'name', { get: function() { return 'Belciclano'; } }); // throws a TypeError

    // Agora quaisquer mudanças, que não sejam aos valores das propriedades, irão falhar
    obj.msg = 'Qualquer coisa!'; // silenciosamente não adiciona a propriedade
    delete obj.name; // silenciosamente não deleta a propriedade

    // e em modo rigoroso (strict mode) tais tentativas irão lançar erros do tipo TypeErrors
    function fail() {
      'use strict';
      delete obj.name; // throws a TypeError
      obj.sobrenome = 'de Tal'; // throws a TypeError
    }
    
    fail();

    // Tentativas através do Object.defineProperty também irão falhar
    Object.defineProperty(obj, 'idade', { value: 17 }); // lança um erro do tipo TypeError
    Object.defineProperty(obj, 'nome', { value: 'Ciclano' }); // altera o valor da propriedade existente

# Object.setPrototypeOf() 
Configura o `prototype` (i.e., a propriedade interna [[Prototype]])  de um objeto específico para outro objeto ou null. Não recomendado seu uso por possuir uma operação muito lenta

    // Adicionar uma cadeia a um prototype
    function Mamifero() {
      this.ehMamifero = sim;
    }

    function especiesMamiferos(_especies) {
      this.especies = _especies;
    }

    especiesMamiferos.prototype = new Mamifero();
    especiesMamiferos.prototype.constructor = especiesMamiferos;

    var gato = new especiesMamiferos('Felinos');
    console.log(gato.ehMamifero);  // retorna sim

    function Animal() {
      this.respira = 'sim';
    }

    Object.appendChain(gato, new Animal());
    console.log(gato.respira);  // retorna sim
    
    // Transformar um valor primitivo em uma instância de seu construtor e anexar sua cadeia a um prototype
    function MeuSimbolo() {
      this.ehSimbolo = 'sim';
    }

    var num1 = 17;
    console.log(typeof primo);  // retorna number

    var num2 = Object.appendChain(num1, new MeuSimbolo());

    console.log(num2);  // retorna 17
    console.log(num2.ehSimbolo);  // retorna yes
    console.log(typeof num2);  // retorna object
    
    // Anexar uma cadeia ao objeto Function.prototype e anexar uma nova função a essa cadeia
    function Pessoa(_nome) {
      this.nome = _nome;
    }

    var fulano = Object.appendChain(new Pessoa('Fulano'), 'console.log("Ollá!!");');

    console.log(fulano.nome);  // retorna 'Fulano'
    fulano();  // retorna Ollá!! 

# Object.values()
Retorna um array cujos elementos são os valores das propriedades enumeradas encontradas no objeto
	
    let usuario = {
      nome:'Fulano',
      idade: 30
    };

	console.log(Object.values(usuario));  // retorna ["Fulano", 30]
	
	// ordena pela chave
	let nums = { 100: 'a', 2: 'b', 7: 'c' };
	console.log(Object.keys(nums));  // retorna ["b", "c", "a"]
