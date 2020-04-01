# Objetos
São usados para armazenar coleções codificadas de vários dados e entidades mais complexas. Em JavaScript, os objetos penetram em quase todos os aspectos da linguagem.
Um objeto pode ser criado com colchetes {…} com uma lista opcional de propriedades. Uma propriedade é um par "chave: valor", em que chave é uma sequência (também chamada de "nome da propriedade") e o valor pode ser qualquer coisa
    
    // Objeto exemplo
    let users = {
        primeiroNome: 'Fulano',
        ultimoNome: 'Ciclano',
        nomeCompleto: function(){
            return `${this.primeiroNome} ${this.ultimoNome}`
        }
    }

## Setando valores no objeto
    
    users.primeiroNome = 'Beltrano';
    console.log(users); // retorna {primeiroNome: "Beltrano", ultimoNome: "Ciclano", nomeCompleto: ƒ}
    
    let user = users;
    user.primeiroNome = 'Maria';
    console.log(user); // retorna {primeiroNome: "Maria", ultimoNome: "Ciclano", nomeCompleto: ƒ}
    console..log(users); // retorna {primeiroNome: "Beltrano", ultimoNome: "Ciclano", nomeCompleto: ƒ}

## Deletando valores no objeto

	delete users['ultimoNome'];
	console.log(users);  // retorna {primeiroNome: "Fulano", nomeCompleto: ƒ}
	
	delete users.primeiroNome;
	console.log(users);  // retorna {fullNome: ƒ}

## Procurando chaves no objeto

    console.log("primeiroNome" in users ); // retorna true
    console.log("algo" in users ); // retorna false

## Percorrendo valores no objeto
    
    for(let val in users) console.log(val); // retorna  primeiroNome ultimoNome fullNome
    for(let val in users) console.log(users[val]); // retorna  Fulano Ciclano function(){...}

	// ordenando pelas chaves
	let codes = {
  	    "49": "Germany",
  	    "41": "Switzerland",
  	    "44": "Great Britain",
	    "1": "USA"
	};

	for(let code in codes) console.log(code); // retorna 1, 41, 44, 49

## comparando valores entre objetos

    let a = {};
    let b = a; // copia a referência na memória

    console.log(a == b); // true, ambas variáveis referenciam o mesmo objeto
    console.lo(a === b); // true

    let a = {};
    let b = {}; // dois objetos independentes

    console.log(a == b); // false

## clonando e mesclando 

    let clone = {};

    // copia todas as propriedades para clone
    for(let key in users) {
      clone[key] = users[key];
    }
    
    console.log(users); // retorna {primeiroNome: "Fulano", ultimoNome: "Ciclano", fullNome: ƒ}
    console.log(clone); // retorna {primeiroNome: "Fulano", ultimoNome: "Ciclano", fullNome: ƒ}

    // clone agora é totalmente independente
    clone.nome = "Ciclano";

    console.log(user.nome);	// retorna Fulano
    console.log(clone.nome); // retorna Ciclano


    let user = {
      nome: "Fulano",
      tamanhos: {
        altura: 182,
        largura: 50
      }
    };

    let clone = Object.assign({}, user);

    console.log(user.sizes === clone.sizes); // retorna true

    // user e clone compartilham os mesmos dados
    user.tamanhos.largura++;  // muda o valor da propriedade apenas em um local
    console.log(clone.tamanhos.largura); // retorna 51
