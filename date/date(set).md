## setDate() 
Define o dia do mês de um objeto de data:

    var data = new Date();
    data.setDate(15);
    
    var d = new Date("January 17, 01:15:00");
    d.setDate(15);    // retorna January 15, 01:15:00

## setFullYear()
Define o ano de um objeto de data:

    var data = new Date();
    data.setFullYear(2020);
    
    var data = new Date();
    data.setFullYear(data.getFullYear(), data.getMonth() - 6);    // retorna 6 meses atrás

## setHours()
Define a hora de um objeto de data:

    var data = new Date();
    data.setHours(17);
    
    var data = new Date();
    data.setHours(data.getHours() - 48);    // retorna 2 dias atrás 

## setMilliseconds()
Define os milissegundos de um objeto de data:

    var data = new Date();
    data.setMilliseconds(192);
    var milSeg = data.getMilliseconds();   // retorna 192

## setMinutes()
Define os minutos de um objeto de data:

    var data = new Date();
    data.setMinutes(17);
    console.log(data);
    
    var data = new Date();
    data.setMinutes(data.getMinutes() - 90);
    console.log(data);      // retorna 1 hora e 30 minutos atrás

## setMonth()
Define o mês de um objeto de data:

    var data = new Date();
    data.setMonth(4);

## setSeconds()
Define os segundos de um objeto de data:

    var data = new Date();
    data.setSeconds(35);
    console.log(data);


## setTime()
Define uma data para um número especificado de milissegundos após / antes de 1 de janeiro de 1970:

    var data = new Date();
    data.setTime(1332403882588);
    console.log(data);
