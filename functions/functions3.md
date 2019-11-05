# Funções fábricas

    let criarPessoa = function(nome, idade) {
        return {
            nome: nome,
            idade: idade
        }
    }

    console.log(criarPessoa('Fulano', 50));  // retorna {"nome": "Fulano", "idade": 50}

# Funções construtoras

    let Pessoa = function(nome, idade) {
        this.nome = nome,
        this.idade = idade
    }

    let pessoa = new Pessoa('Fulano', 50)
    console.log(pessoa);  // retorna {"nome": "Fulano", "idade": 50}

---

    let fulano = {};
    Pessoa.call(fulano, 'Fulano', 50);

    console.log(fulano);  // retorna {"nome": "Fulano", "idade": 50}

# Closures

    let msg = function() {
        let mensagem = 'Testando Javascript';
        return function() {
            return mensagem
        }
    }

    let mostra = msg();
    console.log(mostra());  // retorna Testando Javascript
