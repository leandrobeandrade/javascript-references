var clickHandler = /** @class */ (function () {
    function clickHandler() {
        var main = document.getElementById('main');
        var btn1 = document.getElementById('btn1');
        var btn2 = document.getElementById('btn2');
        if (main !== null && btn1 !== null && btn2 !== null) {
            main.addEventListener('click', clickHandler.alertEventMain, true); // true/false - useCapture 
            btn1.addEventListener('click', clickHandler.alertEventBtn1, true);
            btn2.addEventListener('click', clickHandler.alertEventBtn2, true);
        }
    }
    clickHandler.alertEventMain = function (e) {
        alert('Clicado o main');
        e.stopPropagation();
    };
    clickHandler.alertEventBtn1 = function () {
        alert('Clicado o btn1');
    };
    clickHandler.alertEventBtn2 = function () { 
        alert('Clicado o btn2');
    };
    return clickHandler;
}());
var click = new clickHandler();
