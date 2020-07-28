## Encadeamento de Promises
O encadeamento de Promises resulta na utilização de duas ou mais operações assíncronas consecutivas, onde cada operação subsequente começa quando a operação anterior é bem sucedida, com o resultado do passo anterior através do método **then()** que retorna uma nova Promise diferente da original

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 2000);
        
    }).then(function(result) {
    
        console.log(result);  // 1
        return result * 2;    // 2
        
    }).then(function(result) {

        console.log(result);  // 2
        return result * 2;    // 4

    }).then(function(result) {

        console.log(result);  // 4
    }); // retorna 1 2 4
    
Sempre a nova Promise através do **then()** terá que ser declarada na instância da Promise do contrário haverá um loop na mesma Promise. Como no código abaixo o resultado da Promise será sempre o valor **1**:

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve(1), 1000);
    });

    promise.then(function(result) {
        console.log(result); // 1
        return result * 2;
    });

    promise.then(function(result) {
        console.log(result); // 1
        return result * 2;
    });

    promise.then(function(result) {
        console.log(result); // 1
        return result * 2;
    });
    
Um manipulador usado no **then()** pode criar e retornar uma promessa. Nesse caso, outros manipuladores esperam até que se estabilize e, em seguida, obtêm seu resultado

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => resolve(1), 1000);

    }).then((result) => {

        console.log(result);  // retorna 1

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000);
        });

    }).then((result) => {

        console.log(result);  // retorna 2

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(result * 2), 1000);
        });

    }).then((result) => {

        console.log(result);  // retorna 4

    });
    
