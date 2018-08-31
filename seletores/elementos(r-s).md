## removeAttribute()
Remove um atributo especificado de um elemento:

    <h1 class="democlass">Alô Mundo!</h1>
    <a id="ancora" href="https://www.meusite.com">Meu site</a>
    <button onclick="myFunction()">Apertar</button>

    function myFunction() {
      document.getElementsByTagName("H1")[0].removeAttribute("class");
      document.getElementById("ancora").removeAttribute("href");
    }

## removeAttributeNode()
Remove um nó de atributo especificado e retorna o nó removido:

    <h1 class="democlass">Hello World</h1>
    <button onclick="myFunction()">Apertar</button>
    
    function myFunction() {
      var elmnt = document.getElementsByTagName("H1")[0];
      var attr = elmnt.getAttributeNode("class");
      elmnt.removeAttributeNode(attr);
    }    

## removeChild()
Remove um nó filho de um elemento:

    <ul id="lista"><li>Café</li><li>Chá</li><li>Leite</li></ul>
    <button onclick="myFunction()">Apertar</button>
    
    function myFunction() {
      var list = document.getElementById("lista");
      lista.removeChild(list.childNodes[0]);
    }


## removeEventListener()
Remove um manipulador de eventos que foi anexado com o método addEventListener():

    <div id="teste" style="width:400px;height:400px;"></div>
    <button onclick="removeHandler()" id="myBtn">Apertar</button>

    document.getElementById("teste").addEventListener("mousemove");

    function removeHandler() {
      document.getElementById("teste").removeEventListener("mousemove");
    }

## replaceChild()
Substitui um nó filho em um elemento:

    <ul id="lista"><li>Café</li><li>Chá</li><li>Leite</li></ul>

    function myFunction() {
      var textnode = document.createTextNode("Água");
      var item = document.getElementById("lista").childNodes[0];
      item.replaceChild(textnode, item.childNodes[0]);
    }


## requestFullscreen()
Mostra um elemento no modo de tela cheia:

    <video width="100%" controls id="meu-video">
      <source src="rain.mp4" type="video/mp4">
      <source src="rain.ogg" type="video/ogg">
    </video>
    
    var elem = document.getElementById("myvideo");

    function openFullscreen() {
      elem.requestFullscreen();
    }

