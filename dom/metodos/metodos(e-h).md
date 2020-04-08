## exitFullscreen()
Cancela um elemento no modo de tela cheia:

    <button onclick="abreFullscreen();">Open Fullscreen</button>
    <button onclick="fechaFullscreen();">Close Fullscreen</button>
    
    var elem = document.documentElement;
    
    function abreFullscreen() {
      elem.requestFullscreen();
    }
    
    function fechaFullscreen() {
      document.exitFullscreen();
    }

---

## getAttribute()
Retorna o valor do atributo especificado de um nó de elemento:
    
    <h1 class="democlass">Alô Mundo!</h1>
    
    var elem = document.getElementsByTagName('h1')[0].getAttribute('class'); 
    console.log(elem);  // democlass

## getAttributeNode()
Retorna o nó do atributo especificado:

    <h1 class="democlass">Alô Mundo!</h1>
    
    var elem = document.getElementsByTagName('h1')[0];
    var attr = elem.getAttributeNode('class').value; 
    console.log(attr);  // democlass

## getBoundingClientRect() 
Retorna o tamanho de um elemento e sua posição relativa à viewport:

    <div id="minhaDiv" style="width:250px;height:150px;border:1px solid red;">
    
    var div = document.getElementById('minhaDiv');
    var rect = div.getBoundingClientRect();
    
    x = rect.left;
    y = rect.top;
    w = rect.width;
    h = rect.height;
    
    console.log('Left: ' + x + ', Top: ' + y + ', Width: ' + w + ', Height: ' + h);

---

## hasAttribute() 
Retorna *true* se um elemento tiver o atributo especificado, caso contrário, *false*:

    <button id="btn" onclick="check()">Checar</button>

    var elem = document.getElementById('btn').hasAttribute('onclick');
    console.log(elem);  // retorna true

## hasAttributes()
Retorna *true* se um elemento tiver algum atributo, caso contrário, *false*:

    <p> Clique no botão para descobrir se o elemento body possui algum atributo. </ p>
    <button onclick = "myFunction()">Apertar</button>
    
    var x = document.body.hasAttributes();
    console.log(x);  // true

## hasChildNodes()
Retorna *true* se um elemento tiver algum nó filho, caso contrário, *false*:

    <ul id="lista"><li>Café</li><li>Chá</li></ul>
    
    var lista = document.getElementById('lista').hasChildNodes();
    console.log(lista);  // true
