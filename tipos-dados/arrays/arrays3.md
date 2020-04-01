# Spread operator (...)
Permite distribuir o conteúdo de qualquer objeto iterável em múltiplos elementos

      const names = ['Lestat', 'Marius', 'Akasha'];
      console.log(...names); // retorna Lestat Marius Akasha

      // Concatenar arrays com spread (...)
      const males = ['Lestat', 'Louis', 'Marius'];
      const females = ['Pandora', 'Akasha'];
      const characters = [...males, ...females];
      console.log(characters); // retorna ['Lestat', 'Louis', 'Marius', 'Pandora', 'Akasha']


# Rest params (...)
Permite representar um número indefinido de elementos como um array

      const author = ['Anne Rice', 1941, 'USA', 'Interview With The Vampire', 'The Vampire Lestat', 'The Queen of the Damned'];
      const [name, birth, country, ...books] = author;

      console.log(name);    // retrona Anne Rice
      console.log(birth);   // retorna 1941
      console.log(country); // retorna USA
      console.log(books);   // retorna ['Interview With The Vampire', 'The Vampire Lestat', 'The Queen of the Damned']

      function sum(...numbers) {
            let result = 0;  
            for(const number of numbers) result += number;
            return result;
      }

      console.log(sum(1, 2));   // retorna 3
      console.log(sum(1, 10, 100, 1000));   // retorna 1111

# flat()
Deixa o Array plano recursivamente em uma profundidade especificada como argumento, ou seja, é uma operação que concatena os elementos de um array

      console.log([1, 2, [3, 4]].flat());  // retorna [ 1, 2, 3, 4] 
      console.log([1, 2, [3, 4, [5, 6]]].flat());  // retorna [ 1, 2, 3, 4, [5, 6]]

      /* Passando o número 2 como argumento a função fica plana em 2 níveis */

      console.log([1, 2, [3, 4, [5, 6]]].flat(2));  // retorna [ 1, 2, 3, 4, 5, 6 ]

      const array1 = [1, 2, 3];
      const array2 = [4, 5, 6];
      
      // SEM flat()
      console.log(array1.push(...array2));  // retorna [1, 2, 3, 4, 5, 6]

      const array3 = [...array1, ...array2];   
      console.log(array3);  // retorna [1, 2, 3, 4, 5, 6]

      // COM flat():
      console.log([array1, array2].flat());  // retorna [1, 2, 3, 4, 5, 6]

# flatMap()
Mapeia cada elemento usando uma função de mapeamento e, em seguida, nivela o resultado em uma nova array. 
É idêntico a um map seguido por um flat de profundidade 1

      let cestas = [
            { id: 1, itens: ["Maça", "Banana"]},
            { id: 2, itens: ["Banana", "Abacaxi"]}
      ]

      // Apenas com o map teriamos arrays de arrays.
      console.log(cestas.map(x => x.itens));

      // 0: ["Maça", "Banana"];
      // 1: ["Banana", "Abacaxi"]

      // Com o flatMap já temos a concatenação dos elementos e conseguimos obter todos os elementos listados dentro de objetos
      console.log(cestas.flatMap(x => x.itens));    // retorna ["Maça", "Banana", "Banana", "Abacaxi"]
