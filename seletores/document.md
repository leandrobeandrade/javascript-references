## createElement()
Cria um nó de atributo:

    <h1>Teste</h1>

    var h1 = document.getElementsByTagName("h1")[0]; // Obtém o primeiro elemento <h1> no documento
    var att = document.createAttribute("class"); // Cria um atributo "class"
    att.value = "teste"; // Define o valor do atributo de classe
    h1.setAttributeNode(att); // Adiciona a atributo de classe ao <h1>
    
## createDocumentFragment()
Cria um nó *DocumentFragment* vazio:

    <ul>
      <li>Coffee</li>
      <li>Tea</li>
    </ul>
    
    var d = document.createDocumentFragment();
    d.appendChild(document.getElementsByTagName("li")[0]);
    d.childNodes[0].childNodes[0].nodeValue = "Milk";
    document.getElementsByTagName("ul")[0].appendChild(d);
    
## createElement()
Cria um nó de elemento:

    var btn = document.createElement("button");
    btn.textContent = "Teste"
    document.body.appendChild(btn);

## createTextNode()
Cria um nó de texto de elemento:

    var t = document.createTextNode("Olá Mundo!");
    document.body.appendChild(t);

## images
Retorna uma coleção de todos os elementos <img> no documento:

    var a = document.images.length; // pega a quantidade de imagens no documento
    var b = document.images[0].src; // pega o src da imagem 1
    var c = document.images.item(0).src; // pega o src da imagem 1
    var d = document.images.namedItem("myImg").src; // pega a imagem pelo id "myImg"

## importNode()
Importa um nó de outro documento:

    var frame = document.getElementsByTagName("iframe")[0]; // pega o 1º iframe 
    var h = frame.contentWindow.document.getElementsByTagName("h1")[0]; // pega o 1º h1 do iframe
    var x = document.importNode(h, true); // importa o h1 no documento atual
    document.body.appendChild(x); // adiciona o h1 no documento atual

## links
Retorna uma coleção de todos os elementos <a> e <area> no documento que possuem um atributo href:

    <p>
      <a href="www.google.com">HTML</a><br>
      <a href="www.yahoo.com">CSS</a>
    </p>
    
    var a = document.links.length; // 2
    var b = document.links[0].href; // pega a referência do link 1
    var c = document.links.item(0).href; // pega a referência do link 1
    var d = document.links.namedItem("myLink").href; // pega a referência com id myLink

## readyState
Retorna o status (carregamento) do documento:

    var x = document.readyState;
    console.log(x);

## referrer
Retorna a URL do documento que carregou o documento atual:

    var x = document.referrer;
    console.log(x);

## title
Retorna ou define a tag <title> da página
    
    var x = document.title;
    console.log(x);
    
## URL
Retorna a url do documento:

    var x = document.URL;
    console.log(x);
    
## write()
Sobrescreve todo Html do documento:
  
    document.write("Olá mundo!"); // wirteln pula de linha se tiver mais de um 
