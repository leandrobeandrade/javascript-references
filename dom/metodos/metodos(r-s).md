## removeAttribute() 
Remove um atributo especificado de um elemento:

    <h1 class="democlass">Alô Mundo!</h1>
    <a id="ancora" href="https://www.meusite.com">Meu site</a>
    <button onclick="removeAttr()">Apertar</button>

    function removeAttr() {
        document.getElementsByTagName('H1')[0].removeAttribute('class');
        document.getElementById('ancora').removeAttribute('href');
    }

#### Resultado

    <h1>Alô Mundo!</h1>
    <a id="ancora">Meu site</a>

## removeAttributeNode()
Remove um nó de atributo especificado e retorna o nó removido:

    <h1 class="democlass">Alô Mundo!</h1>
    <button onclick="removeAttrNode()">Apertar</button>
    
    function removeAttrNode() {
        var elem = document.getElementsByTagName('H1')[0];
        var attr = elem.getAttributeNode('class');
        elem.removeAttributeNode(attr);
    }

#### Resultado

    <h1>Alô Mundo!</h1>

## removeChild()
Remove um nó filho de um elemento, não podendo haver espaços entre os elementos no arquivo HTML:

    <ul id="lista"><li>Palmeiras</li><li>Grêmio</li><li>Vasco</li></ul>
    <button onclick="rmvChild()">Apertar</button>
    
    function rmvChild() {
        var list = document.getElementById('lista');
        lista.removeChild(list.childNodes[1]);
    }

#### Resultado

    <ul id="lista"><li>Palmeiras</li><li>Vasco</li></ul>

## removeEventListener()
Remove um manipulador de eventos que foi anexado com o método addEventListener():

    <button onclick="removeHandler()" id="btn">Apertar</button>
    <div id="div" style="width:400px;height:400px;"></div>

    document.getElementById('div').addEventListener('mouseover', Funcao);

    function Funcao() { console.log('Disparando...') }

    function removeHandler() {
        document.getElementById('div').removeEventListener('mouseover', Funcao);
    }

## replaceChild()
Substitui um nó filho em um elemento:

    <ul id="lista"><li>Grêmio</li><li>Vasco</li><li>Atlético-MG</li></ul>

    function inlcuir() {
        var textnode = document.createTextNode('Palmeiras');
        var item = document.getElementById('lista').childNodes[0];
        item.replaceChild(textnode, item.childNodes[0]);
    }

#### Resultado

    <ul id="lista"><li>Palmeiras</li><li>Vasco</li><li>Atlético-MG</li></ul>

## requestFullscreen()
Mostra um elemento no modo de tela cheia:

    <video width="100%" controls id="meu-video">
        <source src="rain.mp4" type="video/mp4">
        <source src="rain.ogg" type="video/ogg">
    </video>
    
    var elem = document.getElementById('myvideo');

    function openFullscreen() {
        elem.requestFullscreen();
    }

---

## setAttribute()
Define ou altera o atributo especificado, para o valor especificado:

    .demo{color: red;}
    
    <h1>Alô Mundo!</h1>
    <input value="OK">
    <button onclick="show()">Apertar</button>
    
    function show() {
        document.getElementsByTagName('h1')[0].setAttribute('class', 'democlass');
        document.getElementsByTagName('input')[0].setAttribute('type', 'button');
    }

## setAttributeNode()
Define ou altera o nó do atributo especificado:

    .demo{color: red;}
    
    <h1>Alô Mundo!</h1>
    <button onclick="show()">Apertar</button>

    function show() {
        var attr = document.createAttribute('class');
        attr.value = 'democlass';
        var h = document.getElementsByTagName('h1')[0];
        h.setAttributeNode(attr); 
    }