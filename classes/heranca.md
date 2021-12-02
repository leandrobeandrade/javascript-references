## Heranças

A palavra-chave **extends** é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.
  
    class Animal { 
      constructor(animal, barulho) {
        this.tipoAnimal = animal;
        this.tipoBarulho = barulho;
      }
  
      tipo() {
        console.log(this.tipoAnimal);
      }
    }

    class Sons extends Animal {
      barulhos() {
        console.log(`${this.tipoAnimal} emitem um barulho tipo ${this.tipoBarulho}.`);
      }
    }

    let animal = new Animal('Cachorro', 'latidos');
    let sons = new Sons('Gatos', 'miados');
    
    animal.tipo();  // retorna Cachorro
    animal.barulhos();  // retorna Gatos emitem um barulho tipo miados.
    

## Palavra chave super()

Se existir um construtor nas subclasses, é necessário primeiro chamar super() antes de usar a keyword **this**.

    class Automovel { 
      constructor(marca, modelo) {
        this.auto = marca;
        this.autoTipo = modelo;
      }
  
      tipo() {
        console.log(`${this.auto} é do tipo ${this.autoTipo}.`);
      }
    }

    class Carro extends Automovel {
      constructor(auto, qtdLugares) {
        super(auto)
        this.lug = qtdLugares;
      }
      
      lugares() {
        console.log(`${this.auto} possui ${this.lug} lugares.`);
      }
    }

    let auto1 = new Automovel('Ford', 'SUV');
    let auto2 = new Carro('Ford', 6);
    
    auto1.tipo();  // retorns Ford é do tipo SUV.
    auto2.lugares();  // retorna Ford possui 6 lugares.
    
A palavra-chave super também pode ser utilizada para chamar **métodos (funções)** que pertencem ao pai do objeto (classe pai).

    class Gato {
      constructor(nome) {
        this.nome = nome;
      }

      falar() {
        console.log(`${this.nome} faça barulho.`);
      }
    }

    class Leao extends Gato {
      falar() {
        super.falar();
        console.log(`${this.nome} roars.`);
      }
    }

    let leao = new Leao('Fuzzy');  // retorna Fuzzy faça barulho.
    leao.falar();  // retorna Fuzzy roars.

## Herança de um objeto literal Javascript

    let Animal = {
      barulho() {
        console.log(`${this.animalTipo} faça barulho.`);
      }
    };

    class Cachorro {
      constructor(animal) {
        this.animalTipo = animal;
      }
    }

    Object.setPrototypeOf(Cachorro.prototype, Animal); 

    let cachorro = new Cachorro('Mitzie');
    cachorro.barulho();  // retorna Mitzie faça barulho.
    
