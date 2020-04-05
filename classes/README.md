# Classes em JavaScript

Classes em JavaScript foram introduzidas a partir do ECMAScript 2015 ou versão 6 da linguagem e antes desta versão classes eram representadas por meio de funções comuns:

    function Usuario(primeiroNome, sobreNome) {
        this.primeiroNome = primeiroNome;
        this.sobreNome = sobreNome;
    }

    var usuario = new Usuario('Fulano', 'de Tal');
    console.log(usuario)  // retorna Usuario { primeiroNome: "Fulano", sobrenome: "de Tal" }

Classes em JavaScript são consideradas funções com poderes especiais e como funções podemos declarar uma classe ou utilizá-la como um expressão. Tendo uma diferença importante entre uma função e uma classe neste aspecto de que funções declaradas sofrem **hoisting**, ou seja, na interpretação do script são alçadas para parte de cima do escopo, portanto, podemos acessá-las antes de declará-las já com classes tanto declaradas como expressadas se tentarmos acessá-las antes de sua declaração ou expressão obteremos um erro.

    const r = new Retangulo(); // Erro de referência (ReferenceError)

    class Retangulo {...}

---

    class Retangulo {...}

    const r = new Retangulo(); // Correto uso

![](https://github.com/leandrobeandrade/javascript-references/blob/master/classes/classes.png)
