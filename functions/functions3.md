# Funções fábricas
Tipo de função que praticamente serve como um gerador de objetos

    let criarPessoa = function(nome, idade) {
        return {
            nome: nome,
            idade: idade
        }
    }

    console.log(criarPessoa('Fulano', 50));  // retorna {"nome": "Fulano", "idade": 50}
    
    // OU
    
    function criarPessoa(nome, idade) {
        return {
            nome: nome,
            idade: idade
        }
    }
    
    let cPes = criarPessoa('Fulano', 50));
    console.log(cPes);  // retorna {"nome": "Fulano", "idade": 50}

# Funções construtoras
Tipo de função que necessita ser invocada com a palavra reservada **new** como na instanciação de uma classe

    let Pessoa = function(nome, idade) {     // OU function Pessoa(nome, idade) {...
        this.nome = nome,
        this.idade = idade
    }

    let pessoa = new Pessoa('Fulano', 50)
    console.log(pessoa);  // retorna {"nome": "Fulano", "idade": 50}
    
    pessoa.nacionalidade = 'brasileiro';    // seta uma nova propriedade com um valor
    console.log(pessoa.nacionalidade);  // retorna brasileiro
    console.log(pessoa);  // retorna {nome: "Fulano", idade: 50, nacionalidade: "brasileiro"}
    
    pessoa.usuario = function() {
        return `${this.nome} - ${this.idade}`;
    }
    console.log(pessoa.usuario());  // retorna Fulano - 50

---

    let fulano = {};
    Pessoa.call(fulano, 'Fulano', 50);

    console.log(fulano);  // retorna {"nome": "Fulano", "idade": 50}
