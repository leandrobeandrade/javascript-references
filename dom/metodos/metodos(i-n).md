## insertAdjacentElement()
Insere um elemento HTML na posição especificada em relação ao elemento atual. Os valores possíveis são **afterbegin**, **afterend**, **beforebegin**, **beforeend**:

    <span style="color:red">Span</span>
    <h2 id="H2">Header</h2>

    var s = document.getElementsByTagName('span')[0];
    var h = document.getElementById('H2');
    h.insertAdjacentElement('afterend', s); // inverte as posições

## insertAdjacentHTML()
Insere um texto formatado em HTML na posição especificada em relação ao elemento atual. Os valores possíveis são **afterbegin**, **afterend**, **beforebegin**, **beforeend**:

    <h2 id="H2">Header</h2>
    <p>Clique no botão para inserir um parágrafo após o header:</p>
    <button onclick = "incluir()">Apertar</button>
    
    function incluir() {
        var h = document.getElementById('H2');
        h.insertAdjacentHTML('afterend', '<p>Meu novo parágrafo</p>'); // Insere um p depois da tag h2
    }


## insertAdjacentText()
Insere texto na posição especificada em relação ao elemento atual. Os valores possíveis são **afterbegin**, **afterend**, **beforebegin**, **beforeend**:

    <h2 id="H2">Header</h2>
    <p>Clique no botão para inserir um parágrafo após o header:</p>
    
    var h = document.getElementById('H2');
    h.insertAdjacentHTML('afterend', 'Meu novo parágrafo'); // Insere o texto depois da tag h2


## insertBefore()
Insere um novo nó filho antes de um nó filho especificado, existente:

    <ul id="lista">
        <li>Grêmio</li>
        <li>Vasco</li>
    </ul>

    var novoItem = document.createElement('li');
    var textnode = document.createTextNode('Palmeiras');
    novoItem.appendChild(textnode);

    var lista = document.getElementById('lista');
    lista.insertBefore(novoItem, lista.childNodes[0]);

#### Resultado

    <ul id="lista">
        <Palmeiras></Palmeiras>
        <li>Grêmio</li>
        <li>Vasco</li>
    </ul>

## isDefaultNamespace()
Retorna *true* se um namespaceURI especificado for o padrão, caso contrário, *false*:

    var d = document.documentElement;
    var x = d.isDefaultNamespace('http://www.seusite.com'); 
    console.log(x);  // true 

## isEqualNode()
Verifica se dois elementos são iguais:
    
    <div>Primeira Div</div>
    <div>Segunda Div</div>
    <div>Primeira Div</div>
    
    let divList  = document.getElementsByTagName("div");

    console.log(divList[0].isEqualNode(divList[0]));  // retorna true
    console.log(divList[0].isEqualNode(divList[1]));  // retorna false
    console.log(divList[0].isEqualNode(divList[2]));  // retorna true

## isSameNode()
Verifica se dois elementos são o mesmo nó:

    <ul id="lista">
        <li>Palmeiras</li>
        <li>Vasco</li>
    </ul>

    var item1 = document.getElementById('lista');
    var item2 = document.getElementsByTagName('ul')[0];
    var x = item1.isSameNode(item2);
    console.log(x);   // retorna true

---

## normalize()
Une nós de texto adjacentes e remove nós de texto vazios em um elemento:

    <p id="demo">Clique neste botão para adicionar texto no parágrafo, e no outro botão para normalizar.</p>
    <button onclick="addTextNode()"> Adicionar um nó de texto </button>
    <button onclick="normPara()"> Normalizar o parágrafo </button>
    <p> O parágrafo acima tem <span id="cc"> 1 </span> nó(s) filho(s).</p>
    
    function addTextNode() {
      var x = document.createTextNode(' Clique de novo');
      var y = document.getElementById('demo');
      y.appendChild(x);
      var x = document.getElementById('cc');
      x.innerHTML = y.childNodes.length;
    }

    function normPara() {
      var x = document.getElementById('demo');  
      x.normalize();
      var y = document.getElementById('cc');
      y.innerHTML = x.childNodes.length;
    }
