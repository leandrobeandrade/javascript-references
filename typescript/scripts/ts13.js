var AjaxTest = /** @class */ (function () { 
    function AjaxTest() {
        // o = inicializado / 1 = enviando / 2 = enviado / 3 = processando / 4 = completado
        this.READY_STATE_CODE = 4;
    }
    AjaxTest.prototype.Completado = function (req) {
        return req.readyState == this.READY_STATE_CODE;
    };
    AjaxTest.prototype.httpGet = function (url, callback) {
        var _this = this;
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            var finalizado = _this.Completado(req);
            if (finalizado) {
                callback(req.status, req.responseText);
            }
        };
        req.open('Get', url, true);
        req.send();
    };
    AjaxTest.prototype.httpPost = function (url, data, callback) {
        var _this = this;
        var req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            var finalizado = _this.Completado(req);
            if (finalizado) {
                callback(req.status, req.responseText);
            }
        };
        req.open('Post', url, true);
        req.setRequestHeader('Content-type', 'aplication/json');
        req.send(data);
    };
    return AjaxTest; 
}());
var ajax_get = new AjaxTest();
ajax_get.httpGet('http://httpbin.org/ip', function (status, response) {
    var p = document.getElementById('p1');
    p.innerHTML = response;
});
var ajax_post = new AjaxTest();
ajax_post.httpPost('http://httpbin.org/post', '{nome:Fulano, empresa:TSX100}', function (status, response) {
    var p = document.getElementById('p2');
    p.innerHTML = response;
});
