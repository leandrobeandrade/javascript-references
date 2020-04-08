## getDate() 
Retorna o dia do mês (de 1 a 31):

    var data = new Date();
    var dia = data.getDate();
    console.log(dia);   // retorna o dia atual
    
    var data = new Date("January 17, 1984 01:15:00");
    var dia = data.getDate()
    console.log(dia);   // retorna o dia atual especificado 17

## getDay()
Retorna o dia da semana (de 0 a 6):

    var data = new Date();
    var dia = data.getDay();
    console.log(dia);   // retorna o dia da semana atual
    
    var data = new Date();
    var diaSemana = new Array(7);
    diaSemana[0] = 'Domingo';
    diaSemana[1] = 'Segunda';
    diaSemana[2] = 'Terça';
    diaSemana[3] = 'Quarta';
    diaSemana[4] = 'Quinta';
    diaSemana[5] = 'Sexta';
    diaSemana[6] = 'Sábado';

    var dia = diaSemana[data.getDay()];
    console.log(dia);   // retorna o dia da semana atual

## getFullYear()
Retorna o ano:

    var data = new Date();
    var ano = data.getFullYear();
    console.log(ano);   // retorna o ano atual
    
    var data = new Date("January 17, 1984 01:15:00");
    var ano = data.getFullYear()
    console.log(ano);   // retorna o ano atual especificado 1984

## getHours()
Retorna a hora (de 0 a 23):

    var data = new Date();
    var hora = data.getHours();
    console.log(hora);   // retorna a hora atual
    
    var data = new Date("January 17, 1984 01:15:00");
    var hora = data.getHours();
    console.log(hora);    // retorna 1

## getMilliseconds()
Retorna os milissegundos (de 0 a 999):

    var data = new Date();
    var miSeg = data.getMilliseconds();
    console.log(miSeg);   // retorna os milisegundos atual
    
    var data = new Date("January 17, 1984 01:15:00:526");
    var miSeg = data.getMilliseconds();
    console.log(miSeg);    // retorna 526

## getMinutes()
Retorna os minutos (de 0 a 59):

    var data = new Date();
    var minu = data.getMinutes();
    console.log(minu);   // retorna os minutos atual
    
    var data = new Date("January 17, 1984 01:15:00:526");
    var minu = data.getMinutes();
    console.log(minu);    // retorna 15

## getMonth()
Retorna o mês (de 0 a 11):

    var data = new Date();
    var mes = data.getMonth();
    console.log(mes);   // retorna o mes atual
    
    var data = new Date("January 17, 1984 01:15:00:526");
    var mes = data.getMonth();
    console.log(mes);    // retorna January

## getSeconds()
Retorna os segundos (de 0 a 59):

    var data = new Date();
    var seg = data.getSeconds();
    console.log(seg);   // retorna os segundos atual
    
    var data = new Date("January 17, 1984 01:15:12:526");
    var seg = data.getSeconds();
    console.log(seg);   // retorna 12

## getTime()
Retorna o número de milissegundos desde a meia-noite de 1º de janeiro de 1970 e uma data especificada:

    var data = new Date();
    var tempo = d.getTime();
    console.log(tempo);   // retorna os milissegundos atual desde 01/01/1970

## getTimezoneOffset()
Retorna a diferença de horário entre a hora UTC e a hora local, em minutos:

    var data = new Date();
    var difMin = data.getTimezoneOffset();
    console.log(difMin);   // retorna 180 - 3 hora
