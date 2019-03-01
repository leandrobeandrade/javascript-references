var validacoesEmail = Validacao.emailValidador; 
var validacoesUrl = Validacao.urlValidador;
var emailExemplos = ['teste@', 'teste@teste', 'teste@teste.com.br'];
var urlExemplos = ['google.com', 'www.google.com', 'http:///googel.com'];
emailExemplos.forEach(function (email) {
    console.log(email + " " + new validacoesEmail().valido(email));
});
urlExemplos.forEach(function (url) {
    console.log(url + " " + new validacoesUrl().valido(url));
}); 
