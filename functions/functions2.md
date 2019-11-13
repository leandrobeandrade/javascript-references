# Funções invocadas por objetos

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

# Funções invocadas pelo método call()

    let getModelo = function(ano) {
        return this.modelo +' '+ ano
    }

    let carro = {
        marca: 'Ford',
        modelo: 'Mustang',
        getModelo: getModelo
    }

    console.log(getModel.call(carro, 2018));  // retorna Mustang 2018

# Funções invocadas pelo método apply()

    let getModelo = function(ano) {
        return this.modelo +' '+ ano
    }

    let carro = {
        marca: 'Ford',
        modelo: 'Mustang',
        getModelo: getModelo
    }

    getModelo.apply(carro, [2018]);   // retorna Mustang 2018
