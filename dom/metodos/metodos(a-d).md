## appendChild()
Adiciona um novo nó filho a um último elemento de nó já existente:

    <ul id="lista">
      <li>Palmeiras</li>  
      <li>Grêmio</li>
    </ul>
    
    var elem = document.createElement('li');
    var textElem = document.createTextNode('Vasco');
    elem.appendChild(textElem);
    document.getElementById('lista').appendChild(elem);

#### Resultado

    <ul id="lista">
      <li>Palmeiras</li>  
      <li>Grêmio</li>
      <li>Vasco</li>
    </ul>

---

## cloneNode()
Clona um elemento, não podendo haver espaços entre os elementos no arquivo HTML:
    
    <ul id="lista1"><li>Palmeiras</li><li>Grêmio</li></ul>
    <ul id="lista2"><li>Vasco</li><li>Atlético-MG</li></ul>
    
    var itm = document.getElementById('lista2').lastChild; // pega o último elemento da li da 2º ul
    var cln = itm.cloneNode(true); // clona a li
    document.getElementById('lista1').appendChild(cln); // adiciona no final da 1º ul

#### Resultado

    <ul id="lista1">
        <li>Palmeiras</li>
        <li>Grêmio</li>
        <li>Atlético-MG</li>
    </ul>
    <ul id="lista2">
        <li>Vasco</li>
        <li>Atlético-MG</li>
    </ul>
    
## contains() 
Retorna *true* se um nó é um descendente de um nó, caso contrário, *false*:

    <div id="minhaDiv">
        <p>Eu sou um elemento p dentro de div e tenho um elemento
            <span id = "minhaSpan"> <b> span </ b> </ span> dentro de mim.
        </P>
    </div>
    
    var span = document.getElementById("minhaSpan");
    var div = document.getElementById("minhaDiv").contains(span);
    console.log(div); // retorna true

## compareDocumentPosition()
Compara a posição de dois elementos no documento:

    <p id="p1">Um parágrafo</p>
    <p id="p2">Outro parágrafo</p>
    
    var p1 = document.getElementById("p1").lastChild;
    var p2 = document.getElementById("p2").lastChild;
    var x = p1.compareDocumentPosition(p2);
    console.log(x); // retorna 4
    
| retornos possíveis:

- **1 =>** os dois nós não pertencem ao mesmo documento
- **2 =>** p1 é posicionado após p2
- **4 =>** p1 está posicionado antes de p2
- **8 =>** p1 está posicionado dentro de p2
- **16 =>** p2 está posicionado dentro de p1
- **32 =>** Os dois nós não têm relacionamento ou são dois atributos no mesmo elemento

---

## dir 
Define ou retorna o valor do atributo direção de um elemento:

    <p id="p">Texto vai mudar de direção conforme o clique no botão.</p>
    <button onclick="change()">Mudar direção</button>

    function change() {
        document.getElementById("p").dir = 'rtl';
    }