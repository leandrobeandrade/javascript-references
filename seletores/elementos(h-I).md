## hasAttribute()
Retorna *true* se um elemento tiver o atributo especificado, caso contrário, *false*:

    <button id="btn" onclick="myFunction()">Apertar</button>

    var x = document.getElementById("btn").hasAttribute("onclick");
    console.log(x);   // true

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

## innerHTML 
Define ou retorna o conteúdo de um elemento:

    <p id="demo">Testando</p>
    <p id="teste"></p>
    
    var demo = document.getElementById("demo").innerHTML;   // captura o texto
    document.getElementById("teste").innerHTML = demo;      // insere o texto
    
## innerText
Define ou retorna o conteúdo de texto de um nó e seus descendentes:

    <p id="demo">Testando</p>
    
    var x = document.getElementById("demo").innerText;
    console.log(x);   // Testando

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
    
## isContentEditable
Retorna *true* se o conteúdo de um elemento é editável, caso contrário, *false*:

    <p id = "p" contenteditable="true">Área editável</p>
    
    var x = document.getElementById("p").isContentEditable;
    console.log(x);   // true

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
