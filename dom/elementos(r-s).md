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

---

## scrollHeight
Retorna a altura inteira de um elemento, incluindo preenchimento:

    <button onclick="myFunction()">Apertar</button>
    <div id="teste" style="margin-top:10px;height:250px;width:250px;overflow:auto;">
        <div id="conteudo" style="height:800px;width:2000px;padding:10px;background-color:coral;">
            Testando...
        </div>
    </div>
    
    function myFunction() {
        var elmnt = document.getElementById("conteudo");
        var y = elmnt.scrollHeight;
        console.log("Largura: " + y + "px);       // Altura: 820px      
    }

## scrollIntoView()
Rola o elemento especificado para a área visível da janela do navegador:

    <button onclick="myFunction()">Apertar</button>
    <div id="teste" style="height:250px;width:250px;overflow:auto;background:green;">
        <div id="conteudo" style="height:800px;width:2000px;padding:10px;background-color:coral;">
            Testando...
        </div>
    </div>
    
    function myFunction() {
        var elmnt = document.getElementById("content");
        elmnt.scrollIntoView();
    }

## scrollLeft
Define ou retorna o número de pixels que o conteúdo de um elemento é rolado horizontalmente:

    <button onclick="myFunction()">Apertar</button>
    <div id="teste" style="height:250px;width:250px;overflow:auto;">
        <div id="conteudo" style="height:800px;width:2000px;padding:10px;background-color:coral;">
            Testando...
        </div>
    </div>
    
    function myFunction() {
        var elmnt = document.getElementById("teste");
        var x = elmnt.scrollLeft;
        console.log("Horizontalmente: " + x + "px);
    }

## scrollTop
Define ou retorna o número de pixels que o conteúdo de um elemento é rolado verticalmente:

    <button onclick="myFunction()">Apertar</button>
    <div id="teste" style="height:250px;width:250px;overflow:auto;">
        <div id="conteudo" style="height:800px;width:2000px;padding:10px;background-color:coral;">
            Testando...
        </div>
    </div>
    
    function myFunction() {
        var elmnt = document.getElementById("teste");
        var x = elmnt.scrollLeft;
        console.log("Verticalmente: " + x + "px);
    }

## scrollWidth
Retorna toda a largura de um elemento, incluindo preenchimento:

    <button onclick="myFunction()">Apertar</button>
    <div id="teste" style="margin-top:10px;height:250px;width:250px;overflow:auto;">
        <div id="conteudo" style="height:800px;width:2000px;padding:10px;background-color:coral;">
            Testando...
        </div>
    </div>
    
    function myFunction() {
        var elmnt = document.getElementById("conteudo");
        var x = elmnt.scrollWidth;
        console.log(Width: " + x + "px");       // Largura: 2000px      
    }

## setAttribute()
Define ou altera o atributo especificado, para o valor especificado:

    .demo{color: red;}
    
    <h1>Alô Mundo!</h1>
    <input value="OK">
    <button onclick="myFunction()">Apertar</button>
    
    function myFunction() {
        document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
        document.getElementsByTagName("INPUT")[0].setAttribute("type", "button");
    }

## setAttributeNode()
Define ou altera o nó do atributo especificado:

    .demo{color: red;}
    
    <h1>Alô Mundo!</h1>
    <button onclick="myFunction()">Apertar</button>

    function myFunction() {
        var attr = document.createAttribute("class");
        attr.value = "democlass";
        var h = document.getElementsByTagName("H1")[0];
        h.setAttributeNode(attr); 
    }

## style
Define ou retorna o valor do atributo style de um elemento:

    <h1 id="myH1">How to change the style of a header</h1>
    <button onclick="myFunction()">Apertar</button>
    
    function myFunction() {
        document.getElementById("h1").style.color = "red";
    }
