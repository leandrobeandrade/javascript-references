# Set()
É uma coleção de tipos especiais - "conjunto de valores" (sem chaves), onde cada valor pode ocorrer apenas uma vez

- **new Set(iterable) =>** cria o conjunto e, se um objeto iterável for fornecido (array), copia seus os valores para o conjunto
- **set.add(value) =>** adiciona um valor, retorna o conjunto em si
- **set.delete(value) =>** remove o valor, retorna true se o valor existir no momento da chamada, caso contrário, false
- **set.has(value) =>** retorna true se o valor existir no conjunto, caso contrário, false
- **set.clear () =>** remove tudo do conjunto
- **set.size =>** é a contagem de elementos

      let set = new Set();

      let fulano = { nome: "Fulano" };
      let beltrano = { nome: "Beltrano" };
      let ciclano = { nome: "Ciclano" };

      set.add(fulano);
      set.add(beltrano);
      set.add(ciclano);
      set.add(beltrano);
      set.add(fulano);
      
      console.log(set); // retorna { nome: "Fulano" } { nome: "Beltrano" } { nome: "Ciclano" }
      console.log(set.size); // retorna 3

      for (let user of set) {
        console.log(user.nome); // retorna Fulano Beltrano Ciclano
      }
      
    ---

      console.log(set.has(fulano));   // retorna true
      
      set.delete(beltrano); // retorna true
      console.log(set); // retorna { nome: "Fulano" } { nome: "Ciclano" }
      
      set.clear();
      console.log(set); // retorna {}
