## Especificam o conjunto de caracteres a casar em uma posição.

- **. (curinga)** => corresponde a qualquer caractere, exceto a quebra de linha **`\n`**

      let str = "nove dias restantes para onze de agosto.";
      let regexp = new RegExp(/.n/g);
      let ret = str.match(regexp);  
      console.log(ret)  // retorna ["an", "on"], não acha no em nove pois está no começo da string
      
- **[ ] (conjunto)** => corresponde a qualquer caractere incluido no conjunto, hífen é utilizado para especificar um intervalo, caracteres especiais como **`.`** e **`*`** não precisam ser escapados e não tem função dentro dos []

      let str = "abcdefghij";
      let regexp = new RegExp(/[abcd]/g) // ou new RegExp(/[a-d]/);
      let ret = str.match(regexp);
      console.log(ret)  // retorna ["a", "b", "c", "d"]

- **[^] (conjunto negado)** => corresponde a qualquer caractere não incluído no conjunto

      let str = "abcdefgh";
      let regexp = new RegExp(/[^abcd]/g) // ou new RegExp(/[^a-d]/);
      let ret = str.match(regexp);        
      console.log(ret)  // retorna ["e", "f", "g", "h"]
      
- **{} (quantificadores)** => indicador que determina quantas vezes a sequência imediatamente precedente deve ocorrer no padrão, ver mais [aqui](https://github.com/leandrobeandrade/javascript-references/blob/master/regex/quantificadores.md)

      let str = "hahaha";
      let regexp = new RegExp("[ha]{3}");
      let ret = str.match(regexp);
      console.log(ret); // retorna ["hah", "aha"]
      
- **() (agrupadores)** => cria grupos de captrua na regex, ver mais [aqui](https://github.com/leandrobeandrade/javascript-references/blob/master/regex/agrupadores.md)

      let str = "hahaha";
      let regexp = new RegExp("(ha){2}");
      let ret = str.match(regexp);
      console.log(ret);	// retorna ["haha"]

- **\d (dígito)** => o mesmo que [0-9]

      let str = "Regex é 10.";
      let regexp = new RegExp(/\d/g);
      let ret = str.match(regexp);        // retorna ["1", "0"]

- **\D (não-digíto)** => o mesmo que [^0-9]

      let str = "Regex é 10.";
      let regexp = new RegExp(/[^\d]/g);
      let ret = str.match(regexp);  
      console.log(ret)  // retorna ["R", "e", "g", "e", "x", " ", "é", " ", "."]

- **\s (espaços)** => tudo que gere espaços, quebra de linha, tabs etc... O mesmo que [\s\n\t\r\f\v]

      let str = "Tente outra vez!";
      let regexp = new RegExp(/\s/);
      let ret = str.match(regexp);
      console.log(ret); // retorna [" ", " "]

- **\S (sem espaços)** => o mesmo que [^ \t\n\r\f\v]
      
      let str = "Tente outra vez!";
      let regexp = new RegExp(/[^\s]/g);
      let ret = str.match(regexp);
      console.log(ret); // retorna ["T", "e", "n", "t", "e", "o", "u", "t", "r", "a", "v", "e", "z", "!"]
      
- **\w (alfanumérico)** => o mesmo que [a-zA-Z0-9_], embora possa incluir caracteres Unicode

      let str = "Tente outra vez *&(";
      let regexp = new RegExp(/\w/);
      let ret = str.match(regexp);
      console.log(ret); // retorna ["T", "e", "n", "t", "e", "o", "u", "t", "r", "a", "v", "e", "z"]

- **\W (não-alfanumérico)** => para caracteres especiais como **`%`** e **`&`** por exemplo

      let str = "Tente outra vez *&(";
      let regexp = new RegExp(/\w/);
      let ret = str.match(regexp);
      console.log(ret); // retorna [" ", " ", " ", "*", "&", "("]

- **\	(escape)** => anula o significado especial do metacaractere seguinte
      
      let str = "Tente outra vez.";
      let regexp = new RegExp(/\./);
      let ret = str.match(regexp);
      console.log(ret); // retorna ["."]
      
- **^ (início de texto)** => 	corresponde ao início do texto. Se a flag **`m`** for setada para true, também se aplica imediatamente após um caractere de quebra de linha

      let str = "Tente outra vez.";
      let regexp = new RegExp(/^T/);
      let ret = regexp.test(str);
      console.log(ret); // retorna true
      
- **$ (fim de texto)** => corresponde ao final do texto. Se a flag **`m`** for setada para true, também se aplica imediatamente antes de um caractere de quebra de linha

      let str = "Correr";
      let regexp = new RegExp(/r$/);
      let ret = regexp.test(str);
      console.log(ret); // retorna true
      
- **| (pipe ou alternativa)** => procura por uma correspondência na regex à direita ou à esquerda
      
      let str = "Palmeiras são roxas e as nuvens são azuis.";
      let regexp = new RegExp(/verdes|azuis/);
      let ret = regexp.exec(str);
      console.log(ret); // retorna ["azuis"]
      
      let str = "Palmeiras são verdes e as nuvens são azuis.";
      let regexp = new RegExp(/verdes|azuis/);
      let ret = regexp.exec(str);
      console.log(ret); // retorna ["verdes", "azuis"]
