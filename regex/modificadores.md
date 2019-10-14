# Modificadores regex Javascript: 

## i
Retorna a ocorrência em maiúscula e mínuscula

      let str = "ExpresSões regulareS em JavaScript!";
      let regexp = /s/i;
      let ret = regexp.exec(str);           retorna ExpresSões regulareS em JavaScript!

## g
Retorna todas as ocorrências encontradas

## m
Retorna a ocorrência mesmo com quebra de linhas ou seja multilinhas
