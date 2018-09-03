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


## setMilliseconds()
Define os milissegundos de um objeto de data:


## setMinutes()
Define os minutos de um objeto de data:


## setMonth()
Define o mês de um objeto de data:


## setSeconds()
Define os segundos de um objeto de data:


## setTime()
Define uma data para um número especificado de milissegundos após / antes de 1 de janeiro de 1970:

