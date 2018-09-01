## dir
Define ou retorna o valor do atributo direção de um elemento:

    var x = document.getElementById("myP").dir;
    console.log(x)    // rtl - right to left
    
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

## firstChild
Retorna o primeiro nó filho de um elemento:

    <ul id="lista"><li>Coffee</li><li>Tea</li></ul>

    var prim = document.getElementById("lista").firstChild.innerHTML;
    console.log(prim);    // Café
    
## firstElementChild
Retorna o primeiro elemento filho de um elemento:

    <ul id="lista"><li>Caé</li><li>Chá</li></ul>

    var prim = document.getElementById("lista").firstChild.innerHTML;
    console.log(prim);    // Café
    
## getAttribute()
Retorna o valor do atributo especificado de um nó de elemento:
    
    <h1 class="democlass">Alô Mundo!</h1>
    
    var x = document.getElementsByTagName("H1")[0].getAttribute("class"); 
    console.log(x);     // democlass

## getAttributeNode()
Retorna o nó do atributo especificado:

    <h1 class="democlass">Alô Mundo!</h1>
    
    var x = document.getElementsByTagName("H1")[0];
    var attr = x.getAttributeNode("class").value; 
    console.log(x);     // democlass

## getBoundingClientRect() 
Retorna o tamanho de um elemento e sua posição relativa à viewport:

    <div id="minhaDiv" style="width:250px;height:150px;border:1px solid red;">
    
    var div = document.getElementById("minhaDiv");
    var rect = div.getBoundingClientRect();
    
    x = rect.left;
    y = rect.top;
    w = rect.width;
    h = rect.height;
    
    console.log("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + h);
