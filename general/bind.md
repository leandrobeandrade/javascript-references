# bind()

Cria uma nova função que, quando chamada, tem sua palavra-chave **`this`** definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada, tendo seu objetivo principal como sendo a alteraração do contexto this de uma função independente de onde a mesma esteja sendo chamada.

> Forma indireta de uso do bind()

    let cozinhar = function() {
        console.log(this.ingredientes);
    }

    let jantar = {
        prepraro: cozinhar,
        ingredientes: 'bacon'
    }
    jantar.preparo();   // retorna bacon

    let almoco = {
        preparo: cozinhar,
        ingredientes: 'salada'
    }
    almoco.almoco();    // retorna salada 

> Utilizando bind()

    this.x = 9;     // this aqui se refere ao objeto global "window" do navegador
    
    let modulo = {
      x: 81,
      getX: function() { 
        return this.x; 
      }
    };

    modulo.getX();  // retorna 81

    let escondeX = modulo.getX;
    escondeX();     // retorna 9 - a função foi invocada no escopo global

    // Criando uma nova função com 'this' vinculada ao módulo
    var ligaGetX = escondeX.bind(modulo);
    ligaGetX();     // 81

