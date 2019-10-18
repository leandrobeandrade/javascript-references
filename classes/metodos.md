## Métodos

    class Nome {
      constructor(nome) {
        this.nomePessoa = nome;
      }
      dizerNome() {
        return 'Eu sou: ' + this.nomePessoa;
      }
    }

    const nome = new Nome('Fulano');
    console.log(nome.dizerNome());                // Eu sou: Fulano 

## Métodos com parâmetros

    class Nome {
      constructor(nome) {
        this.nomePessoa = nome;
      }
      dizerNome(msg) {
        return msg + ' Eu sou: ' + this.carname;
      }
    }

    const nome = new Nome('Fulano');
    console.log(nome.dizerNome('Olá...'));        // Olá... Eu sou: Fulano

## Métodos estáticos 

São chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada.

    class Ponto {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

      static distancia(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.sqrt(dx*dx + dy*dy);
      }
    }

    const p1 = new Ponto(5, 5);
    const p2 = new Ponto(10, 10);

    console.log(Ponto.distancia(p1, p2));       // Chama o método após a instanciação da classe

    console.log(p1.distancia);                  // undefined
    console.log(p2.distancia);                  // undefined
    
 ## Métodos por protótipos
 
    function Nome(nome, sobrenome) {
      this.nomePessoa = nome;
      this.sobrenomePessoa = sobrenome;
    }

    // Adiciona um método ao construtor
    Nome.prototype.dizerNome = function() {
      return `${this.nomePessoa} ${this.sobrenomePessoa} disse olá...`;
    }
    
    const nome = new Nome('Fulano', 'de Tal');
    console.log(nome.dizerNome())               // Fulano de Tal disse olá...
