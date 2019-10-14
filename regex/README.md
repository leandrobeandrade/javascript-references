# Regex 

Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares também são `objetos`. Elas podem ser utilizadas com os métodos ***exec*** e ***test*** do objeto **`RegExp`**, e com os métodos ***match***, ***replace***, ***search***, e ***split*** do objeto **`String`**.

Há duas maneiras de construir uma expressão regular:

- Usando uma expressão literal, que consiste em um padrão fechado entre barras que são compiladas quando o script é carregado, como o exemplo a seguir:

      const re = /ab+c/;                  indicado quando o padrão não vai ser alterado
      
- Ou chamando o construtor do objeto RegExp, que a compilação da expressão regular é realizada em tempo de execução:
      
      let test = 'ab+c'       
      let rege = new RegExp(test);        indicado quando o padrão for ser alterado

<h3><u>FUNÇÕES</u></h3>
<li>test() - <b>Executa a regex e retorna true ou false</b></li>
<li>exec() - <b>Executa a regex e retorna a ocorrência da regex *Somente a 1º ocorrência*</b></li>
<li>match - <b>Exibe todas as ocorrências encontradas *tem que ter o modificador g*</b></li>
<li>search - <b>Exibe o index da primeira ocorrência encontrada</b></li>
<li>replace - <b>Substitui uma ocorrência por outra especificada *Exemplo /teste/.replace('Testando')*</b></li>
<li>split - <b>Separa os caracteres em um vetor por outro caractere especificado como *- , .*</b></li>
<h3><u>MODIFICADORES</u></h3>
<li>i - <b>Retorna a ocorrência em maiúscula e mínuscula</b></li>
<li>g - <b>Retorna todas as ocorrências encontradas</b></li>
<li>m - <b>Retorna a ocorrência mesmo com quebra de linhas ou seja multilinhas</b></li>
<h3><u>METACARACTERES</u></h3>
<li>. - <b>Encontra qualquer ocorrência, caracteres, letras, números *dentro da mesma linha*</b></li>
<li>\w - <b>Encontra qualquer caractere, número e underline</b></li>
<li>\s - <b>Encontra espaços entre caracteres</b></li>
<li>\d - <b>Encontra qualquer dígito</b></li>
<li>^ - <b>Encontra uma ocorrência no início do texto</b></li>
<li>$ - <b>Encontra uma ocorrência no final do texto</li>
<li>| - <b>Econtra uma ocorrência ou outra em um padrão como *a|b*</b></li>
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
