# toExponential()
 Retorna uma string representando o objeto Number por meio de notação exponencial

    let numero = 1000; 
   
    console.log(numero.toExponential());    // retorna 1e+3
    console.log(numero.toExponential(2));   // retorna 1.00e+3
    console.log(numero.toExponential(3));   // retorna 1.000e+3

# toFixed()
Formata um número utilizando notação de ponto fixo

    let numero = 10.3;
    
    console.log(numero.toFixed());   // retorna 10
    console.log(numero.toFixed(2));  // retorna 10.30
    console.log(numero.toFixed(3));  // retorna 10.300

# toPrecision()
Retorna uma string que representa o valor do objeto Number com uma precisão especí.

    let numero = 9.656;

    console.log(numero.toPrecision());     // retorna 9.656 
    console.log(numero.toPrecision(2));    // retorna 9.7
    console.log(numero.toPrecision(3));    // retorna 9.66
