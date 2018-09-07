## console.assert() 
Escreva uma mensagem para o console, apenas se o primeiro argumento for falso:

      console.assert(document.getElementById("demo"), "Você não possui nenhum elemento com ID 'demo'");
      
## console.clear()
Limpa o console de todas as mensagens:

      console.clear()

## console.count()
Registra o número de vezes que essa chamada específica para count() foi chamada:

      for (i = 0; i < 10; i++) {
        console.count()
      }

## console.error()
Gera uma mensagem de erro para o console:

      console.error("Você cometeu um erro!")

## console.group()
Cria um novo grupo inline no console. Isso recua as seguintes mensagens do console por um nível adicional, até que 
*console.groupEnd()* seja chamado:

      console.log("Olá, mundo!")
      console.group()
      console.log("Olá novamente, desta vez dentro de um grupo!")

## console.groupCollapsed()
Cria um novo grupo inline no console. No entanto, o novo grupo é criado em *colapse*. O usuário precisará usar o botão 
de seta para expandi-lo:
      
      console.log("Olá, mundo!")
      console.groupCollapsed()
      console.log("Olá novamente, desta vez dentro de um grupo recolhido!")
      
## console.end()
Sai do grupo inline atual no console:

      console.log("Olá, mundo!")
      console.group()
      console.log("Olá novamente, desta vez dentro de um grupo!")
      console.groupEnd ()
      console.log("e estamos de volta.")

## console.info()
Gera uma mensagem informativa para o console:

      console.info("Testando")

## console.log()
Envia uma mensagem para o console:

      console.log("Testando!")
      
## console.table()
Exibe dados tabulares como uma tabela:

      console.table(["Audi", "Volvo", "Ford"])

## console.time()
Inicia um temporizador (pode controlar quanto tempo uma operação demora):

      console.time();
      for (i = 0; i < 100000; i++) {
        // algum código
      }
      console.timeEnd();


## console.timeEnd()
Cancela o *timer* que foi iniciado anteriormente pelo console.time():

      console.time();
      for (i = 0; i < 100000; i++) {
        // algum código
      }
      
## console.trace();
Gera um rastreamento de pilha para o console:

      function myFunction() {
        myOtherFunction();
      }

      function myOtherFunction() {
        console.trace();
      }
      
## console.warn()
Gera uma mensagem de aviso para o console:

      console.warn("Isto é um aviso!")
