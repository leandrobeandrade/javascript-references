# Escopo

## Variáveis

Em JavaScript além de variáveis globais que ficam disponíveis para todo o escopo da aplicação, existem outros escopos de variáveis que podem ser utilizados.

- **Escopos de blocos {...}**

  Blocos de códigos que são delimitados por chaves, como `if/else`, `for` ou `funções`, não tendem a delimitar variáveis que sejam declaradas dentro destes blocos com a palavra reservada **`var`**:
  
      if (true) {
        var texto = 'Alô Mundo!!';
      }
      
      console.log(texto);   // variável disponivel fora do bloco

  Agora se dentro do bloco a variável for declarada com a palavra reservada **`let`** ou **`const`** (introduzidas no EcmaScript6) o escopo da variável fica disponível apenas dentro deste bloco:
  
      if (true) {
        let texto = 'Alô Mundo!!';
      }
      
      console.log(texto);   // erro - texto não foi definido
      
  Se a variável global (possuindo ou não a palavra reservada let ou var) conter o mesmo nome que uma variável local, a variável local sobrevalecerá sobre a global:
  
      let texto = 'Alô Mundo!!';
      
      function teste () {
        let texto = 'Outra coisa.'
        return texto;
      }
      
      teste();  // retorna Outra coisa.
  
## Funções

  Escopo de funções criam uma forma de revestimento do código protegendo os dados guardados em suas variáveis e impedindo assim que outras partes do código (até mesmo dentro da própria função) alterem seus valores.
      
      var auto = 'Carro';
      
      function carros() {
        var marca = 'BMW';

        function tipos() {
          var tipo = 'SUV'
          console.log(`O ${auto} é do tipo ${tipo} e da marca ${marca}.`);
        }

        tipos();  // retorna O Carro é do tipo SUV e da marca BMW.
        
        console.log(auto);   // retorna Carro
        console.log(marca);  // retorna BMW
        console.log(tipo);   // retorna tipo is not defined
      }
      
      carros();
  
  No código pode ser visto que foi criado um escopo que parte de dentro para fora, ou seja, quanto mais interna uma função `(tipos())`, mais ela tem acesso as variáveis de fora de seu escopo e quando ao contrário essa varíavel não pode ser acessada quanto ao seu lado externo. 
  
