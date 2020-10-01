# parseFloat()
Converte a string recebida como argumento e a retorna como um número de ponto flutuante

    let numero = '10';
    
    console.log(parseFloat(numero));    // retorna 10
    console.log(parseFloat('10.00'));   // retorna 10
    console.log(parseFloat('10.33'));   // retorna 10.33
    console.log(parseFloat('10,33'));   // retorna 10
    console.log(parseFloat('10 20'));   // retorna 10
    console.log(parseFloat(' 10 '));    // retorna 10
    console.log(parseFloat('10text'));  // retorna 10
    console.log(parseFloat('text10'));  // retorna NAN
 
 # parseInt()
 Analisa um argumento string e retorna um inteiro na base especificada
 
    let numero = '10';
    
    console.log(parseInt(numero));    // retorna 10
    console.log(parseInt('10.00'));   // retorna 10
    console.log(parseInt('10.33'));   // retorna 10
    console.log(parseInt('10,33'));   // retorna 10
    console.log(parseInt('10 20'));   // retorna 10
    console.log(parseInt(' 10 '));    // retorna 10
    console.log(parseInt('10text'));  // retorna 10
    console.log(parseInt('text10'));  // retorna NAN
    console.log(parseInt('10', 36));  // retorna 36
    console.log(parseInt('10', 37));  // retorna NAN
 
 # Number()
 Converte diferentes tipos de dados em número

    let numero = true;
    
    console.log(Number(numero));        // retorna 1
    console.log(Number(false));         // retorna 0
    console.log(Number(new Date()));    // retorna 1573047665988
    console.log(Number('10'));          // retorna 10
    console.log(Number(' 10 '));        // retorna 10
    console.log(Number('10 20'));       // retorna NAN
    console.log(Number('text'));        // retorna NAN
    

 # valueOf()
 Retorna o valor primitivo
 
    let numero = '10';
    
    console.log(valueOf(numero));       // retorna 10
    console.log((10 + 10).valueOf());   // retorna 20
