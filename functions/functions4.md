# Closures
Closure é quando uma função é capaz de acessar seu escopo léxico mesmo quando ela está sendo executada fora de seu escopo léxico.

    let msg = function() {
        let mensagem = 'Testando Javascript';
        return function() {
            return mensagem   // busca em um escopo superior mensagem caso não ache dentro do seu escopo
        }
    }

    let mostra = msg();
    console.log(mostra());  // retorna Testando Javascript
    
    // OU
    
    let mostra = msg()();
    console.log(mostra);  // retorna Testando Javascript
    
---

    let a = 2;  // escopo global
    
    function soma() {
        var b = 3;
        return a + b;
    }
    console.log(soma());    // retorna 5

--- 

    function operacoes() {     
        let num = 0;     
        
        function soma() {
            num++;        
            console.log(num);     
        }      
        function subtrai() {         
            num--;
            console.log(num);     
        }
        return {         
            somar: soma,         
            subtrair: subtrai     
        } 
    }
    
    let op = operacoes();  
    op.somar();   // retorna 1 
    op.somar();   // retorna 2
    op.somar();   // retorna 3
    op.subtrair();  // retorna 2
    
# Callback
São funções que são passadas como parâmetro de outra(s) função(ões)

    const func = (funcCallback) => {
        const msg = 'Executando por callback!'
        
        funcCallback(msg)  // recebe a variável como argumento
    }
    
    func((msgs) => {    // tem que executar a função funcCallback
        console.log(mgs)   // retorna Executando por callback!
    })
    
    // OU
    
    const func = funcCallback => {
        const msg = 'Executando por callback!'
        
        funcCallback(msg)
    }
    
    func(msgs => console.log(msgs))
    
---

    function saudacao(nome) {
        console.log('Alô ' + nome);
    }

    function processa(callback) {
      let nome = 'Fulano de Tal';
      callback(nome);
    }

    processa(saudacao);   // retorna Alô Fulano de Tal
    
