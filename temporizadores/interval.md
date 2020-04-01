# setInterval()
Repete chamadas de funções ou executa trechos de código, com um tempo de espera fixo entre cada chamada
    
    setInterval(() => {
        alert('FUNCIONANDO ...');   // repetirá a chamada ao alert() infinitamente no intervalo de 1 segundo
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
        alert("FUNCIONANDO ...");   // repetirá a chamada ao alert() infinitamente no intervalo de 1 segundo
    }
    clearInterval(intervalo);   // para a execução do setInterval()

> Exemplo prático

    let count = 0;
    let intervalo = setInterval(Contar, 1000)

    function Contar() {
        count++;
        console.log(count);
        if(count == 5) clearInterval(intervalo)   // count vai apenas até 5 e para
    }
