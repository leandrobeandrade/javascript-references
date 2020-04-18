# WeakSet()
É uma coleção de objetos que pode ocorrer uma vez e permite que você armazene objetos mantidos "fracamente" na coleção

- **weakSet.add(value) =>** anexa um novo objeto com o valor fornecido ao objeto WeakSet
- **weakSet.delete(value) =>** remove o elemento associado ao valor e retorna false posteriormente
- **weakSet.has(value) =>** retorna um boolean verificando se há algum valor associado a key no objeto WeakSet ou não

      let ws = new WeakSet();
      let t1 = {};
      let t2 = {};

      ws.add(algo);
      ws.add(t1);

      ws.has(algo); // retorna true
      ws.has(t1);   // retorna true
      ws.has(t2);   // retorna false, t2 não foi adicionado ao set

      ws.delete(algo); // retorna remove algo do set 
      ws.has(algo);    // retorna false, algo foi removido
