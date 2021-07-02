# Métodos
São funções que executam as ações sobre os padrões da expressão regular.

## exec()
Um método RegExp  que execute uma pesquisa por uma correspondência em uma string. Retorna um `array` de informações

     let str = "Expressões regulares em JavaScript!";
     let regexp = /j/i;
     let ret = regexp.exec(str);
     console.log(ret);  // retorna ["J"]
     
## test()	
Um método RegExp que testa uma correspondência em uma string. Retorna `true` ou `false`

     let str = "Expressões regulares em JavaScript!";
     let regexp = /j/i;
     let ret = regexp.test(str);
     console.log(ret); // retorna true

## match()
Um método String que executa uma pesquisa por uma correspondência em uma string. Retorna uma `array` de informações ou `null` caso não haja uma correspondência

     let str = "The rain in SPAIN stays mainly in the plain";
     ler regexp = /ain/ig;
     let ret = str.match(regexp);
     console.log(ret);  // retorna ["ain", "AIN", "ain", "ain"]
     
## search()
Um método String que testa uma correspondência em uma string. Retorna o `indice` da correspondência ou `-1` se o teste falhar

     let str = "Expressões regulares em JavaScript!";
     let regexp = /j/i;
     let ret = str.search(regexp);
     console.log(ret);  // retorna 24
     
## replace()
Um método **String** que executa uma pesquisa por uma correspondência em uma string, e substitui a substring correspondênte por uma substring de substituição

     let str = "Expressões regulares em JavaScript!";
     let regexp = /r/ig;
     let ret = str.replace(regexp, "10");
     console.log(ret); // retorna Exp10essões 10egula10es em JavaSc10ipt!
     
## split()
Um método **String** que usa uma expressão regular ou uma string fixa para quebrar uma string dentro de um array de substrings

     let str = "Expressões regulares em JavaScript!";
     let regexp = /[\t\s\n]/i;
     let ret = str.split(regexp);
     console.log(ret);  // retorna ["Expressões", "regulares", "em", "JavaScript!"]
