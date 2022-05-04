# Declarações de Classe

Declara-se uma classe utilizano a palavara reservada **`class`** seguido do seu nome e do seu corpo. Declarações de classes não sofrem [hoisted](https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting) ao contrário de declarações de funções, ou seja, primeiro deve se declarar sua classe para só então acessá-la, pois do contrário o código a seguir irá lançar uma exceção:

    class Nome {
       constructor(nome, sobrenome) {
          this.nome = nome;
          this.sobrenome = sobrenome;
       }
    }
    
    let nome = new Nome('Fulano', 'de Tal')
    console.log(nome);  // retorna Fulano de Tal
 
>
    
    let nome = new Nome();      // Erro de referência (ReferenceError)

    class Nome { ... }
    
# Expressões de Classe

Podem possuir `nomes` ou não `(anônimas)`. O nome dado para uma expressão de classe é local ao corpo da classe. Também não sofrem hoisted:

     // sem nome
     var Nome = class {
       constructor(nome, sobrenome) {
          this.nome = nome;
          this.sobrenome = sobrenome;
       }
    }

    // nomeada
    let Nome = class _Nome {
       constructor(nome, sobrenome) {
          this.nome = nome;
          this.sobrenome = sobrenome;
          console.log(_Nome.name)
       }
    }
    
    let nome = new Nome('Fulano', 'de Tal')
    console.log(nome);  // retorna {nome: 'Fulano', sobrenome: 'de Tal'}
