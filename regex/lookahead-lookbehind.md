# Lookaround assertions (Lookahead - Lookbehind)

Afirmações de aparência em expressões regulares em JavaScript.


## Lookahead (Positiva/Negativa)

Testa condições a direita de um marcação, ou seja, testa se uma string é seguida de um padrão. É definida pelos sinais **`?=`**

	let str = "1234";
	let regexp = /1(?=2)/;
	let ret = regexp.test(str);
	console.log(ret);	// retorna true

Negação de Lookahead pode ser feita utilizando o sinal ! depois do sinal ?

	let str = "134";
	let regexp = /1(?!2)/;
	let ret = regexp.test(str);
	console.log(ret);	// retorna true

	let str = "1234";
	let regexp = /1(?!2)/;
	let ret = regexp.test(str);
	console.log(ret);	// retorna false

## Lookbehind (Positiva/Negativa)

Testa condições a esquerda de uma marcação, ou seja, testa se uma string é precedida de um padrão. É definida pelos sinais **`?<=`**

	let str = "1234";
	let regexp = /(?<=1)2/;
	let ret = regexp.test(str);
	console.log(ret);	// retorna true

Negação de Lookbehind pode ser feita utilizando o sinal ! no lugar do =

	let str = "0234";
	let regexp = /(?<!1)2/;
	let ret = regexp.test(str);
	console.log(ret);	// retorna true

	let str = "1234";
	let regexp = /(?<!1)2/;
	let ret = regexp.test(str);
	console.log(ret);	// retorna false
