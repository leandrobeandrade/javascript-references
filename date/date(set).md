## setDate() 
Define o dia do mês de um objeto de data:

    let data = new Date();
    data.setDate(15);
    
    let d = new Date('January 17, 01:15:00');
    d.setDate(15);
    console.log(d);  // retorna January 15, 01:15:00

## setFullYear()
Define o ano de um objeto de data:

    let data = new Date();
    data.setFullYear(2020);
    
    let data = new Date();
    data.setFullYear(data.getFullYear(), data.getMonth() - 6);    
    console.log(data);  // retorna 6 meses atrás

## setHours()
Define a hora de um objeto de data:

    let data = new Date();
    data.setHours(17);
    
    let data = new Date();
    data.setHours(data.getHours() - 48);
    console.log(data);  // retorna 2 dias atrás 

## setMilliseconds()
Define os milissegundos de um objeto de data:

    let data = new Date();
    data.setMilliseconds(192);
    let milSeg = data.getMilliseconds();  // retorna 192

## setMinutes()
Define os minutos de um objeto de data:

    let data = new Date();
    data.setMinutes(17);
    console.log(data);
    
    let data = new Date();
    data.setMinutes(data.getMinutes() - 90);
    console.log(data);  // retorna 1 hora e 30 minutos atrás

## setMonth()
Define o mês de um objeto de data:

    let data = new Date();
    data.setMonth(4);

## setSeconds()
Define os segundos de um objeto de data:

    let data = new Date();
    data.setSeconds(35);

## setTime()
Define uma data para um número especificado de milissegundos após/antes de 1 de janeiro de 1970: 

    let data = new Date();
    data.setTime(1332403882588);
    console.log(data);
