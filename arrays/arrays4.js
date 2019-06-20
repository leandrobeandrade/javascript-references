/* ===============================================
|	       REST PARAMS      		  |
================================================*/

/* permite representar um número indefinido de elementos como um array. */

      const author = ['Anne Rice', 1941, 'USA', 'Interview With The Vampire', 'The Vampire Lestat', 'The Queen of the Damned'];
      const [name, birth, country, ...books] = author;

      console.log(name);      // Anne Rice 
      console.log(birth);     // 1941
      console.log(country);   // USA 
      console.log(books);     // ['Interview With The Vampire', 'The Vampire Lestat', 'The Queen of the Damned']

// Exemplos

      function sum(...numbers) {
            let result = 0;  
            for(const number of numbers) {
                  result += number;
            }
            return result;
      }

      console.log(sum(1, 2))   // 3
      console.log(sum(1, 10, 100, 1000));    // 1111



/* ===============================================
|			FLAT      		  |
================================================*/

/* Deixa o Array plano recursivamente em uma profundidade especificada como argumento, ou seja, 
é uma operação que concatena os elementos de um array. */

      console.log([1, 2, [3, 4]].flat());   // [ 1, 2, 3, 4] 
      console.log([1, 2, [3, 4, [5, 6]]].flat());   // [ 1, 2, 3, 4, [5, 6]]

/* Passando o número 2 como argumento a função fica plana em 2 níveis. */

      console.log([1, 2, [3, 4, [5, 6]]].flat(2));   // [ 1, 2, 3, 4, 5, 6 ]

// Exemplos:
      
      const array1 = [1, 2, 3];
      const array2 = [4, 5, 6];
      
      // SEM flat()
      console.log(array1.push(...array2));    // [1, 2, 3, 4, 5, 6]

      const array3 = [...array1, ...array2];   
      console.log(array3);     // [1, 2, 3, 4, 5, 6]

      // COM flat():
      console.log([array1, array2].flat());     // [1, 2, 3, 4, 5, 6]
