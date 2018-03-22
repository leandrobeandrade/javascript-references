var texto =  'Testando Javascript, exercitando Javascript e mais JAVASCRIPT!';
	var teste1 = texto.length; // mostra o tamanho
	var teste2 = texto.replace('Javascript', 'ECMASCRIPT2015'); // substitui a ocorrência
	var teste3 = texto.indexOf('Javascript'); // acha a 1º ocorrência (aceita 2º parâmetro para onde deve começar)
	var teste4 = texto.lastIndexOf('Javascript'); // acha a última ocorrência (aceita 2º parâmetro *mesmo)
	var teste5 = texto.search('Javascript'); // acha a 1º ocorrência (igual o indexOf)
	var teste6 = texto.slice(8,19); // corta o texto a partir da posição desejada (aceita numeros negativos)
	var teste7 = texto.substring(8,19); // corta o texto a partir da posição desejada (nao aceita numeros negativos)
	var teste8 = texto.substr(8,11); // corta o texto pela posição(8) e pelo tamanho(10)
	var teste9 = texto.toUpperCase(); // converte o texto para maiuscula
	var teste10 = texto.toLowerCase(); // converte o texto para minuscula

	console.log(texto);
	console.log(teste1);
	console.log(teste2);
	console.log(teste3);
	console.log(teste4);
	console.log(teste5);
	console.log(teste6);
	console.log(teste7);
	console.log(teste8);
	console.log(teste9);
	console.log(teste10);
