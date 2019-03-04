import validacoesEmail = Validacao.emailValidador;
import validacoesUrl = Validacao.urlValidador;


let emailExemplos = ['teste@', 'teste@teste', 'teste@teste.com.br'];
let urlExemplos = ['google.com', 'www.google.com', 'http:///googel.com'];

emailExemplos.forEach(email => {
	console.log(`${email} ${new validacoesEmail().valido(email)}`);
});

urlExemplos.forEach(url => {
	console.log(`${url} ${new validacoesUrl().valido(url)}`);
}) 
