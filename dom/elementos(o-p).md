## offsetHeight
Retorna a altura de um elemento, incluindo preenchimento, borda e barra de rolagem:

    <div style="height:250px;width:400px;padding:10px;margin:15px;border:5px solid red;
    background-color:lightblue;"></div>
    
    var elmnt = document.querySelectorAll("div");
    var txt = "Altura incluindo preenchimento e borda: " + elmnt.offsetHeight + "px<br>";
    console.log(txt); // 280px de altura

## offsetWidth
Retorna a largura de um elemento, incluindo preenchimento, borda e barra de rolagem:

    <div style="height:250px;width:400px;padding:10px;margin:15px;border:5px solid red;
    background-color:lightblue;"></div>
    
    var elmnt = document.querySelectorAll("div");
    var txt = "Largura incluindo preenchimento e borda: " + elmnt.offsetWidth + "px<br>";
    console.log(txt);   // 280px de largura

## offsetLeft
Retorna a posição de deslocamento horizontal de um elemento:

    <div style="left:100px;margin:10px;padding:10px;width:300px;position:relative;border:5px solid black">
    </div>
    
    var div = document.querySelectorAll("div");
    console.log(testDiv.offsetLeft);    // 180px de deslocamento à esquerda
    
## offsetParent
Retorna o container de deslocamento de um elemento:

    <div>Testando</div>
    
    var div = document.querySelectorAll("div");
    console.log(div.offsetParent);      // [object HTMLBodyElement] 

## offsetTop
Retorna a posição de deslocamento vertical de um elemento:

    <div style="top:100px;margin:10px;padding:10px;width:300px;position:relative;border:5px solid black">
    </div>
    
    var div = document.querySelectorAll("div");
    console.log(testDiv.offsetTop);    // 110px de deslocamento do topo

## ownerDocument
Retorna o elemento raiz (objeto de documento) para um elemento:

    <p>Testando!</p>
    
    var x = document.querySelectorAll("p").ownerDocument.nodeType;  
    console.log(x);     // 9
    
---    
    
## parentNode
Retorna o nó pai de um elemento:

    <ul><li id="lista">Café</li><li>Chá</li></ul>
    
    var x = document.getElementById("lista").parentNode.nodeName;
    console.log(x);     // ul

## parentElement
Retorna o nó do elemento pai de um elemento:

    <ul><li>Café</li><li>Chá</li></ul>
    
    var x = document.getElementById("myLI").parentElement.nodeName;
    console.log(x);     // ul


## previousSibling
Retorna o nó anterior no mesmo nível da árvore de nós:

    <ul><li id="item1">Café</li><li id="item2">Chá</li></ul>
    
    var x = document.getElementById("item2").previousSibling.innerHTML;
    console.log(x);     // Café


## previousElementSibling
Retorna o elemento anterior no mesmo nível da árvore do nó:

    <ul><li id="item1">Café</li><li id="item2">Chá</li></ul>
    
    var x = document.getElementById("item2").previousElementSibling.innerHTML; 
    console.log(x);     // Café
