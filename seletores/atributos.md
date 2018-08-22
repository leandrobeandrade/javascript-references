## attr.name 
Retorna o nome de um atributo:

    <button onclick="myFunction()">Testar</button>
    
    var btn = document.getElementsByTagName("BUTTON")[0];
    var x = btn.attributes[0].name; 
    console.log(x); // onclick

## attr.value 
Define ou retorna o valor do atributo:

    <button onclick="myFunction()">Testar</button>
    
    var btn = document.getElementsByTagName("BUTTON")[0];
    var x = btn.attributes[0].value;
    console.log(x); // myFunction()

## attr.specified 
Retorna *true* se o atributo foi especificado, caso contrário, retorna *false*:

    <button onclick="myFunction()">Testar</button>
    
    var btn = document.getElementsByTagName("BUTTON")[0];
    var x = btn.getAttributeNode("onclick").specified;
    console.log(x); // true
    
---
    
## nodemap.getNamedItem()
Retorna um nó de atributo especificado de um NamedNodeMap:
    
    <button onclick="myFunction()">Testar</button>
    
    var btn = document.getElementsByTagName("BUTTON")[0];
    btn.attributes.getNamedItem("onclick").value; 
    console.log(x); // myFunction()

## nodemap.item()
Retorna o nó do atributo em um índice especificado em um NamedNodeMap:
    
    <button onclick="myFunction()" id="teste">Testar</button>

    var btn = document.getElementsByTagName("BUTTON")[0];
    var x = btn.attributes.item(0).name;  
    console.log(x); // onclick

## nodemap.length 
Retorna o número de nós de atributos em um NamedNodeMap:

    <button onclick="myFunction()" id="teste">Testar</button>

    var btn = document.getElementsByTagName("BUTTON")[0].attributes.length;
    console.log(btn); // 2

## nodemap.removeNamedItem()
Remove um nó de atributo especificado:

    <input type="button" value="OK">

    var btn = document.getElementsByTagName("INPUT")[0]; 
    btn.attributes.removeNamedItem("type");

## nodemap.setNamedItem()
Define o nó do atributo especificado (por nome):

    <h1>Olá Mundo!</h1>
    
    var h = document.getElementsByTagName("H1")[0];
    var tipo = document.createAttribute("class");
    tipo.value = "democlass";
    h.attributes.setNamedItem(tipo);
  
---

## getAttribute()
Retorna o valor do atributo com o nome especificado, de um elemento.

    <h1 class="teste">Olá Mundo!</h1>

    var h = document.getElementsByTagName("H1")[0].getAttribute("class"); 
    console.log(h); // teste

## getAttributeNode()
Retorna o nó do atributo com o nome especificado de um elemento, como um objecto Attr.

    <h1 class="teste">Olá Mundo!</h1>
    
    var h = document.getElementsByTagName("H1")[0];
    var attr = h.getAttributeNode("class").value;
    console.log(attr); // teste
    
