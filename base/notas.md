# Anotações gerais sobre JavaScript

> Escopo

- Usar `const`, ou `let` dentro de um **`try{}`** vai fechar essa variável dentro desse bloco, não permitindo aceder à mesma fora dele, igual a outros blocos como **if/else** e **funções**

---

> Objetos

- Referenciar uma variável (b) com outra variável (a) que contém em seu valor um objeto, a segunda variável b será referenciada no mesmo local na memória, ou seja, se b for modificada a também será modificada

      let a = { nome: 'Fulano' }
      let b = a    // copia a referência na memória

      console.log(a == b)  // true, ambas variáveis referenciam o mesmo objeto
      console.lo(a === b)  // true
      
      console.log(a)    // retorna { nome: 'Fulano' }
      console.log(b)    // retorna { nome: 'Fulano' }
      
      b.nome = 'Ciclano'   // mudou o valor da propriedade nome na variável b
      
      console.log(b)    // retorna { nome: 'Ciclano' }
      console.log(a)    // retorna { nome: 'Ciclano' }

      let a = {}
      let b = {}    // dois objetos independentes

      console.log(a == b)   // false
