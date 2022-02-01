# Declarando funções

> **Função em forma declarada =>** é carregada antes da interpretação, podendo ser invocada antes da sua declaração

    function somar(a, b) {
	    return a + b;
    }

> **Função expressa em uma variável =>** sua execução é dada pelo uso da variável onde a função foi declarada 

    let somar = function(a, b) {						
	    return a + b;
    }

> **Função expressa nomeada =>** sua execução é dada pelo uso da variável onde a função foi declarada 

    let somar = function somar(a, b) {
	    return a + b;
    }

# Invocando funções

> **Invocada diretamente**

    function somar(a, b) {
	    return a + b;
    }

    somar(1+1)								

> **Invocada como parâmetro**

    let produto = {id: 1, preco: 55.00};
    let imposto = function(preco) {
	    return preco * 0.1;
    }

    let calcula = function(prod, imp) {
	    return prod.preco + imp(produto.preco);
    }

    calcula(produto, imposto);

> **Invocada por outra função**

    let teste = function() {
        return function() {
            return 'Testando Javascript';
        }
    }

    teste()()
    
----

    function ret() {
        return 'Testando Javascript';
    }
    
    let teste = function() {
        return ret()
    }

    teste()
