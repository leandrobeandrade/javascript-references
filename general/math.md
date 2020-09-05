# Objeto Math()

## Descrição

Math é um objeto embutido que tem propriedades e métodos para constantes e funções matemáticas. Ao contrário de outros objetos globais, Math não é um construtor. Todas as propriedades e métodos de Math são [estáticos](https://github.com/leandrobeandrade/javascript-references/blob/master/classes/metodos.md#m%C3%A9todos-est%C3%A1ticos), ou seja, **não precisa ser instanciado**.


## Métodos

- **`Math.abs(x)`** Retorna o módulo, ou valor absoluto, de um número (|x|). Passando um string não-numérica ou variável indefinida/vazia retorna NaN. Passando null retorna 0.

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
      
- **`Math.acos(x)`** Retorna o arco-coseno de um número (arccosx), Para valores menores que -1 ou maiores que 1, Math.acos() retornará NaN.

      Math.acos(-2);  // NaN
      Math.acos(-1);  // 3.141592653589793
      Math.acos(0);   // 1.5707963267948966
      Math.acos(0.5); // 1.0471975511965979
      Math.acos(1);   // 0
      Math.acos(2);   // NaN
      
- **`Math.acosh(x)`** Retorna o arco-coseno hiperbólico de um número
- **`Math.asin(x)`** Retorna o arco-seno de um número (arcsinx)
- **`Math.asinh(x)`** Retorna o arco-seno hiperbólico de um número
- **`Math.atan(x)`** Retorna o arco-tangente de um número (arctanx)
- **`Math.atanh(x)`** Retorna o arco-tangente hiperbólico de um número (arctanx)
- **`Math.atan2(x, y)`** Retorna o arco-tangente do quociente de seus argumentos
- **`Math.cbrt(x)`** Retorna a raiz cúbica de um número (cbrt)
- **`Math.ceil(x)`** Retorna o menor inteiro que é maior ou igual a um número
- **`Math.exp(ex)`** Retorna e elevado a x, onde x é o argumento, e e é a constante de Euler (2.718...), a base do logaritmo natural
- **`Math.floor(x)`** Retorna o maior inteiro que é menor ou igual a um número
- **`Math.hypot([x[,y[,…]]])`** Retorna a raiz quadrada da soma dos quadrados dos argumentos (Vx2+y2+…)
- **`Math.log(x)`** Retorna o logaritmo natural (logex ou lnx) de um número
- Math.log10(x) Retorna o logaritmo de x na base 10 (log10x)
- Math.log2(x) Retorna o logaritmo de x na base 2 (log2x)
- Math.max([x[,y[,…]]]) Retorna o maior dentre os parâmetros recebidos
- Math.min([x[,y[,…]]]) Retorna o menor dentre os parâmetros recebidos
- Math.pow(x,y) Retorna a base x elevada à potência y do expoente, ou seja, xy
- Math.random() Retorna um número pseudo-aleatório entre 0 e 1
- Math.round(x) Retorna o valor arrendodado de x, para o valor inteiro mais próximo
- Math.sign(x) Retorna o sinal de x, indicando se é positivo, negativo ou zero
- Math.sin(x) Retorna o seno de um número (sinx)
- Math.sinh(x) Retorna o seno hiperbólico de um número (sinhx)
- Math.sqrt(x) Retorna a raiz quadrada positiva de um número (x)
- Math.tan(x) Retorna a tangente de um número (tanx)
- Math.tanh(x) Retorna a tangente hiperbólica de um número (tanhx)
- Math.toSource() Retorna a string "Math"
- Math.trunc(x) Retorna a parte inteira de x, removendo quaisquer dígitos fracionários
