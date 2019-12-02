# Async

A palavra **async** antes de uma função significaque esta função sempre retornará uma promessa. Outros valores são agrupados em uma promessa resolvida automaticamente

    async function minhaFuncao() {
        return Promise.resolve('Retorna isto!');
    }

    minhaFuncao().then(console.log);  // retorna Retorna isto!
    
Portanto, o async garante que a função retorne uma promessa e envolva não promessas

# Await

A palavra-chave **await** faz com que o JavaScript espere até que a promessa seja estabelecida e retorne seu resultado

    async function minhaFuncao() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Feito!'), 1000)
        });

        let result = await promise; // aguarda o resultado enquanto a promisse é resolvida

        console.log(result); // "feito!"
    }

    minhaFuncao();  // retorna Feito!
    
Como promise.then(), await permite usar objetos que podem ser editados (aqueles com um método que pode ser chamado). A idéia é que um objeto de terceiros possa não ser uma promessa, mas compatível com a promessa: se suportar. Então, isso é o suficiente para o await

    class Aguardando {
        constructor(num) {
            this.num = num;
        }
        then(resolve, reject) {
            console.log(resolve);

            setTimeout(() => resolve(this.num * 2), 1000);
        }
    };

    async function minhaFuncao() {
        let result = await new Aguardando(2);
        console.log(result);
    }

    minhaFuncao();  // retorna 4
    
Exemplo de utilização de promisse com async/await

    function resolverDepoisDe2Segundos(x) {
      return new Promise(resolve => {
        setTimeout(() => resolve(x), 2000);
      });
    }

    async function adicionar1(x) {
      let a = resolverDepoisDe2Segundos(20);
      let b = resolverDepoisDe2Segundos(30);
      return x + await a + await b;
    }

    adicionar1(10).then(v => {
      console.log(v);  // retorna 60 depois de 2 segundos
    });

    async function adicionar2(x) {
      let a = await resolverDepoisDe2Segundos(20);
      let b = await resolverDepoisDe2Segundos(30);
      return x + a + b;
    }

    adicionar2(10).then(v => {
      console.log(v);  // retorna 60 depois de 4 segundos
    });
