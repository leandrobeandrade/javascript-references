# Object.assign()
Copia os valores de todas as propriedades próprias enumeráveis ​​de um ou mais objetos de origem para um objeto de destino

    let obj1 = { a: 10, b: 10, c: 10 }; 
    let obj2 = { b: 20, c: 20 }; 
    let obj3 = { c: 30 }; 

    let novo_obj = Object.assign({}, obj1, obj2, obj3); 

    console.log(novo_obj); // retorna { a: 10, b: 20, c: 30 }

# Object.create()
Cria um novo objeto, utilizando um outro objeto existente como protótipo para o novo objeto a ser criado

    let obj1 = { a: 10, b: 20 };
    let obj2 = Object.create(obj1);
    
    console.log(obj2.a +' - '+ obj2.b);  // retorna 10 - 20
    
# Object.defineProperty()
Define uma nova propriedade diretamente em um objeto, ou modifica uma propriedade já existente em um objeto, e retorna o objeto

    let obj = {};
    Object.defineProperty(obj, 'nome', {
      value: 'Fulano',
      writable: true,     // Quando true o valor poderá ser alterado posteriormente
      enumerable: true,   // Quando true define se ela deve ser exibida em uma repetição for...in e por Object.keys()  
      configurable: true  // Quando true controla se uma propriedade pode ser deletada do objeto, e se seus atributos 
                          // (exceto a mudança de writable para false) podem ser alterados
    });
		
    console.log(obj);     // retorna {nome: "Fulano"}
    
# Object.defineProperties()
Define uma nova propriedade ou modifica uma existente no objeto, retornando o objeto

    let obj = {};
    Object.defineProperties(obj, {
      'nome': {
        value: 'Fulano',
	    writable: true
      },
      'idade': {
        value: 36,
        writable: false		// o valor não pode ser alterado
      },
      casado': {
        value: true,
        writable: false		// o valor não pode ser alterado
      }
    });
		
    console.log(obj);		// retorna {nome: "Fulano", idade: 36, casado: true}
    
# Object.entries()	
Retorna um array cujos elementos são também arrays correspondentes aos pares de propriedades [key, value] enumeráveis encontrados diretamente sobre o objeto

    let usuario = {
      nome: "Fulano",
      idade: 30
    };
	
	console.log(Object.entries(user)); // retorna ["nome", "Fulano"] ["idade", 30]
	
	console.log(Object.fromEntries(Object.entries(user)));	// retorna {nome: "Fulano", idade: 30}

	let idadeDobrada = Object.fromEntries(Object.entries(user).map(([key, value]) => [key, value * 2]));

	console.log(idadeDobrada.idade); // retorna {idade: 60}
  
# Object.freeze()
Congela um objeto, outro código não pode excluir ou alterar nenhuma propriedade. Impede que novas propriedades sejam adicionadas a ele; impede que as propriedades existentes sejam removidas; e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado

    var obj = {
  	  prop: function() {},
  	  nome: 'Fulano'
    };

	// Novas propriedades podem ser adicionadas, propriedades existentes podem ser alteradas ou removidas
	obj.nome = 'Ciclano';
	obj.idade = 36;
	delete obj.prop;

	// Tanto o objeto que está sendo passado, bem como o objeto retornado será congelado.
	// É desnecessário salvar o objeto retornado para congelar o objeto original.
	var o = Object.freeze(obj);

	o === obj; // true
	Object.isFrozen(obj); // true

	// De agora em diante qualquer alteração irá falhar
	obj.nome = 'Beltrano'; // silenciosamente não faz nada
	obj.msg = 'Qualquer coisa!'; // silenciosamente não adiciona a propriedade

	// ...e em modo strict tais tentativas irão lançar TypeErrors
	function fail(){
  	  'use strict';
  	  obj.nome = 'Belciclano'; // throws um TypeError
	  delete obj.nome; // throws um TypeError
	  obj.idade = 30; // throws um TypeError
	}

	fail();

	// As tentativas de alteração através de Object.defineProperty também irão lançar
	Object.defineProperty(obj, 'male', { value: true }); // throws um TypeError
	Object.defineProperty(obj, 'name', { value: 'Ciclano' }); // throws um TypeError
	
	// Valores do tipo objeto, em um objeto congelado, podem ser alterados ou seja, freeze age de maneira rasa
	obj1 = {
  	  interno: {}
	};

	Object.freeze(obj1);
	obj1.interno.nome = 'Fulano';
	console.log(obj1.interno.nome) // retorna 'Fulano'
	
# Object.fromEntries() 
Transforma uma lista de pares chave-valor em um objeto

	const entradas = new Map([
  	  ['nome', 'Fulano'],
  	  ['idade', 42]
	]);

	const obj = Object.fromEntries(entradas);

	console.log(obj);  // retorna { nome: "Fulano", idade: 42 }
	
# Object.getOwnPropertyDescriptor() 
Retorna um descritor de propriedades para uma propriedade (isto é, uma diretamente presente, e não pertencente ao objeto por força da cadeia de protótipo do objeto) de um dado objeto

	let a, b;

	a = { 
	  get func() { 
	    return 17; 
	  } 
	};
	b = Object.getOwnPropertyDescriptor(a, 'func');
	// b é { configurable: true, enumerable: true, get: /*A função getter*/, set: undefined }

	a = { idade: 42 };
	b = Object.getOwnPropertyDescriptor(a, 'idade');
	// b é { configurable: true, enumerable: true, value: 42, writable: true }

	a = {};
	Object.defineProperty(a, 'cep', { value: 8675309, writable: false, enumerable: false });
	b = Object.getOwnPropertyDescriptor(a, 'cep');
	// b é { value: 8675309, writable: false, enumerable: false, configurable: false }
	
# Object.getOwnPropertyDescriptors() 
Retorna todas as descrições próprias da propriedade de um dado objeto, permite examinar a descrição precisa de todas as propriedades de um objeto

	// Criando um clone superficial
	Object.create(
  	  Object.getPrototypeOf(obj), 
  	  Object.getOwnPropertyDescriptors(obj)
	);
	
	// Criando uma subclasse
	function superclasse() {}
	superclasse.prototype = {
  	  // Definir seus métodos e propriedades aqui
	};
	function subclass() {}
	subclass.prototype = Object.create(
  	  superclass.prototype, {
	    // Definir seus métodos e propriedades aqui
  	  }
	);

# Object.getOwnPropertyNames()
  Retorna um vetor com todas as propriedades (enumeráveis ou não) encontradas diretamente em um dado objeto
  
    let obj = { 0: 'a', 1: 'b', 2: 'c' };
    console.log(Object.getOwnPropertyNames(obj).sort()); // retorna ["0", "1", "2"]
    
    Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {  
      console.log(val + ' -> ' + obj[val] + 'index ->' + idx);
      /* retorna 0 -> a - index -> 0 
                 1 -> b - index -> 1 
                 2 -> c - index -> 2 
                 3 -> d - index -> 3 
                 4 -> e - index -> 4 */
      })
     
# Object.getOwnPropertySymbols() 
Retorna uma array com todas propriedades de símbolo encontradas diretamente em um determinado objeto dado

	const obj = {};
	const a = Symbol('a');
	const b = Symbol.for('b');

	obj[a] = 'localSymbol';
	obj[b] = 'globalSymbol';

	const objSymbols = Object.getOwnPropertySymbols(obj);
	console.log(objectSymbols.length);  // retorna 2
	console.log(objectSymbols.length);  // retorna [Symbol(a), Symbol(b)]
	
# Object.getPrototypeOf() 
Retorna o prototype (isto é, o valor da propriedade interna [[Prototype]]) do objeto especificado

	let proto = {};
	let obj = Object.create(proto);
	Object.getPrototypeOf(obj) === proto;  // retorna true
	
# Object.hasOwnProperty()
 Retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão
    
    let usuario = {
      nome: 'Fulano',
      idade: 30
    };
    
    console.log(usuario.hasOwnProperty('nome'));   // retorna true
    
    let paises = {
      pais: 'Brasil'
    };

    for(let ps in paises) {
      if (paises.hasOwnProperty('pais')) console.log(paises[ps]);  // retorna Brasil
      else console.log(ps);  // retorna pais (chave do objeto)
    }
    
    // Maneira de verificar a existência de propriedades com in
    console.log('pais' in paises);   // retorna true
