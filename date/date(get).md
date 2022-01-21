## getDate() 
Retorna o dia do mês (de 1 a 31):

    let data = new Date();
    let dia = data.getDate();
    console.log(dia);   // retorna o dia atual
    
    let data = new Date("January 17, 1984 01:15:00");
    let dia = data.getDate()
    console.log(dia);   // retorna o dia atual especificado 17

## getDay()
Retorna o dia da semana (de 0 a 6):

    let data = new Date();
    let dia = data.getDay();
    console.log(dia);   // retorna o dia da semana atual
    
    let data = new Date();
    let diaSemana = new Array(7);
    diaSemana[0] = 'Domingo';
    diaSemana[1] = 'Segunda';
    diaSemana[2] = 'Terça';
    diaSemana[3] = 'Quarta';
    diaSemana[4] = 'Quinta';
    diaSemana[5] = 'Sexta';
    diaSemana[6] = 'Sábado';

    let dia = diaSemana[data.getDay()];
    console.log(dia);   // retorna o dia da semana atual

## getFullYear()
Retorna o ano:

    let data = new Date();
    let ano = data.getFullYear();
    console.log(ano);   // retorna o ano atual
    
    let data = new Date("January 17, 1984 01:15:00");
    let ano = data.getFullYear()
    console.log(ano);   // retorna o ano atual especificado 1984

## getHours()
Retorna a hora (de 0 a 23):

    let data = new Date();
    let hora = data.getHours();
    console.log(hora);   // retorna a hora atual
    
    let data = new Date("January 17, 1984 01:15:00");
    let hora = data.getHours();
    console.log(hora);    // retorna 1

## getMilliseconds()
Retorna os milissegundos (de 0 a 999):

    let data = new Date();
    let miSeg = data.getMilliseconds();
    console.log(miSeg);   // retorna os milisegundos atual
    
    let data = new Date("January 17, 1984 01:15:00:526");
    let miSeg = data.getMilliseconds();
    console.log(miSeg);    // retorna 526

## getMinutes()
Retorna os minutos (de 0 a 59):

    let data = new Date();
    let minu = data.getMinutes();
    console.log(minu);   // retorna os minutos atual
    
    let data = new Date("January 17, 1984 01:15:00:526");
    let minu = data.getMinutes();
    console.log(minu);    // retorna 15

## getMonth()
Retorna o mês (de 0 a 11):

    let data = new Date();
    let mes = data.getMonth();
    console.log(mes);   // retorna o mes atual
    
    let data = new Date("January 17, 1984 01:15:00:526");
    let mes = data.getMonth();
    console.log(mes);    // retorna January

## getSeconds()
Retorna os segundos (de 0 a 59):

    let data = new Date();
    let seg = data.getSeconds();
    console.log(seg);   // retorna os segundos atual
    
    let data = new Date("January 17, 1984 01:15:12:526");
    let seg = data.getSeconds();
    console.log(seg);   // retorna 12

## getTime()
Retorna o número de milissegundos desde a meia-noite de 1º de janeiro de 1970 e uma data especificada:

    let data = new Date();
    let tempo = d.getTime();
    console.log(tempo);   // retorna os milissegundos atual desde 01/01/1970

## getTimezoneOffset()
Retorna a diferença de horário entre a hora UTC e a hora local, em minutos:

    let data = new Date();
    let difMin = data.getTimezoneOffset();
    console.log(difMin);   // retorna 180 - 3 hora
