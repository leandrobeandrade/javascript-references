## document.createAttribute()
Cria um nó de atributo

    <h1>Teste</h1>

    let h1 = document.getElementsByTagName("h1")[0];
    let att = document.createAttribute("class");
    att.value = "teste";
    h1.setAttributeNode(att);
    console.log(h1); // retorna <h1 class="teste">Teste</h1>
    
## document.createDocumentFragment()
Cria um nó *DocumentFragment* vazio

    <ul>
      <li>Café</li>
      <li>Chá</li>
    </ul>
    
    let frag = document.createDocumentFragment();
    frag.appendChild(document.getElementsByTagName("li")[0]);
    frag.childNodes[0].childNodes[0].nodeValue = "Leite";
    document.getElementsByTagName("ul")[0].appendChild(frag);
    console.log(document.getElementsByTagName("ul")[0]); // retorna <ul><li>Chá</li><li>Leite</li></ul>
    
## document.createElement()
Cria um nó de elemento

    let btn = document.createElement("button");
    btn.textContent = "Teste";
    document.body.appendChild(btn);

## documentcreateTextNode()
Cria um nó de texto de elemento

    let texto = document.createTextNode("Olá Mundo!");
    document.body.appendChild(texto);

## document.images
Retorna uma coleção de todos os elementos **`<img>`** no documento

    let a = document.images.length;                             // pega a quantidade de imagens no documento
    let b = document.images[0].src;                             // pega o src da imagem 1
    let c = document.images.item(0).src;                        // pega o src da imagem 1
    let d = document.images.namedItem("myImg").src;             // pega o src da imagem pelo id "myImg"

## document.importNode()
Importa um nó de outro documento

    var frame = document.getElementsByTagName("iframe")[0];         // pega o 1º iframe 
    var h = frame.contentWindow.document.getElementsByTagName("h1");
    var x = document.importNode(h, true);                           // importa o h1 no documento atual
    document.body.appendChild(x);                                   // adiciona o h1 no documento atual

## links
Retorna uma coleção de todos os elementos **`<a>`** e **`<area>`** no documento que possuem um atributo href:

    <p>
      <a href="https://www.google.com">HTML</a>
      <a href="https://www.yahoo.com" id="link">CSS</a>
      <a href="https://github.com">Javascript</a>
    </p>
    
    let a = document.links.length;                              // 3
    let b = document.links[0].href;                             // pega a referência do link 1 - https://www.google.com
    let c = document.links.item(0).href;                        // pega a referência do link 1 - https://www.google.com
    let d = document.links.namedItem("link").href;              // pega a referência com id link - https://www.yahoo.com

## readyState
Retorna o status (carregamento) do documento podendo ser *loading*, *complete* e *interactive* para imagens, vídeos etc.. ainda não carregados

    let x = document.readyState; 
    console.log(x); // retorna complete

## referrer
Retorna a URL do documento que carregou o documento atual

    var x = document.referrer;
    console.log(x); // retorna github.com

## title
Retorna ou define a tag **`<title>`** da página
    
    var x = document.title;
    console.log(x); // retorna Github
    
## URL
Retorna a url do documento

    var x = document.URL;
    console.log(x); // retorna github.com/user
    
## write()
Sobrescreve todo Html do documento
  
    document.write("Olá mundo!");  // writeln pula de linha 
