# Quantificadores

- **{n}** => exatamente n ocorrências

	    let str = "Amanda";
      let regexp = new RegExp("a{2}", "gi");
	    let ret = str.match(regexp);
	    console.log(ret);		// retorna ["A", "a", "a"]

	    let str = "Sandy";
	    let regexp = new RegExp("a{2}");
	    let ret = str.match(regexp);
	    console.log(ret);		// retorna null

- **{n,m}** => no mínimo n ocorrências e no máximo m

	let str = "Amanda Caandy";
	let regexp = new RegExp("a{1,2}", "gi");
	let ret = str.match(regexp);
	console.log(ret);		// retorna ["A", "a", "a", "aa"]

	let str = "Amanda Caandy testaaaa";
	let regexp = new RegExp("a{1,3}", "gi");
	let ret = str.match(regexp);
	console.log(ret);		// retorna ["A", "a", "a", "aa", "aaa", "a"]	

- **{n,}** => no mínimo n ocorrências

	let str = "Amanda Caandy testaaaa";
	let regexp = new RegExp("a{1,3}", "gi");
	let ret = str.match(regexp);
	console.log(ret);

- **{,n}** => no máximo n ocorrências
- ** ? ** => 0 ou 1 ocorrência, equivalente a {,1}
- ** * ** => 0 ou mais vezes, equivalente a {0,}
- ** + ** => 1 ou mais vezes, equivalente a {1,}
-** ...? ** => modera a captura se combinado com outros os outros quantificadores (? * +) 
