# Object.assign()
Copia os valores de todas as propriedades próprias enumeráveis ​​de um ou mais objetos de origem para um objeto de destino

    let obj1 = { a: 10, b: 10, c: 10 }; 
    let obj2 = { b: 20, c: 20 }; 
    let obj3 = { c: 30 }; 

    let novo_obj = Object.assign({}, obj1, obj2, obj3); 

    console.log(novo_obj); // retorna { a: 10, b: 20, c: 30 }

# Object.create()
Cria um novo objeto, utilizando um outro objeto existente como protótipo para o novo objeto a ser criado.

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
		
    console.log(obj);		// retorna {nome: "Fulano"}
    
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
      'casado': {
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
Congela um objeto, outro código não pode excluir ou alterar nenhuma propriedade. Impede que novas propriedades sejam adicionadas a ele; impede que as propriedades existentes sejam removidas; e impede que propriedades existentes, ou sua inumerabilidade, configurabilidade, ou capacidade de escrita sejam alteradas. Em essência o objeto é efetivamente imutável. O método retorna o objeto congelado.

    ....
    ....

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

# Object.values()
Retorna um array cujos elementos são os valores das propriedades enumeradas encontradas no objeto
	
    let usuario = {
      nome: "Fulano",
      idade: 30
    };

	console.log(Object.values(user)); // retorna ["Fulano", 30]
	
	// ordena pela chave
	let nums = { 100: 'a', 2: 'b', 7: 'c' };
	console.log(Object.keys(nums)); // retorna ["b", "c", "a"]
    
 # Object.hasOwnProperty()
 Retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão
    
    let usuario = {
      nome: "Fulano",
      idade: 30
    };
    
    console.log(user.hasOwnProperty('nome'));   // retorna true
    
    let paises = {
      pais: 'Brasil'
    };

    for(let ps in paises) {
      if (paises.hasOwnProperty(ct)) console.log(countries[ct]); // retorna Brasil
      else console.log(ps); // retorna qualquer outra coisa
    }
    
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
    
