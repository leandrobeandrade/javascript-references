# Métodos

## exec()
Um método RegExp  que execute uma pesquisa por uma correspondência em uma string. Retorna um array de informações.

     let str = "Expressões regulares em JavaScript!";
     let regexp = new RegExp(/[j+]/i);
     let ret = regexp.exec(str);             retorna ["J"]
     
## test()	
Um método RegExp que testa uma correspondência em uma string. Retorna true ou false.

     let str = "Expressões regulares em JavaScript!";
     let regexp = new RegExp(/[j]/i);
     let ret = regexp.test(str);             retorna true

## match()
Um método String que executa uma pesquisa por uma correspondência em uma string. Retorna uma array de informações ou null caso não haja uma correspondência.

     let str = "The rain in SPAIN stays mainly in the plain"; 
     let ret = str.match(/ain/ig);           retorna ["ain", "AIN", "ain", "ain"]
     
## search()
Um método String que testa uma correspondência em uma string. Retorna o indice da correspondência ou -1 se o teste falhar.

     let str = "Expressões regulares em JavaScript!";
     let ret = str.search(/[j+]/i);          retorna 24
     
## replace()
Um método String que executa uma pesquisa por uma correspondência em uma string, e substitui a substring correspondênte por uma substring de substituição.

     let str = "Expressões regulares em JavaScript!";
     let ret = str.replace(/[r]/ig, "10");   retorna Exp10essões 10egula10es em JavaSc10ipt!
## split()
Um método String  que usa uma expressão regular ou uma string fixa para quebrar uma string dentro de um array de substrings. 

     let str = "Expressões regulares em JavaScript!";
     let ret = str.split(/[\t\s\n]/i);       retorna ["Expressões", "regulares", "em", "JavaScript!"]
