# bind()

Cria uma nova função que, quando chamada, tem sua palavra-chave **`this`** definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada, tendo seu objetivo principal como sendo a alteraração do contexto this de uma função independente de onde a mesma esteja sendo chamada.

    this.x = 9; //this aqui se refere ao objeto global "window" do navegador
    var module = {
      x: 81,
      getX: function() { 
        return this.x; 
      }
    };

    module.getX(); // retorna 81

    var retrieveX = module.getX;
    retrieveX();  // retorna 9 - a função foi invocada no escopo global

    // Criando uma nova função com 'this' vinculada ao módulo
    var boundGetX = retrieveX.bind(module);
    boundGetX(); // 81

https://tableless.com.br/explorando-metodo-bind-em-javascript/
