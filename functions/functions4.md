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
