# Métodos de classe assíncrona
Para declarar um método de classe assíncrona, basta anexá-lo com **async**

    class Aguardando {
        async wait() {
            return await Promise.resolve('Espere por isto!');
        }
    }

    new Aguardando()
    .wait()
    .then(console.log); // retorna Espere por isto
    
# Manipulação de erros
Se uma promessa for resolvida normalmente, await retorna o resultado da promise. Mas, no caso de uma rejeição, é gerado um erro, como se houvesse uma declaração de lançamento nessa linha

    async function f() {
        await Promise.reject(new Error('Algo deu errado!'));
    }

Em situações reais, a promise pode levar algum tempo antes de ser rejeitada. Nesse caso, haverá um atraso antes de aguardar lança um erro.
Podemos detectar esse erro usando **try..catch** normalmente

    async function minhaFuncao() {

        try {
            let response = await fetch('http://errornoexist.com');
        } catch(err) {
            console.log(err); // TypeError: failed to fetch
        }
    }

    minhaFuncao();  // retorna TypeError: failed to fetch
    
Quando usamos async/await, raramente precisamos, porque await manipula a espera por nós

Quando precisamos esperar várias promessas, podemos envolvê-las em Promise.all e aguardar.
Em caso de erro, ele se propaga como de costume: da promessa falhada para Promise.all e, em seguida, se torna uma exceção que podemos capturar usando try..catch ao redor da chamada.
    
    // aguardando por uma array de resultados
    let results = await Promise.all([
        fetch(url1),
        fetch(url2),
        ...
    ]);
