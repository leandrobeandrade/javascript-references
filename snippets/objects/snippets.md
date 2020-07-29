Acessando e modificando valores de objetos    
    
    class minhaClasse {
      constructor(valor1, valor2) {
        this.valor1 = valor1
        this.valor2 = valor2
        const self = this;

        this.valores = {
          get valor1() {
            return self.valor1;
          },
          get valor2() {
            return self.valor2;
          }
        }
      }
    }

    var meuObjeto = new minhaClasse(2, 4)
    console.log(meuObjeto.valor1, meuObjeto.valores)

    meuObjeto.valor1++; // ou meuObjeto.valor1 = 3
    // log esperado 3 {"valor1": 3, "valor2": 4}
    console.log(meuObjeto.valor1, meuObjeto.valores)
    meuObjeto.valores.valor1 = 200;
    console.log(meuObjeto.valores); // dá  {"valor1": 3, "valor2": 4}
