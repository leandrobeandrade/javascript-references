# Quantificadores

Por default, todos os quantificadores são gulosos: tentam casar a maior quantidade possível de caracteres

- **{n}** - Exatamente **`n`** ocorrências

	  let str = "Amanda";
      let regexp = new RegExp("a{2}", "gi");
	  let ret = str.match(regexp);
	  console.log(ret); // retorna ["A", "a", "a"]

	  let str = "Sandy";
	  let regexp = new RegExp("a{2}");
	  let ret = str.match(regexp);
	  console.log(ret); // retorna null

- **{n,m}** - No mínimo **`n`** ocorrências e no máximo **`m`**

      let str = "Amanda Caandy";
	  let regexp = new RegExp("a{1,2}", "gi");
	  let ret = str.match(regexp);
	  console.log(ret); // retorna ["A", "a", "a", "aa"]

	  let str = "Amanda Caandy testaaaa";
	  let regexp = new RegExp("a{1,3}", "gi");
	  let ret = str.match(regexp);
	  console.log(ret); // retorna ["A", "a", "a", "aa", "aaa", "a"]	

- **{n,}** - No mínimo **`n`** ocorrências

	  let str = "Amanda Caandy testaaaa";
	  let regexp = new RegExp("a{1,}", "gi");
	  let ret = str.match(regexp);
	  console.log(ret); // retorna ["A", "a", "a", "aa", "aaaa"]

- **?** - Equivalente a **`{0,1}`** e também pode ser considerado como um operador para especificar algo opcional

      let str = "Amanda";
	  let regexp = new RegExp("a?", "gi");
	  let ret = str.match(regexp);
	  console.log(ret); // retorna ["A", "", "a", "", "", "a", ""]
      
      let str = "Amanda";
      let regexp = new RegExp("[^a?]", "gi");
      let ret = str.match(regexp);
      console.log(ret); // retorna ["m", "n", "d"]

- <b>*</b> - Zero ou mais vezes, equivalente a **`{0,}`**
        
      let str = "Amanda";
	  let regexp = new RegExp("a*", "gi");
	  let ret = str.match(regexp);
	  console.log(ret); // retorna ["A", "", "a", "", "", "a", ""]  
        
      let str = "Amanda";
      let regexp = new RegExp("[^a*]", "gi");
      let ret = str.match(regexp);
      console.log(ret); // retorna ["m", "n", "d"]

- **+** - Uma ou mais vezes, equivalente a **`{1,}`**

      let stri = "Amanda caandy";
      let regexpi = new RegExp("a+", "gi");
      let reti = stri.match(regexpi);
      console.log(reti); // retorna ["A", "a", "a", "aa"]
      
- **...?** - Modera a captura se combinado com outros os outros quantificadores **`(* + ? {})`**

      let str = "<h1>Regex</h1>";
      let regexp = new RegExp("<.+>", "gi");   // sem o ? moderador
      let ret = str.match(regexp);
      console.log(ret); // retorna ["<h1>Regex</h1>"]
      
      let str = "<h1>Regex</h1>";
      let regexp = new RegExp("<.+?>", "gi");  // com o ? moderador
      let ret = str.match(regexp);
      console.log(ret); // retorna ["<h1>", "</h1>"]

