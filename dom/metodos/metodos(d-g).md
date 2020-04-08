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
    console.log(attr);     // democlass

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

    #################################

    ## hasAttribute() 
Retorna *true* se um elemento tiver o atributo especificado, caso contrário, *false*:

    <button id="btn" onclick="check()">Checar</button>

    var elem = document.getElementById('btn').hasAttribute('onclick');
    console.log(elem);   // retorna true

## hasAttributes()
Retorna *true* se um elemento tiver algum atributo, caso contrário, *false*:

    <p> Clique no botão para descobrir se o elemento body possui algum atributo. </ p>

    <button onclick = "myFunction()">Apertar</button>
    
    var x = document.body.hasAttributes();
    console.log(x);   // true

## hasChildNodes()
Retorna *true* se um elemento tiver algum nó filho, caso contrário, *false*:

    <ul id="lista"><li>Café</li><li>Chá</li></ul>
    
    var lista = document.getElementById("lista").hasChildNodes();
    console.log(lista);   // true


## insertAdjacentElement()
Insere um elemento HTML na posição especificada em relação ao elemento atual. Os valores possíveis são *afterbegin*
*afterend*, *beforebegin*, *beforeend*:

    <span style="color:red">Span</span>
    <h2 id="H2">Header</h2>

    var s = document.getElementsByTagName("span")[0];
    var h = document.getElementById("H2");
    h.insertAdjacentElement("afterend", s); // inverte as posições

## insertAdjacentHTML()
Insere um texto formatado em HTML na posição especificada em relação ao elemento atual. Os valores possíveis são *afterbegin*
*afterend*, *beforebegin*, *beforeend*:

    <h2 id="H2">Header</h2>
    <p>Clique no botão para inserir um parágrafo após o header:</p>
    <button onclick = "myFunction()">Apertar</button>
    
    var h = document.getElementById("H2");
    h.insertAdjacentHTML("afterend", "<p>Meu novo parágrafo</p>"); // Insere um p depois da tag h2


## insertAdjacentText()
Insere texto na posição especificada em relação ao elemento atual. Os valores possíveis são *afterbegin*
*afterend*, *beforebegin*, *beforeend*:

    <h2 id="H2">Header</h2>
    <p>Clique no botão para inserir um parágrafo após o header:</p>
    <button onclick = "myFunction()">Apertar</button>
    
    var h = document.getElementById("H2");
    h.insertAdjacentHTML("afterend", Meu novo parágrafo"); // Insere o texto depois da tag h2


## insertBefore()
Insere um novo nó filho antes de um nó filho especificado, existente:

    <ul id="lista"><li>Café</li><li>Chá</li></ul>

    var novoItem = document.createElement("LI");
    var textnode = document.createTextNode("Água");
    newItem.appendChild(textnode);

    var lista = document.getElementById("lista");
    lista.insertBefore(novoItem, lista.childNodes[0]);

## isDefaultNamespace()
Retorna *true* se um namespaceURI especificado for o padrão, caso contrário, *false*:

    var d = document.documentElement;
    var x = d.isDefaultNamespace("http://www.seusite.com"); 
    console.log(x);   // true 

## isEqualNode()
Verifica se dois elementos são iguais:
    
    <button onclick="myFunction('lista1','lista2')">Comparar Listas 1 e 2</button>
    <button onclick="myFunction('lista2','lista3')">Comparar Listas 1 e 3</button>
    
    Lista 1:
    <ul id="lista1"><li>Águar</li><li>Leite</li></ul>
    Lista 2:
    <ul id="lista2"><li>Água</li><li>Suco</li></ul>
    
    function myFunction(x,y) {
      var item1 = document.getElementById(x).firstChild;
      var item2 = document.getElementById(y).firstChild;
      var x = item1.isEqualNode(item2);
    
      console.log(x);   // true
    }

## isSameNode()
Verifica se dois elementos são o mesmo nó:

    <ul id="lista"><li>Café</li><li>Chá</li></ul>

    var item1 = document.getElementById("lista");
    var item2 = document.getElementsByTagName("ul")[0];
    var x = item1.isSameNode(item2);
    console.log(x);   // true

## normalize()
Une nós de texto adjacentes e remove nós de texto vazios em um elemento:

    <p id="demo">Clique neste botão para adicionar texto no parágrafo, e no outro botão para normalizar.</p>
    <button onclick="addTextNode()"> Adicionar um nó de texto </button>
    <button onclick="normPara()"> Normalizar o parágrafo </button>
    <p> O parágrafo acima tem <span id="cc"> 1 </span> nó(s) filho(s).</p>
    
    function addTextNode() {
      var x = document.createTextNode(" Clique de novo");
      var y = document.getElementById("demo");
      y.appendChild(x);
      var x = document.getElementById("cc");
      x.innerHTML = y.childNodes.length;
    }

    function normPara() {
      var x = document.getElementById("demo");  
      x.normalize();
      var y = document.getElementById("cc");
      y.innerHTML = x.childNodes.length;
    }


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


    ## setAttribute()
Define ou altera o atributo especificado, para o valor especificado:

    .demo{color: red;}
    
    <h1>Alô Mundo!</h1>
    <input value="OK">
    <button onclick="show()">Apertar</button>
    
    function show() {
        document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
        document.getElementsByTagName("INPUT")[0].setAttribute("type", "button");
    }

## setAttributeNode()
Define ou altera o nó do atributo especificado:

    .demo{color: red;}
    
    <h1>Alô Mundo!</h1>
    <button onclick="show()">Apertar</button>

    function show() {
        var attr = document.createAttribute("class");
        attr.value = "democlass";
        var h = document.getElementsByTagName("H1")[0];
        h.setAttributeNode(attr); 
    }