# Escopo

## Variáveis

Em JavaScript além de variáveis globais que ficam disponíveis para todo o escopo da aplicação, existem outros escopos de variáveis que podem ser utilizados.

- **Escopos de blocos {...}**

  Blocos de códigos que são delimitados por chaves, como `if/else`, `for` ou `funções`, não tendem a delimitar variáveis que sejam declaradas dentro destes blocos com a palavra reservada **`var`**:
  
      if (true) {
        var texto = 'Alô Mundo!!';
      }
      
      console.log(texto);   // variável disponivel fora do bloco

  Agora se dentro do bloco a variável for declarada com a palavra reservada **`let`** ou **`const`** o escopo da variável fica disponível apenas dentro deste bloco:
  
      if (true) {
        let texto = 'Alô Mundo!!';
      }
      
      console.log(texto);   // erro - texto não foi definido
      
  Se a variável global conter o mesmo nome que uma variável local, a variável local sobrevalecerá sobre a global:
  
      let texto = 'Alô Mundo!!';
      
      function teste () {
        let texto = 'Outra coisa.'
        return texto;
      }
      
      teste();  // retorna Outra coisa.
  
// implementar variaveis com o mesmo nome em escopos diferentes
// implementar https://medium.com/opensanca/hoisting-em-javascript-9f22b1f78448 https://medium.com/weyes/entendendo-o-uso-de-escopo-no-javascript-3669172ca5ba
