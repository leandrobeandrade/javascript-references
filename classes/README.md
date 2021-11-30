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
    
## Definições de classes no geral

- **Classe Abstrata:** Classes abstratas não podem ser instanciadas e são utilizadas por uma outra classe com a palavara reservada **`extends`**, uma classe pode extender apenas 1 classe abstrata. Servem apenas para que outras classes usem-na como modelo (herdem os atributos/propriedades e métodos delas). Elas podem ter métodos abstratos ou não abstratos. Os métodos abstratos não podem ter corpo, ou seja, deve-se declarar apenas a assinatura do método e eles obrigatoriamente terão que ser implementados na classe filha (a classe que herda), já os métodos que não forem assinados como abstract devem ter corpo e podem ou não ser sobrescritos na classe filha.
- **Interface:** Interfaces não podem ser instanciadas e são utilizadas por uma outra classe com a palavra reservada **`implements`**, uma classe pode implementar várias interfaces ao mesmo tempo. As interfaces são formadas pela declaração de um ou mais métodos, os quais obrigatoriamente não possuem corpo. Quando uma classe implementa uma interface a classe deve implementar todos os métodos ou propriedades da mesma (embora a classe possa declarar mais métodos ou propriedades dentro dela, ou seja, métodos e propriedades que não estejam implementados na interface).

![](https://github.com/leandrobeandrade/javascript-references/blob/master/classes/classes.png)
