# setTimeout()
Define um cronômetro que executa uma função ou parte de código especificada quando o cronômetro expira

    setTimeout(() => {
        alert('FUNCIONANDO ...');   // mostra o alert depois de 2 segundos
    }, 2000);
    
> Declarando em uma variável

    let tm;

    function inicia() {
        tm = setTimeout(() => {
            alert('FUNCIONANDO ...');
        }, 2000);
    };

    inicia();

# clearTimeout()
Cancela um tempo limite previamente estabelecido na chamada do método setTimeout()
    
    let tm;

    function inicia() {
        tm = setTimeout(() => {
            alert('FUNCIONANDO ...');
        }, 2000);
    };

    function para() {
        clearTimeout(tm); // para a execução do setTimeout()
    }

    inicia();
    para();

# setInterval()
Repete chamadas de funções ou executa trechos de código, com um tempo de espera fixo entre cada chamada
    
    setInterval(() => {
        alert('FUNCIONANDO ...');   // repetirá a chamada ao alert() infinitamente no intrevalo de 1 segundo
    }, 1000)
    
> Declarando em uma varíavel

    let intervalo = setInterval(Mostrar, 1000);
    function Mostrar() {
        alert("FUNCIONANDO ...");
    }

# clearInterval()
Cancela uma ação repetida e cronometrada que foi estabelecida anteriormente por uma chamada para setInterval()
    
    let intervalo = setInterval(Mostrar, 1000);
    function Mostrar() {
        alert("FUNCIONANDO ...");   // repetirá a chamada ao alert() infinitamente no intrevalo de 1 segundo
    }
    clearInterval(intervalo);   // para a execução do setInterval()
