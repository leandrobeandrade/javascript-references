# Métodos de execução para regex Javascript:

- **exec()** => Um método RegExp  que execute uma pesquisa por uma correspondência em uma string. Retorna um array de informações.
- **test()** =>	Um método RegExp que testa uma correspondência em uma string. Retorna true ou false.
- **match()** =>Um método String que executa uma pesquisa por uma correspondência em uma string. Retorna uma array de informações ou null caso não haja uma correspondência.
- **search()** =>	Um método String que testa uma correspondência em uma string. Retorna o indice da correspondência ou -1 se o teste falhar.
- **replace()** =>	Um método String que executa uma pesquisa por uma correspondência em uma string, e substitui a substring correspondênte por uma substring de substituição.
- **split()** =>	Um método String  que usa uma expressão regular ou uma string fixa para quebrar uma string dentro de um array de substrings.

## Exemplo exec()

     let str = "Expressões regulares em JavaScript!";
     let regexp = new RegExp(/[j+]/i);
     let ret = regexp.exec(str);    retorna ["J"]
     
## Exemplo test()

     let str = "Expressões regulares em JavaScript!";
     let regexp = new RegExp(/[j]/i);
     let ret = regexp.test(str);      retorna true
     
## Exemplo match()
     
     let str = "The rain in SPAIN stays mainly in the plain"; 
     let ret = str.match(/ain/ig);  retorna ["ain", "AIN", "ain", "ain"]
     
## Exemplo search()

     let str = "Expressões regulares em JavaScript!";
     let ret = str.search(/[j+]/i);  retorna 24
     
## Exemplo replace()

     let str = "Expressões regulares em JavaScript!";
     let ret = str.replace(/[r]/ig, "10"); retorna Exp10essões 10egula10es em JavaSc10ipt!

## exemplo split()

     let str = "Expressões regulares em JavaScript!";
     let ret = str.split(/[\t\s\n]/i);  retorna ["Expressões", "regulares", "em", "JavaScript!"]


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
