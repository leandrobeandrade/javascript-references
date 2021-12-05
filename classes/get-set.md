## Métodos getters/setters

São utilizados principalmente quando se quer manipular os valores que os métodos retornam antes de obtê-los ou defini-los.

    class Pessoa {
      constructor(nome) {
        this.nomePessoa = nome;
      }
      
      get _nomes() {
        return this.nomePessoa.toUpperCase();
      }
      
      set _nomes(valor) {
        this.nomePessoa = valor + ' ---';
      }
    }

    const nomes = new Pessoa("Fulano");
    console.log(nomes._nomes);  // retorna FULANO

    nomes._nomes = "Ciclano";
    console.log(nomes._nomes);  // retorna CICLANO ---
