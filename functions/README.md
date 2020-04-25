# Funções

Uma função é um procedimento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la. Assim como o programa em si, uma função é composta por uma sequência de instruções chamada corpo da função. Valores podem ser passados para uma função e ela vai retornar um valor.

Em JavaScript, funções são objetos de primeira classe, pois elas podem ter propriedades e métodos como qualquer outro objeto. O que as difere de outros objetos é que as funções podem ser chamadas. Em resumo, elas são objetos **Function**.

Para retornar um valor diferente do padrão, uma função deve ter uma instrução return que específica o valor a ser retornado. Uma função sem um return retornará um valor padrão. No caso de um método construtor chamado com a palavra reservada **new**, o valor padrão é o valor do parâmetro `this`. Para todas as outras funções, o valor padrão de retorno é undefined.

Os parâmetros de uma função são chamados de argumentos da função. Argumentos são passados para a função por valor. Se uma função muda o valor de um argumento, esta mudança não é refletida globalmente ou na chamada da função. Contudo, referência de objetos são valores também, e eles são especiais: se a função muda as propriedades do objeto referenciado, estas mudanças são visíveis fora da função.

![](https://github.com/leandrobeandrade/javascript-references/blob/master/functions/functions.png)
