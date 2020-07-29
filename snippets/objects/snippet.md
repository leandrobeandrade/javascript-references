> Acessando e modificando valores de objetos
    
    class Classe {
      constructor(val1, val2) {
        this.val1 = val1
        this.val2 = val2
        const self = this;      // referencia o this

        this.vals = {           // cria um novo objeto com métodos get
          get val1() {
            return self.val1;
          },
          get val2() {
            return self.val2;
          }
        }
      }
    }

    let classe = new Classe(5, 6)
    console.log(classe.val1)    // retorna 5
    console.log(classe.vals)    // retorna { "val1": 5, "val2": 6 }

    classe.val1++;
    console.log(classe.val1)    // retorna 6
    console.log(classe.vals)    // retorna { "val1": 6, "val2": 6 }
    
    classe.vals.val1 = 200;     // não surge efeito, val1 não pode ser acessado por vals
    console.log(classe.val1)    // retorna 6
    console.log(classe.vals);   // retorna { "val1": 6, "valor2": 6}
