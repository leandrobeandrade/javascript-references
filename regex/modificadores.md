# Modificadores

## g - global
Corresponde a todas as ocorrências encontradas

      let str = "ExpresSões regulareS em JavaScript!";
      let regexp = /s/g;
      let ret = str.match(regexp);          
      console.log(ret)                      // retorna ["s", "s"]

## i - insensitive
Corresponde a caracteres em maiúsculo e minúsculo

      let str = "ExpresSões regulareS em JavaScript!";
      let regexp = /s/ig;
      let ret = str.match(regexp);           
      console.log(ret);                     // retorna ["s", "S", "s", "S", "S"]

## m - multiline
Corresponde a ocorrência mesmo com quebras de linhas, ou seja, multilinhas

      let str = "\nExpresSões regulareS \nem JavaScript!";
      let regexp = /^e/img;
      let ret = str.match(regexp);          // retorna ["E", "e"]

## y - sticky
corresponde a ocorrência exatamente no índice indicado, se não houver caracetere retorna null

      let str = "Regex JavaScript!";
      let regexp = /\w+/g;
      regexp.lastIndex = 5;
      let ret = regexp.exec(str);
      console.log(ret[0] +': '+ ret.index);  // retorna JavaScript: 6 - pula para o próximo índice
      
      let str = "Regex JavaScript!";
      let regexp = /\w+/y;
      regexp.lastIndex = 5;
      console.log(regexp.exec(str));        // retorna null - não pula para o próximo índice
      
