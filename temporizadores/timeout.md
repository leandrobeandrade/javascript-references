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
Cancela imediatamente o tempo limite previamente estabelecido na chamada do método setTimeout()
    
    let tm;

    function inicia() {
        tm = setTimeout(() => {
            alert('FUNCIONANDO ...');
        }, 2000);
    };

    function para() {
        clearTimeout(tm); // para a execução do setTimeout()
    }

    setTimeout(() => {
        para()
    }, 1000)

    inicia();
