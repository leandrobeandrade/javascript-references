var tm;

function inicia() {
	tm = setTimeout(function() {
		alert('Testando isto!!!');
	}, 2000);
};

addEventListener('click', inicia);
