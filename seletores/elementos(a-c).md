## accessKey
Define ou retorna o atributo accesskey de um elemento:

    <a id="teste" href="https://www.google.com/">Google</a>
    
    document.getElementById("teste").accessKey = "w"; // acessa a url por shift+w no Chrome ou alt-shift+w
    
## appendChild()
Adiciona um novo nó filho a um último elemento de nó já existente:

    <ul id="myList">
      <li>Coffee</li>
      <li>Tea</li>
    </ul>
    
    var elem = document.createElement("li");
    var textElem = document.createTextNode("Aǵua");
    elem.appendChild(textElem);
    document.getElementById("lista").appendChild(elem);   
    
---

## childElementCount
Retorna o número de elementos filhos que um elemento possui:

    <div id="minhaDiv">
      <p>1º elemento p</p>
      <p>2º elemento p</p>
    </div>
    
    var x = document.getElementById("minhaDiv").childElementCount;
    console.log(x);
    
## childNodes 
Retorna uma coleção dos nós filhos de um elemento (incluindo nós de texto e comentário):

    <!-- Isto é um comentário! -->
    <p>Um texto qualquer</p>
    <button onclick="myFunction()">Testar</button>
    <p><strong>Note:</strong>O espaço em branco dentro dos elementos é considerado como texto e texto é 
    considerado como nós. Comentários também são considerados como nós.</p>
    
    var c = document.body.childNodes;
    var txt = "";
    var i;
    for (i = 0; i < c.length; i++) {
        txt = txt + c[i].nodeName + "<br>";
    }

    console.log(txt);
    
## children
Retorna uma coleção do elemento filho de um elemento (excluindo nós de texto e comentário):

    <p>Click the button to get the tag names of the body element's children.</p>
    <button onclick="myFunction()">Try it</button>
    <div><p>teste</p></div>
    
    var x = document.body.children;
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + x[i].tagName + "<br>";
    }

    console.log(txt); // p button div
    console.log(txt.length);
    
## classList
Aplica a(s) classe(s) a um determinado elemento ou mais elementos:

    <div id="minhaDiv" class="meuEstilo1">Teste</div>
    
    document.getElementById("minhaDiv").classList.; // Obtém o nome da classe
    document.getElementById("minhaDiv").classList.add("meuEstilo1"); // Adiciona uma classe
    document.getElementById("minhaDiv").classList.add("meuEstilo2, meuEstilo3"); 
    document.getElementById("minhaDiv).classList.remove("meuEstilo1, meuEstilo3"); // Remove as classes
    document.getElementById("minhaDiv").classList.toggle("novaClasse"); // Alterna entre duas classes
    document.getElementById("minhaDiv").classList.length;
    document.getElementById("minhaDiv").classList.item(0); // pega a primeira classe se houver mais
    document.getElementById("minhaDiv").classList.contains("meuEstilo1"); // true
    
## className
Define ou retorna o valor do atributo de classe de um elemento:

    <p id="minhaDiv1" class="meuEstilo">Teste</p>
    <p id="minhaDiv2">Teste</p>

    document.getElementById("minhaDiv1").className; // meuEstilo se tiver mais retorna todas
    document.getElementById("minhaDiv2").className = "meuEstilo";
    document.getElementById("minhaDiv2").className += " outroEstilo"; // adicona outro estilo
    
## clientHeight
Retorna a altura de um elemento, incluindo preenchimento:

    <div id="minhaDiv" style="height:400px;width:400px;"></div>

    var elmnt = document.getElementById("minhaDiv");
    console.log("Altura incluindo preenchimento " + elmnt.clientHeight + "px");
    
## clientLeft
Retorna a largura da borda esquerda de um elemento:

    <div id="minhaDiv" style="height:400px;width:400px;border-left:15px solid red;"></div>

    var elmnt = document.getElementById("minhaDiv");
    console.log("Largura da borda esquerda: " + elmnt.clientLeft + "px");
    
## clientTop
Retorna a largura da borda superior de um elemento:
    
    <div id="minhaDiv" style="height:400px;width:400px;border-top:15px solid red;"></div>

    var elmnt = document.getElementById("minhaDiv");
    console.log("Largura superior da borda: " + elmnt.clientTop + "px");
    
## clientWidth
Retorna a largura de um elemento, incluindo preenchimento :

     <div id="minhaDiv" style="height:400px;width:400px;"></div>

    var elmnt = document.getElementById("minhaDiv");
    console.log("Largura incluindo preenchimento " + elmnt.clientHeight + "px");
    
## cloneNode()
Clona um elemento:
    
    <ul id="lista1"><li>Café</li><li>Chá</li></ul>
    <ul id="lista2"><li>Água</li><li>Suco</li></ul>
    
    var itm = document.getElementById("lista2").lastChild; // pega o último elemento da li da 2º ul
    var cln = itm.cloneNode(true); // clona a li
    document.getElementById("lista1").appendChild(cln); // adiciona no final da 1º ul
    
## compareDocumentPosition()
Compara a posição de dois elementos no documento:

    <p id="p1">Um parágrafo</p>
    <p id="p2">Outro parágrafo</p>
    
    var p1 = document.getElementById("p1").lastChild;
    var p2 = document.getElementById("p2").lastChild;
    var x = p1.compareDocumentPosition(p2);
    console.log(x); // 4
    
    /* retornos possíveis: 1: os dois nós não pertencem ao mesmo documento.
                           2: p1 é posicionado após p2.
                           4: p1 está posicionado antes de p2.
                           8: p1 está posicionado dentro de p2.
                           16: p2 está posicionado dentro de p1.
                           32: Os dois nós não têm relacionamento ou são dois atributos no mesmo elemento */
                            
## contains() 
Retorna *true* se um nó é um descendente de um nó, caso contrário, *false*:

    <div id="minhaDiv">
        <p>Eu sou um elemento p dentro de div e tenho um elemento
            <span id = "minhaSpan"> <b> span </ b> </ span> dentro de mim.
        </P>
    </div>
    
    var span = document.getElementById("minhaSpan");
    var div = document.getElementById("minhaDiv").contains(span);
    console.log(div);

## contentEditable
Define ou retorna se o conteúdo de um elemento é editável ou não:

    <p id="p" contenteditable="true">Tente digitar aqui!</p>
    <button onclick="myFunction(this);">Disabilita a edição do p</button>
    <p id="demo"></p>
    
    var x = document.getElementById("p");
    if (x.contentEditable == "true") {
        x.contentEditable = "false";
        button.innerHTML = "Habilitado para ser editado!";
    } else {
        x.contentEditable = "true";
        button.innerHTML = "Desabilitado para ser editado!";
    }
