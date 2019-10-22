# Regex 

Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares também são `objetos`. Elas podem ser utilizadas com os métodos ***exec*** e ***test*** do objeto **`RegExp`**, e com os métodos ***match***, ***replace***, ***search***, e ***split*** do objeto **`String`**.

Há duas maneiras de construir uma expressão regular:

- Usando uma expressão literal, que consiste em um padrão fechado entre barras que são compiladas quando o script é carregado, como o exemplo a seguir:

      let regexp = /ab+c/;                      indicado quando o padrão não vai ser alterado
      
- Ou chamando o construtor do objeto RegExp, que a compilação da expressão regular é realizada em tempo de execução:
      
      let str = 'ab+c'       
      let regexp = new RegExp(test);            indicado quando o padrão for ser alterado

<h3><u>Sites para testar regex</u></h3>

- **https://regex101.com**
- **https://regexr.com**


</b><h3><u>QUANTIFICADORES</u></h3>
<li>* - <b>Encontra 0 ou mais ocorrências no texto</li>
<li>+ - <b>Encontra 1 ou mais ocorrências no texto</b></li>
<li>? - <b>Encontra o primeiro caractere ou os outros seguintes especificados como *exp - achado em explain, explorer, expression*</b></li>
<li>{} - <b>Define a quantidade de vezes que uma ocorrência será retornada *pode receber dois valores separados por vírgula*</b></li>
<h3><u>AGRUPADORES</u></h3>
<li>[0-9] - <b>Encontra qualquer ocorrência de dígito entre os colchetes *por exemplo [\d\,\.] em 23.450,00*</b></li>
<li>[a-z] - <b>Encontra qualquer ocorrência de caractere entre os colchetes *por exemplo [cao]*</b></li>
<li>() - <b>Realiza um agrupamento de ocorrências a ser encontrada</b></li>


![](https://github.com/leandrobeandrade/javascript-references/blob/master/regex/regex.png)  
