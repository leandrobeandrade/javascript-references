## Protótipo 
O construtor de protótipo permite adicionar novas propriedades e métodos ao objeto Date().
Ao construir uma propriedade, TODOS os objetos de data receberão a propriedade e seu valor, como padrão. Ao construir um método, TODOS os objetos de data terão esse método disponível.
Permite adicionar propriedades e métodos a um objeto:

    Date.prototype.myMet = function() {
      if (this.getMonth() == 0){this.myProp = 'Janeiro'};
      if (this.getMonth() == 1){this.myProp = 'Fevereiro'};
      if (this.getMonth() == 2){this.myProp = 'Março'};
      if (this.getMonth() == 3){this.myProp = 'Abril'};
      if (this.getMonth() == 4){this.myProp = 'Maio'};
      if (this.getMonth() == 5){this.myProp = 'Junho'};
      if (this.getMonth() == 6){this.myProp = 'Julho'};
      if (this.getMonth() == 7){this.myProp = 'Agosto'};
      if (this.getMonth() == 8){this.myProp = 'Setembro'};
      if (this.getMonth() == 9){this.myProp = 'Outubro'};
      if (this.getMonth() == 10){this.myProp = 'Novembro'};
      if (this.getMonth() == 11){this.myProp = 'Dezembro'};
    };

    function myFunction() {
      let data = new Date();
      data.myMet();
      return(data);
    }
    
    myFunction();  // Retorna uma data
    
## now()
Retorna o número de milissegundos desde a meia-noite de 1º de janeiro de 1970:

    let mil = Date.now();
    console.log(mil);

## parse()
Analisa uma string de data e retorna o número de milissegundos desde 1º de janeiro de 1970:

    let data = Date.parse('September 03, 2018');
    console.log(data);    // retorna 1535943600000
    
## toDateString()
Converte a parte da data de um objeto Date em uma string legível:

    let data = new Date();
    let strg = data.toDateString();
    console.log(strg);    // retorna a data atual como string - Mon Sep 03 2018
    
## toISOString()
Retorna a data como uma string, usando o padrão ISO:

    let data = new Date();
    let strg = data.toISOString();
    console.log(strg);
    
## toJSON()
Retorna a data como uma string, formatada como uma data JSON:

    let data = new Date();
    let json = data.toJSON();

## toLocaleDateString()
Retorna a parte da data de um objeto Date como uma string, usando convenções de localidade:

    let data = new Date();
    let strg = data.toLocaleDateString();
    console.log(strg);    // retorna a data atual como uma string - 03/09/2018

## toLocaleTimeString()
Retorna a parte da hora de um objeto Date como uma string, usando convenções de localidade:

    let data = new Date();
    let strg = data.toLocaleTimeString();
    console.log(strg)     // retorna a data atual como uma string

## toLocaleString()
Converte um objeto Date em uma string, usando convenções de localidade:

    let data = new Date();
    letrg = data.toLocaleString();
    console.log(strg);    // retorna a data atual como uma string

## toString()
Converte um objeto Date em uma string:

    let data = new Date();
    let strg = data.toString();
    console.log(strg);    // retorna Mon Sep 03 2018 15:46:42 GMT-0300 (Horário Padrão de Brasília)
    
## toTimeString()
Converte a parte de hora de um objeto Date em uma string:

    let data = new Date();
    let strg = data.toTimeString();
    console.log(strg);     retorna 15:48:41 GMT-0300 (Horário Padrão de Brasília)
    
## toUTCString()
Converte um objeto Date em uma string, de acordo com a hora universal:

    let data = new Date();
    let strg = data.toUTCString();
    console.log(strg);    // retorna Mon, 03 Sep 2018 18:51:06 GMT
    
## UTC()
Retorna o número de milissegundos em uma data desde a meia-noite de 1º de janeiro de 1970, de acordo com a hora UTC:

    let data = Date.UTC(2018, 08, 03);
    console.log(data);    // retorna 1535932800000
    
## valueOf()
Retorna o valor primitivo de um objeto Date:

    let data = new Date(); 
    let valor = data.valueOf();
