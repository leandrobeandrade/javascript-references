# Tipos de Dados

O padrão adotado pela última versão do ECMASCRIPT define como sendo 7 o número de tipos de dados na linguagem:

## Boolean

Representa um tipo de dado lógico que pode conter apenas 1 de 2 valores possíveis **verdadeiro (true)** ou **falso (false)**, sendo um tipo de dado muito utilizado para realizar tarefas que dependam de alguma condição, por exemplo junto aos métodos `if/else` e `while`.

    let valor = true;   // define que o valor inicial da variável é verdadeiro

## null

Representa na linguagem uma referencia que aponta, geralmente de maneira intencional, para um objeto ou endereço de memória inválido ou inexistente.

    let valor = true;
    valor = null;   // define o valor da variável como null

## undefined

Um valor automaticamente atribuido para variaveis que foram recentemente declaradas ou para argumentos formais para qual não existem argumentos atualmente.

    let valor;
    console.log(valor);  // retorna undefined

## Number

Os números são sempre armazenados como números de ponto flutuante de precisão dupla, seguindo o padrão internacional IEEE 754. Ao contrário de muitas outras linguagens de programação, o JavaScript não define tipos diferentes de números, como números inteiros, curtos, longos, ponto flutuante, etc...

Esse formato armazena números em 64 bits, onde o número (a fração) é armazenado nos bits 0 a 51, o expoente nos bits 52 a 62 e o bit no sinal 63, sendo o maior número armazendo possível o **1.7976931348623157e+308** e o menor o **5e-324**.

    let valor = 100;

## String

É uma sequência de caracteres usados para representar texto.

    let valor = '100';

## Symbol

Valores desse tipo podem ser usados para fazer propriedades de objetos anônimos. Ele pode ser usado como chave de uma propriedade de objeto quando este tem a intenção de ser privada, para uso interno da classe ou do tipo do objeto em questão.

    let usuario = {
        nome: "Fulano"
    };

    let id = Symbol("id");
    usuario[id] = 1;
    console.log(usuario[id]);   // retorna 1

## Object

Um objeto é uma coleção de propriedades, e uma propriedade é uma associação entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto. Além dos objetos que são pré-definidos no browser, você pode definir seus próprios objetos.

    let usuario = {
        id: 1
        nome: "Fulano"
    };

Assim como objetos, arrays também são implementados na linguagem como sendo do tipo **Object**:

    let vetor = [1, 2, 3, 4];
    console.log(typeof vetor);   // retorna object 