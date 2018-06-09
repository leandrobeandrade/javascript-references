var Validacao;
(function (Validacao) {
    var emailRegex = /^([a-z0-9\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    var urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;
    var emailValidador = /** @class */ (function () {
        function emailValidador() {
        }
        emailValidador.prototype.valido = function (str) {
            return emailRegex.test(str);
        };
        return emailValidador;
    }());
    Validacao.emailValidador = emailValidador;
    var urlValidador = /** @class */ (function () {
        function urlValidador() {
        }
        urlValidador.prototype.valido = function (str) {
            return urlRegex.test(str);
        };
        return urlValidador;
    }());
    Validacao.urlValidador = urlValidador;
})(Validacao || (Validacao = {}));
