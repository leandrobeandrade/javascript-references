deixa nosso array plano recursivamente em uma profundidade especificada como argumento, ou seja, é uma operação que concatena os elementos de um array.[1, 2, [3, 4]].flat(); // [ 1, 2, 3, 4] 
[1, 2, [3, 4, [5, 6]]].flat(); // [ 1, 2, 3, 4, [5, 6]]

Passando o número 2 como argumento a função fica plana em 2 níveis.
[1, 2, [3, 4, [5, 6]]].flat(2);
// [ 1, 2, 3, 4, 5, 6 ]
Exemplos
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
array1.push(...array2) //...spread
array1 // [1, 2, 3, 4, 5, 6]
const array3 = [
 …array1,
 …array2
] // [1, 2, 3, 4, 5, 6]
com flat()
[array1, array2].flat()
