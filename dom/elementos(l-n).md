## lang
Define ou retorna o valor do atributo lang de um elemento:

    var x = document.getElementById("myP").lang;
    console.log(x);   // pt-br
  
## lastChild
Retorna o último nó filho de um elemento:

    <ul id="lista"><li>Café</li><li>Chá</li></ul>

    var x = document.getElementById("lista").lastChild.innerHTML;
    console.log(x);   // Chá

## lastElementChild
Retorna o último elemento filho de um elemento:

    <ul id="lista"><li>Café</li><li>Chá</li></ul>

    var lista = document.getElementById("lista").lastElementChild.innerHTML;
    console.log(x);   // Chá

## namespaceURI
Retorna o URI do namespace de um elemento:

    var x = document.documentElement.namespaceURI; 
    console.log(x);   // www.seusite.com

## nextSibling
Retorna o próximo nó no mesmo nível da árvore de nós:

    <ul><li id="item1">Café (primeiro li)</li><li id="item2">Chá (segundo li)</li></ul>
    
    var x = document.getElementById("item1").nextSibling.innerHTML; 
    console.log(x);   // Chá (segundo li)

## nextElementSibling
Retorna o próximo elemento no mesmo nível da árvore de nós:

    <ul><li id="item1">Café (primeiro li)</li><li id="item2">Chá (segundo li)</li></ul>
    
    var x = document.getElementById("item1").nextElementSibling.innerHTML;
    console.log(x);   // Chá (segundo li)

## nodeName
Retorna o nome de um nó:

    <p>Testando!</p>

    var x = document.getElementsByTagName("p")[0].nodeName;
    console.log(x);   // p

## nodeType
Retorna o tipo de nó de um nó e retorna **1** para um nó de elemento, **2** um nó de atributo, **3** um nó de texto, **8** um nó de comentário:

    <p>Testando!</p>

    var x = document.getElementsByTagName("p")[0].nodeType;
    console.log(x);   // p

## nodeValue
Define ou retorna o valor de um nó:

    <p>Testando!</p>

    var ele = document.getElementsByTagName("p")[0];
    var x = ele.childNodes[0].nodeValue;  
    console.log(x);   // Testando!

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
