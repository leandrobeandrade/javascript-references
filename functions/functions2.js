var carro = {
	marca: 'Ford',
	model: 'Mustang'
	getModel: function() {
		return this.model
	}
}

carro.getModel();										// Invocada por um objeto

/*_____________________*/

var getModel = function() {
	return this.model
}

var carro = {
	marca: 'Ford',
	model: 'Mustang'
	getModel: getModel
}

carro.getModel();										// Invocada por um objeto

/*_____________________*/

var getModel = function(ano) {
	return this.model + ano
}

var carro = {
	marca: 'Ford',
	model: 'Mustang'
	getModel: getModel
}

getModel.call(carro, 2018);								// Invocada pelo método CALL

/*_____________________*/

var getModel = function(ano) {
	return this.model + ano
}

var carro = {
	marca: 'Ford',
	model: 'Mustang'
	getModel: getModel
}

getModel.call(carro, [2018]);							// Invocada pelo método APPLY