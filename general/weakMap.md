# WeakMap()
É uma coleção de pares key/value na qual as chaves são fracamente referenciadas. As chaves devem ser objetos, e os valores podem ser de tipos arbitrários
    
- **weakMap.get(key) =>** retorna o valor associado a key, ou undefined se nenhum existir
- **weakMap.set(key, value) =>** configura um valor para key no objeto WeakMap. Retorna undefined
- **weakMap.delete(key) =>** Remove qualquer valor associado à  key e retorna false após
- **weakMap.has(key) =>** retorna um boolean verificando se há algum valor associado a key no objeto WeakMap ou não   
    
      let weakMap = new WeakMap();

      let obj = {};

      weakMap.set(obj, "ok"); // retorna { Object => "ok" }

      // Erro, não pode ter string como chave
      weakMap.set("teste", "Whoops"); // retorna Erro, "teste" is not an object
      
      weakmap.get(obj); // retorna "ok"
      
      weakmap.has(obj); // retorna true
      
      weakmap.delete(); // retorna {}
    
> WeakMap não suporta iteração e métodos keys(), values(), inputs(), portanto, não há como obter todas as chaves ou valores dele

