# Map()
É uma coleção de itens de dados com chave, assim como um Objeto. Mas a principal diferença é que o Map permite chaves de qualquer tipo

   - **new map() =>** cria o mapa
   - **map.set(key, value) =>** armazena o valor pela chave
   - **map.get(key) =>** retorna o valor pela chave, indefinido se a chave não existir no mapa
   - **map.has(key) =>** retorna true se a chave existir, false caso contrário
   - **map.delete(key) =>** remove o valor pela chave
   - **map.clear() =>** remove tudo do mapa
   - **map.size =>** retorna a contagem atual de elementos

         let map = new Map();

         map.set('1', 'string 1');   // uma string chave
         map.set(1, 'number 1');     // uma numeric chave
         map.set(true, 'boolean 1'); // uma boolean chave

         console.log(map.get(1)); // number 1
         console.log(map.get('1')); // string 1
         console.log(map.get(true));   // boolean 1
         console.log(map.size); // 3
         console.log(map.has(true)); 
         console.log(map.delete('1')); // deleta o valor string 1
         console.log(map.clear());  // reseta o mapa

   > Diferentemente dos objetos, as chaves não são convertidas em strings. Qualquer tipo de chave é possível. O mapa também pode usar objetos como chaves


      let user = { name: "Fulano" };
      let visitsCountMap = new Map();

      visitsCountMap.set(user, 123);

      console.log( visitsCountMap.get(user) ); // 123

   ## Iteração sobre Map
   A iteração segue na mesma ordem em que os valores foram inseridos. O mapa preserva essa ordem, diferente de um objeto comum. Para fazer um loop sobre um mapa, existem 3 métodos:

   - **map.keys () =>** retorna um iterável para chaves
   - **map.values () =>** retorna um iterável para valores
   - **map.entries () =>** retorna um iterável para as entradas [chave, valor], que é usado por padrão em for..of

         let recipeMap = new Map([
            ['mamão', 50],
            ['maçã', 250],
            ['pera', 500]
         ]);

         // itera sobre as keys (frutas)
         for(let frutas of recipeMap.keys()) console.log(frutas); // mamão, maçã, pera

         // itera sobre values (preços)
         for(let precos of recipeMap.values()) console.log(precos); // 50, 250, 500

         // itera sobre as entradas [key, value]
         for(let entrada of recipeMap) console.log(entrada); // [mamão, 50] [maçã, 250] [pera, 500]

         recipeMap.forEach( (value, key, map) => {
            console.log(`${key}: ${value}`); // mamão: 50 maçã: 250 pera: 500
         });

   ### Object.entries: Map from Object
   Quando um mapa é criado, podemos passar uma matriz (ou outra iterável) com pares de chave / valor 
   para inicialização. Tendo a seguinte sintaxe de retorno por exemplo [ ["key","value"], ["key", value] ]

      let obj = {
         nome: "Fulano",
         idade: 30
      };

      let map = new Map(Object.entries(obj));
      console.log(map.get('nome')); // Fulano

   ### Object.fromEntries: Object from Map
   Dada uma matriz de pares [chave, valor], ele cria um objeto a partir deles

      let frutas = Object.fromEntries([
         ['banana', 10],
         ['laranja', 20],
         ['melancia', 40]
      ]);

      console.log(frutas); // { banana: 10, laranja: 20, melancia: 40 }
      console.log(frutas.laranja); // 20

   > Converter um Map em objeto simples

      let map = new Map();
      map.set('banana', 1);
      map.set('laranja', 2);
      map.set('melancia', 4);

      let obj = Object.fromEntries(map.entries());

      console.log(obj); // { banana: 1, laranja: 2, melancia: 4 }
      console.log(obj.laranja); // 20
