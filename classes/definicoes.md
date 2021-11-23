# Declarações de Classe

    class Nome {
       constructor(nome, sobrenome) {
          this.nome = nome;
          this.sobrenome = sobrenome;
       }
    }
    
    let nome = new Nome('Fulano', 'de Tal')
    console.log(nome);  // retorna Fulano de Tal
    
# Expressões de Classe

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
