# Promise
É um objeto que representa a eventual conclusão ou falha de uma operação assincrona. É um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função

## Declaração da Promise

    let feito = true;

    const Certo = new Promise((resolve, reject) => {
        if(feito) {
            const fazendo = 'Está indo'
            resolve(fazendo)
        } else {
            const urgh = 'Não foi não'
            reject(urgh)
        }
    })
    
> resolve => Retorna um objeto Promise que foi resolvido com um dado valor. Se o valor é thenable (possui um método then), a promise retornada "seguirá" este método, adotando esse estado eventual; caso contrário a promise retornada será realizada com o valor.
 
> reject => Retorna um objeto Promise que foi rejeitado por um dado motivo.

## Execução da Promise

    let executa = () => {
        Certo
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        })
    }
    
    executa() // retorna Está indo
    
> then => Adiciona os métodos de tratamento da realização e rejeição da promise e, retorna uma nova promise resolvendo para o valor do método chamado.
 
> catch => Adiciona um callback que trata rejeição para a promise e, retorna uma nova promise resolvendo o valor retornado do callback, se ele for chamado, ou para seu valor original de conclusão se a promise for realizada.

Uma promise pode receber em seu resolve uma outra promise. Esta, será resolvida então, somente quando a outra promise for resolvida. No exemplo abaixo mesmo a **Promise_2** sendo executada ela só será resolvida após a **Promise_1** também ser rersolvida , ou seja, após 10 segundos:

    function Promise_1() {
        return new Promise((resolve, reject) => {
            let res = 'Retorne isto também!';

            setTimeout(() => {
                resolve(res)
            }, 10000);
        });
    }

    function Promise_2() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(Promise_1()), 2000);
        });
    }

    Promise_2().then(result => console.log('Sucesso.', result)); // retorna Sucesso. Retorne isto também!
    
### Promise.all()
Retorna uma promise pendente que será resolvida quando todas as promises passadas por parâmetro (em uma array) forem resolvidas. Ela será rejeitada se qualquer uma das promises rejeitar
    
    const currency = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ currency: 'euro', value: 3.50 });
        }, 5000);
    });
    const countries = new Promise((resolve, reject) => {
        resolve(['Ireland', 'England', 'Scotland']);
    });
    
    Promise.all([currency, countries])
    .then(responses => {
        console.log(responses);
    }) // retorna [{currency: "euro", value: 3.5} ['Ireland', 'England', 'Scotland']]
    
### Promise.race() 
Retorna uma promise pendente, mas ela será resolvida assim que qualquer uma das promises enviadas seja resolvida, ou seja, assim que a primeira delas resolver. Mas, se uma delas falhar antes de qualquer uma ser resolvida, então essa promise será rejeitada
    
    Promise
    .race([currency, countries])
    .then(responses => {
        console.log(responses);
    }) // retorna {currency: "euro", value: 3.5}
    
