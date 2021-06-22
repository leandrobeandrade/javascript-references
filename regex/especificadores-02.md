## Especificam o conjunto de caracteres a casar em uma posição.

- **\b (borda ou fronteira de caractere)** => corresponde a posição onde um caractere/palavra não é seguido ou antecedido por outro caractere/palavra

      let str = "moon";
      let regexp = new RegExp(/\bmoo/);
      let ret = str.match(regexp);
      console.log(ret);	// retorna ["moo"] pois não tem nenhum caractere ou espaço antes da expressão

      let str = "moon";
      let regexp = new RegExp(/oo\b/);
      let ret = str.match(regexp);
      console.log(ret);	// retorna null pois tem caracteres tanto antecedendo quanto precedendo a expressão

- **\B (não borda)** => Pesquisa correspondências que não sejam em uma fronteira de caractere
		
      let str = "moon";
      let regexp = new RegExp(/oo\B/);
      let ret = str.match(regexp);
      console.log(ret);	// retorna ["oo"]

- **\n (quebra de linha)** => Encontra correspondência com um caractere de escape quebra de linha
    
      let str = "Moon \nLight.";
      let regexp = new RegExp(/\n/);
      let ret = regexp.test(str);
      console.log(ret);	// retorna true

- **\r (retorno de carro)** => Encontra correspondência com um caractere de escape retorno de carro

      let str = "Moon \nLight.";
      let regexp = new RegExp(/\r/);
      let ret = regexp.test(str);
      console.log(ret);	// retorna true

- **\f (avanço de página)** => Encontra correspondência com um caractere de escape avanço de página

      let str = "Moon \fLight.";
      let regexp = new RegExp(/\f/);
      let ret = regexp.test(str);
      console.log(ret);	// retorna true

- **\t (tabulação)** => Encontra correspondência em uma tabulação

      let str = "Moon \tLight.";
      let regexp = new RegExp(/\t/);
      let ret = regexp.test(str);
      console.log(ret);	// retorna true

- **\v (tabulação vertical)** => Encontra correspondência em uma tabulação vertical

      let str = "Moon \vLight.";
      let regexp = new RegExp(/\v/);
      let ret = regexp.test(str);
      console.log(ret);	// retorna true
