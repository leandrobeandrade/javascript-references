# Funções invocadas por objetos

> Também conhecidas como métodos, são funções que são invocadas a partir de objetos

    let carro = {
        marca: 'Ford',
        modelo: 'Mustang',
        getModelo: function() {
            return this.modelo
        }
    }

    console.log(carro.getModelo());  // retorna Mustang

----

    let getModelo = function() {
        return this.modelo
    }

    let carro = {
        marca: 'Ford',
        modelo: 'Mustang',
        getModelo: getModelo
    }

    console.log(carro.getModel());  // retorna Mustang

# Método call()

> Com este método, pode-se escrever um método que pode ser usado em diferentes objetos. Pode receber argumentos que são passados separadamente

    let getModelo = function(ano) {
        return this.modelo +' '+ ano
    }

    const carro1 = {
        marca: 'Ford',
        modelo: 'Mustang',
        getModelo: getModelo
    }
    
    
    const carro2 = {
        marca: 'BMW',
        modelo: 'BMW 320i',
        getModelo: getModelo
    }

    console.log(getModelo.call(carro1, 2018));  // retorna Mustang 2018
    console.log(getModelo.call(carro2, 2018));  // retorna BMW 320i 2022
    
---

    let pessoa = {
      nomeCompleto: function(cidade, pais) {
        return this.primeiroNome + ' ' + this.ultimoNome + ',' + cidade + ',' + pais;
      }
    }

    const pessoa1 = {
      primeiroNome: 'John',
      ultimoNome: "Doe"
    }
    
    const pessoa2 = {
      primeiroNome: 'Mary',
      ultimoNome: 'Doe'
    }

   console.log(pessoa.nomeCompleto.call(pessoa1, 'Oslo', 'Norway'));    // retorna John Doe Oslo Norway
   console.log(pessoa.nomeCompleto.call(pessoa2, 'Beijing', 'China'));    // retorna Mary Doe Beijing China

# Método apply()

> Com este método, pode-se escrever um método que pode ser usado em diferentes objetos. Pode receber vários argumentos passados em forma de array

    let getModelo = function(ano) {
        return this.modelo +' '+ ano
    }

    let carro1 = {
        marca: 'Ford',
        modelo: 'Mustang',
        getModelo: getModelo
    }
    
    let carro2 = {
        marca: 'BMW',
        modelo: 'BMW 320i',
        getModelo: getModelo
    }

    console.log(getModelo.apply(carro1, [2018]));   // retorna Mustang 2018
    console.log(getModelo.apply(carro2, [2022]));   // retorna BMW 320i 2022
    
---
    
    
    let pessoa = {
      nomeCompleto: function(cidade, pais) {
        return this.primeiroNome + ' ' + this.ultimoNome + ',' + cidade + ',' + pais;
      }
    }

    const pessoa1 = {
      primeiroNome: 'John',
      ultimoNome: 'Doe'
    }
    
    const pessoa2 = {
      primeiroNome: 'Mary',
      ultimoNome: 'Doe'
    }

    console.log(pessoa.nomeCompleto.call(pessoa1, ['Oslo', 'Norway']));    // retorna John Doe Oslo Norway
    console.log(pessoa.nomeCompleto.call(pessoa2, ['Beijing', 'China']));    // retorna Mary Doe Beijing China
    
# Método bind()

> Com este método, um objeto pode pegar emprestado um método de outro objeto.

    const pessoa = {
      primeiroNome: 'John',
      ultimoNome: 'Doe',
      nomeCompleto: function() {
        return this.primeiroNome + ' ' + this.ultimoNome;
      }
    }

    const membro = {
      primeiroNome: 'Hege',
      ultimoNome: 'Nilsen',
    }

    let nomeCompleto = pessoa.nomeCompleto.bind(membro);
    console.log(nomecompleto);  // retorna Hege Nilsen

