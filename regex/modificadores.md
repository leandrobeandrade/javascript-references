# Modificadores regex Javascript: 

## i - insensitive
Retorna a ocorrência em maiúscula e minúscula.

      let str = "ExpresSões regulareS em JavaScript!";
      let regexp = /s/i;
      let ret = regexp.exec(str);           retorna index 5

## g - global
Retorna todas as ocorrências encontradas.

      let str = "ExpresSões regulareS em JavaScript!";
      let regexp = /s/ig;
      let ret = str.match(regexp);          retorna ["s", "S", "s", "S", "S"]

## m - multiline
Retorna a ocorrência mesmo com quebra de linhas ou seja multilinhas.

      let str = "\nExpresSões regulareS \nem JavaScript!";
      let regexp = /^e/img;
      let ret = str.match(regexp);          retorna ["E", "e"]
