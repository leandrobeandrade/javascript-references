> Objetos literais ao invés de switch

    const getDay = day => {
      const days = {
        1: 'Domingo',
        2: 'Segunda',
        3: 'Terça',
        4: 'Quarta',
        5: 'Quinta',
        6: 'Sexta',
        7: 'Sábado'
      }

      return day in days ? days[day] : 'Bom dia!'
    }

    getDay(3);  // Terça
    
> Objetos literais ao invés de condicionais

    // XX
    let elements = (color) => {
      if (color == 'blue') return '#00f'
      else if (color == 'black') return '#000'
      else if (color == 'red') return '#f00'
      else return '#fff'
    }

    // OK
    let setElements = (color) => {
      let palette = {
        blue: '#00f'
        black: '#000'
        red: '#f00'
      }

      return palette[color] || '#fff';
    }

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
    console.log(classe.vals);   // retorna { "val1": 6, "valor2": 6 }
