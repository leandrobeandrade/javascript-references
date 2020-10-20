# Objeto Math()

## Descrição

Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Ao contrário de outros objetos globais, Math não é um construtor. Todas as propriedades e métodos de Math são [estáticos](https://github.com/leandrobeandrade/javascript-references/blob/master/classes/metodos.md#m%C3%A9todos-est%C3%A1ticos), ou seja, **não precisam ser instanciados**.

## Métodos

- **`Math.abs(x)`** Retorna o módulo, ou valor absoluto, de um número (|x|). Passando um string não-numérica ou variável indefinida/vazia retorna NaN. Passando null retorna 0

      Math.abs('-1');     // 1
      Math.abs(-2);       // 2
      Math.abs(null);     // 0
      Math.abs('');       // 0
      Math.abs([]);       // 0
      Math.abs([2]);      // 2
      Math.abs([1,2]);    // NaN
      Math.abs({});       // NaN
      Math.abs('string'); // NaN
      Math.abs();         // NaN
      
- **`Math.acos(x)`** Retorna o arco-coseno de um número (arccosx). Para valores menores que -1 ou maiores que 1, Math.acos() retornará NaN

      Math.acos(-2);  // NaN
      Math.acos(-1);  // 3.141592653589793
      Math.acos(0);   // 1.5707963267948966
      Math.acos(0.5); // 1.0471975511965979
      Math.acos(1);   // 0
      Math.acos(2);   // NaN
      
- **`Math.acosh(x)`** Retorna o arco-coseno hiperbólico de um número. Para valores menores que 1, Math.acosh() retornará NaN. *`Experimental até o momento`*

      Math.acosh(-1);  // NaN
      Math.acosh(0);   // NaN
      Math.acosh(0.5); // NaN
      Math.acosh(1);   // 0
      Math.acosh(2);   // 1.3169578969248166

- **`Math.asin(x)`** Retorna o arco-seno de um número (arcsinx). Para valores menores que -1 ou maiores que 1, Math.asin() retorna NaN

      Math.asin(-2);  // NaN
      Math.asin(-1);  // -1.5707963267948966 (-pi/2)
      Math.asin(0);   // 0
      Math.asin(0.5); // 0.5235987755982989
      Math.asin(1);   // 1.5707963267948966 (pi/2)
      Math.asin(2);   // NaN      

- **`Math.asinh(x)`** Retorna o arco-seno hiperbólico de um número. *`Experimental até o momento`*

      Math.asinh(1);  // 0.881373587019543
      Math.asinh(0);  // 0

- **`Math.atan(x)`** Retorna o arco-tangente de um número (arctanx)

      Math.atan(1);   // 0.7853981633974483
      Math.atan(0);   // 0
      Math.atan(-0);  // -0

- **`Math.atanh(x)`** Retorna o arco-tangente hiperbólico de um número (arctanx). Para valores menores que -1 ou maiores que 1, NaN é retornado. *`Experimental até o momento`*
      
      Math.atanh(-2);  // NaN
      Math.atanh(-1);  // -Infinity
      Math.atanh(0);   // 0
      Math.atanh(0.5); // 0.5493061443340548
      Math.atanh(1);   // Infinity
      Math.atanh(2);   // NaN

- **`Math.atan2(x, y)`** Retorna o arco-tangente do quociente de seus argumentos, o ângulo teta entre (x, y).  Assim indo no sentido anti-horario ao ângulo, medido em radianos, entre o eixo X positivo, e o ponto(x, y)

      Math.atan2(90, 15); // 1.4056476493802699
      Math.atan2(15, 90); // 0.16514867741462683

      Math.atan2(±0, -0);               // ±PI.
      Math.atan2(±0, +0);               // ±0.
      Math.atan2(±0, -x);               // ±PI for x > 0.
      Math.atan2(±0, x);                // ±0 for x > 0.
      Math.atan2(-y, ±0);               // -PI/2 for y > 0.
      Math.atan2(y, ±0);                // PI/2 for y > 0.
      Math.atan2(±y, -Infinity);        // ±PI for finite y > 0.
      Math.atan2(±y, +Infinity);        // ±0 for finite y > 0.
      Math.atan2(±Infinity, x);         // ±PI/2 for finite x.
      Math.atan2(±Infinity, -Infinity); // ±3*PI/4.
      Math.atan2(±Infinity, +Infinity); // ±PI/4.

- **`Math.cbrt(x)`** Retorna a raiz cúbica de um número (cbrt). *`Experimental até o momento`*

      Math.cbrt(NaN); // NaN
      Math.cbrt(-1); // -1
      Math.cbrt(-0); // -0
      Math.cbrt(-Infinity); // -Infinity
      Math.cbrt(0); // 0
      Math.cbrt(1); // 1
      Math.cbrt(Infinity); // Infinity
      Math.cbrt(null); // 0
      Math.cbrt(2);  // 1.2599210498948734

- **`Math.ceil(x)`** Retorna o menor inteiro que é maior ou igual a um número

      Math.ceil(.95);    // 1
      Math.ceil(4);      // 4
      Math.ceil(7.004);  // 8
      Math.ceil(-0.95);  // -0
      Math.ceil(-4);     // -4
      Math.ceil(-7.004); // -7
      
- **`Math.cos(x)`** Retorna o coseno de um número (cosx)

      Math.cos(0);           // 1
      Math.cos(1);           // 0.5403023058681398
      Math.cos(Math.PI);     // -1
      Math.cos(2 * Math.PI); // 1

- **`Math.cosh(x)`** Retorna o coseno hiperbólico de um número. *`Experimental até o momento`*

      Math.cosh(0);  // 1
      Math.cosh(1);  // 1.5430806348152437
      Math.cosh(-1); // 1.5430806348152437

- **`Math.exp(ex)`** Retorna e elevado a x, onde x é o argumento, e e é a constante de Euler (2.718...), a base do logaritmo natural

      Math.exp(-1); // 0.36787944117144233
      Math.exp(0);  // 1
      Math.exp(1);  // 2.718281828459045

- **`Math.expm1(x)`** Retorna e levado a x-1. *`Experimental até o momento`*

      Math.expm1(-1); // -0.6321205588285577 
      Math.expm1(0);  // 0
      Math.expm1(1);  // 1.718281828459045

- **`Math.floor(x)`** Retorna o maior inteiro que é menor ou igual a um número

      Math.floor( 45.95); //  45
      Math.floor(-45.95); // -46

- **`Math.fround(x)`** Retorna a mais próxima representação de ponto flutuante de precisão-única de um número. *`Experimental até o momento`*
      
      // O número 1,5 pode ser representado com precisão no sistema numérico binário e é idêntico em 32 bits e 64 bits
      Math.fround(1.5); // 1.5
      Math.fround(1.5) === 1.5; // true
      
      // No entanto, o número 1,337 não pode ser representado com precisão no sistema numérico binário, por isso é 
      // diferente em 32 bits e 64 bits
      Math.fround(1.337); // 1.3370000123977661
      Math.fround(1.337) === 1.337; // false
      
      // 2 elevado a 150 é muito grande para um float de 32 bits, então Infinity é retornado:
      Math.fround(2 ** 150); // Infinity
      
      // Se o parâmetro não puder ser convertido em um número ou não for um número (NaN), Math.fround () retornará NaN
      Math.fround('abc'); // NaN
      Math.fround(NaN); // NaN

- **`Math.hypot([x[,y[,…]]])`** Retorna a raiz quadrada da soma dos quadrados dos argumentos

      Math.hypot(3, 4);        // 5
      Math.hypot(3, 4, 5);     // 7.0710678118654755
      Math.hypot();            // 0
      Math.hypot(NaN);         // NaN
      Math.hypot(3, 4, 'foo'); // NaN, +'foo' => NaN
      Math.hypot(3, 4, '5');   // 7.0710678118654755, +'5' => 5
      Math.hypot(-3);          // 3, the same as Math.abs(-3)
      
- **`Math.imul(x)`** Retorna o resultado de uma multiplicação de inteiro de 32-bit. *`Experimental até o momento`*
      
      Math.imul(2, 4);          // 8
      Math.imul(-1, 8);         // -8
      Math.imul(-2, -2);        // 4
      Math.imul(0xffffffff, 5); // -5
      Math.imul(0xfffffffe, 5); // -10

- **`Math.log(x)`** Retorna o logaritmo natural de um número

      Math.log(-1); // NaN, fora de alcance
      Math.log(0);  // -Infinity
      Math.log(1);  // 0
      Math.log(10); // 2.302585092994046
      
- **`Math.log1p(x)`** Retorna o logaritmo natural de um número. *`Experimental até o momento`*

      Math.log1p(1);  // 0.6931471805599453
      Math.log1p(0);  // 0
      Math.log1p(-1); // -Infinity
      Math.log1p(-2); // NaN

- **`Math.log10(x)`** Retorna o logaritmo de x na base 10. *`Experimental até o momento`*

      Math.log10(2);      // 0.3010299956639812
      Math.log10(1);      // 0
      Math.log10(0);      // -Infinity
      Math.log10(-2);     // NaN
      Math.log10(100000); // 5

- **`Math.log2(x)`** Retorna o logaritmo de x na base 2. *`Experimental até o momento`*

      Math.log2(3);    // 1.584962500721156
      Math.log2(2);    // 1
      Math.log2(1);    // 0
      Math.log2(0);    // -Infinity
      Math.log2(-2);   // NaN
      Math.log2(1024); // 10

- **`Math.max([x[,y[,…]]])`** Retorna o maior dentre os parâmetros recebidos. Se nenhum argumento for passado o resultado sempre será - Infinity. Se um dos argumentos não puder ser convertido em um número, o resultado será NaN

      Math.max(10, 20);   //  20
      Math.max(-10, -20); // -10
      Math.max(-10, 20);  //  20

- **`Math.min([x[,y[,…]]])`** Retorna o menor dentre os parâmetros recebidos. Se nenhum argumento for dado, o resultado é Infinity. Se pelo menos um dos argumentos não pode ser convertido para um número, o resultado é NaN

      var x = 10, y = -20;
      var z = Math.min(x, y);

- **`Math.pow(x,y)`** Retorna a base x elevada à potência y do expoente, ou seja, x elevado a y

      // simples
      Math.pow(7, 2);    // 49
      Math.pow(7, 3);    // 343
      Math.pow(2, 10);   // 1024
      
      // expoentes fracionários
      Math.pow(4, 0.5);  // 2 (raiz quadrada de 4)
      Math.pow(8, 1/3);  // 2 (raiz cúbica de 8)
      Math.pow(2, 0.5);  // 1.4142135623730951 (raiz quadrada de 2)
      Math.pow(2, 1/3);  // 1.2599210498948732 (raiz cúbica de 2)
      
      // expoentes com sinais
      Math.pow(7, -2);   // 0.02040816326530612 == (1/7)2 == (1/49)
      Math.pow(8, -1/3); // 0.5 == (1/8)1/3 == 1/2
      
      // bases com sinal
      Math.pow(-7, 2);   // 49 (quadrados sempre são positivos)
      Math.pow(-7, 3);   // -343 (cubos podem ser negativos conforme a base)
      Math.pow(-7, 0.5); // NaN (números negativos não tem uma raiz quadrada real)
      
      // devido ao fato que raízes "par" e "ímpar" são próximas, e limitam a precisão de ponto flutuante, 
      // bases negativas com expoentes fracionários sempre retornam NaN
      Math.pow(-7, 1/3); // NaN

- **`Math.random()`** Retorna um número pseudo-aleatório entre 0 e 1 ou entre números fornecidos

      Math.random(); // 0.032225599421034756
      Math.random(); // 0.4313038342210038
      
      // Gera um número aleatório entre dois valores
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      // Gera um número inteiro aleatório entre dois valores, retorna inclusive o min se for inteiro
      function getRandomInt(min, max) {
        let min = Math.ceil(min);
        let max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
      
      // Gera um número inteiro aleatório entre dois valores, retorna inclusive o min e o max se esses forem inteiros
      function getRandomIntInclusive(min, max) {
        let min = Math.ceil(min);
        let max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

- **`Math.round(x)`** Retorna o valor arrendodado de x, para o valor inteiro mais próximo

      x = Math.round(20.49);  // Retorna o valor 20
      x = Math.round(20.5);   // Retorna o valor 21
      x = Math.round(-20.5);  // Retorna o valor -20
      x = Math.round(-20.51); // Retorna o valor -21
      x = Math.round(1.005*100)/100;

- **`Math.sign(x)`** Retorna o sinal de x, indicando se é positivo, negativo ou zero. Se o argumento é um número positivo, o retorno será 1, se o numero passado for negativo, o retorno será -1, se o argumento for um zero positivo , o retorno será +0, se o argumento for 0 negativo , o retorno será -0. Qualquer outro valor que não seja numérico (string transformada em numero por ex.), o retorno será NaN. *`Experimental até o momento`*

      Math.sign(3);     //  1
      Math.sign(-3);    // -1
      Math.sign('-3');  // -1
      Math.sign(0);     //  0
      Math.sign(-0);    // -0
      Math.sign(NaN);   // NaN
      Math.sign('foo'); // NaN
      Math.sign();      // NaN

- **`Math.sin(x)`** Retorna o seno de um número (sinx)

      Math.sin(0);           // 0
      Math.sin(1);           // 0.8414709848078965
      Math.sin(Math.PI / 2); // 1

- **`Math.sinh(x)`** Retorna o seno hiperbólico de um número (sinhx). *`Experimental até o momento`*

      Math.sinh(0); // 0
      Math.sinh(1); // 1.1752011936438014

- **`Math.sqrt(x)`** Retorna a raiz quadrada positiva de um número (x). Se o valor de x for negativo, Math.sqrt() retorna NaN
      
      Math.sqrt(9); // 3
      Math.sqrt(2); // 1.414213562373095
      Math.sqrt(1);  // 1
      Math.sqrt(0);  // 0
      Math.sqrt(-1); // NaN

- **`Math.tan(x)`** Retorna a tangente de um número (tanx)

      function getTan(x) {
        return Math.tan(x);
      }

- **`Math.tanh(x)`** Retorna a tangente hiperbólica de um número (tanhx). *`Experimental até o momento`*

      Math.tanh(0);        // 0
      Math.tanh(Infinity); // 1
      Math.tanh(1);        // 0.7615941559557649

- **`Math.toSource()`** Retorna a string "Math". *Não implementada nos navegadores*

- **`Math.trunc(x)`** Retorna a parte inteira de x, removendo quaisquer dígitos fracionários. O argumento passado a esse método será convertido a um tipo numérico implicitamente. *`Experimental até o momento`*

      Math.trunc(13.37);    // 13
      Math.trunc(42.84);    // 42
      Math.trunc(0.123);    //  0
      Math.trunc(-0.123);   // -0
      Math.trunc('-1.123'); // -1
      Math.trunc(NaN);      // NaN
      Math.trunc('foo');    // NaN
      Math.trunc();         // NaN
