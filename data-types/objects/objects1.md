# Objetos
São usados para armazenar coleções codificadas de vários dados e entidades mais complexas. Em JavaScript, os objetos penetram em quase todos os aspectos da linguagem.
Um objeto pode ser criado com colchetes {…} com uma lista opcional de propriedades assim também como instanciando um objeto com a assinatura **new Object()**. Uma propriedade é um par "chave: valor", em que chave é uma sequência (também chamada de "nome da propriedade") e o valor pode ser qualquer coisa:
    
    // Objeto exemplo
    let usuarios = {
        primeiroNome: 'Fulano',
        ultimoNome: 'de Tal',
        nomeCompleto: function(){
            return `${this.primeiroNome} ${this.ultimoNome}`
        }
    }

    let usuarios = new Object();
    usuarios.primeiroNome = 'Fulano';
    usuarios.ultimoNome = "de Tal";
    usuarios.ano = 1969;

## Setando valores no objeto
    
    usuarios.primeiroNome = 'Beltrano';
    console.log(usuarios); // retorna {primeiroNome: "Beltrano", ultimoNome: "Ciclano", nomeCompleto: ƒ}
    
    let usuario = usuarios;
    usuario.primeiroNome = 'Maria';
    console.log(usuario); // retorna {primeiroNome: "Maria", ultimoNome: "Ciclano", nomeCompleto: ƒ}
    console.log(usuario); // retorna {primeiroNome: "Beltrano", ultimoNome: "Ciclano", nomeCompleto: ƒ}

## Deletando valores no objeto

	delete usuarios['ultimoNome'];
	console.log(usuarios);  // retorna {primeiroNome: "Fulano", nomeCompleto: ƒ}
	
	delete usuarios.primeiroNome;
	console.log(usuarios);  // retorna {fullNome: ƒ}

## Procurando chaves no objeto

    console.log("primeiroNome" in usuarios ); // retorna true
    console.log("algo" in usuarios ); // retorna false

## Percorrendo valores no objeto
    
    for(let val in usuarios) console.log(val); // retorna  primeiroNome ultimoNome fullNome
    for(let val in usuarios) console.log(users[val]); // retorna  Fulano Ciclano function(){...}

	// ordenando pelas chaves
	let paises = {
  	    49: 'Alemanha',
  	    41: 'Suíça',
  	    44: 'Inglaterra',
	    1: 'Estados Unidos'
	};

	for(let pais in paises) console.log(pais); // retorna 1, 41, 44, 49

## Comparando valores entre objetos

    let a = {};
    let b = a; // copia a referência na memória

    console.log(a == b); // true, ambas variáveis referenciam o mesmo objeto
    console.lo(a === b); // true

    let a = {};
    let b = {}; // dois objetos independentes

    console.log(a == b); // false

## Clonando e mesclando 

    let clone = {};

    // copia todas as propriedades para clone
    for(let key in usuarios) {
      clone[key] = usuarios[key];
    }
    
    console.log(usuarios); // retorna {primeiroNome: "Fulano", ultimoNome: "Ciclano", fullNome: ƒ}
    console.log(clone); // retorna {primeiroNome: "Fulano", ultimoNome: "Ciclano", fullNome: ƒ}

    // clone agora é totalmente independente
    clone.nome = "Ciclano";

    console.log(usuario.nome);	// retorna Fulano
    console.log(clone.nome); // retorna Ciclano


    let usuario = {
      nome: 'Fulano',
      medidas: {
        altura: 182,
        largura: 50
      }
    };

    let clone = Object.assign({}, user);

    console.log(usuario.medidas === clone.medidas); // retorna true

    // usuario e clone compartilham os mesmos dados
    usuario.medidas.largura++;  // muda o valor da propriedade apenas em um local
    console.log(clone.medidas.largura); // retorna 51
