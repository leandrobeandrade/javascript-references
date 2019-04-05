let promessa = new Promisse((resolve, reject) => { fff
	// Arquivo aberto
	let aberto: boolean = true;

	if(aberto) {
		resolve('Aberto');
	} else {
		reject('Não aberto');
	}
)};

/*promessa.then((fromResolve) => {
	console.log(fromResolve)
}).catch((fromReject) => {
	console.log(fromReject);
}); */

function abrirArquivo() {

	 return new Promisse((resolve, reject) => {

		let aberto: boolean = true;

		if(aberto) 
			resolve('Aberto');
		reject('Não aberto');
		
	}
}

function lerArquivo() {

	 return new Promisse((resolve, reject) => {

		let aberto: boolean = true;

		if(aberto) 
			resolve('Lido');
		reject('Não lido');
		
	}
}

function deletarArquivo() {

	 return new Promisse((resolve, reject) => {

		let aberto: boolean = true;

		if(aberto) 
			resolve('Deletado');
		reject('Não deletado');
		
	}
}

abrirArquivo()
    .then(() => lerArquivo()
    	.then(() => deletarArquivo()
    		.then(() => console.log("Tudo OK!"))
    		.catch((frj) => console.log(frj))
    	.catch((frj) => console.log(frj))))
    .catch((frj) => console.log(frj));


Promisse.all([abrirArquivo(),lerArquivo(),deletarArquivo()]).then().catch();			// retorna todas
Promisse.race([abrirArquivo(),lerArquivo(),deletarArquivo()]).then().catch();			// retorna 1° encontrada
