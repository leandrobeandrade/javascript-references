## accessKey 
Define ou retorna o atributo accesskey de um elemento:

    <a id="teste" href="https://www.google.com/">Google</a>
    
    document.getElementById('teste').accessKey = 'w';       // acessa a url por shift+w no Chrome ou alt-shift+w
    
---

## childElementCount
Retorna o número de elementos filhos que um elemento possui:

    <div id="minhaDiv">
      <p>1º elemento p</p>
      <p>2º elemento p</p>
    </div>
    
    var x = document.getElementById('minhaDiv').childElementCount;
    console.log(x);      // retorna 2
    
## childNodes 
Retorna uma coleção dos nós filhos de um elemento (incluindo nós de texto e comentário):

    <!-- Isto é um comentário! -->
    <p>Um texto qualquer</p>
    <button onclick="myFunction()">Testar</button>
    <p><strong>Note:</strong>O espaço em branco dentro dos elementos é considerado como texto e texto é 
    considerado como nós. Comentários também são considerados como nós.</p>
    
    var c = document.body.childNodes;
    var txt = '';
    var i;
    for (i = 0; i < c.length; i++) {
        txt = txt + c[i].nodeName + '<br>';
    }

    console.log(txt);   // retorna #text<br>#comment<br>#text<br>P<br>#text<br>BUTTON<br>#text<br>
    
## children
Retorna uma coleção do elemento filho de um elemento (excluindo nós de texto e comentário):

    <p>Algum texto aqui!</p>
    <button>Botão</button>
    <div><p>teste</p></div>
    
    var x = document.body.children;
    var txt = '';
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + x[i].tagName + '<br>';
    }

    console.log(txt);    // retorna P<br>BUTTON<br>DIV
    console.log(txt.length);    // retorna 18
    
## classList
Aplica a(s) classe(s) a um determinado elemento ou mais elementos:

    <div id="minhaDiv" class="meuEstilo1">Teste</div>
    
    document.getElementById('minhaDiv').classList.      // Obtém o nome da classe
    document.getElementById('minhaDiv').classList.add('meuEstilo1');    // Adiciona uma classe
    document.getElementById('minhaDiv').classList.add('meuEstilo2, meuEstilo3'); 
    document.getElementById('minhaDiv).classList.remove('meuEstilo1, meuEstilo3');      // Remove as classes
    document.getElementById('minhaDiv').classList.toggle('novaClasse');         // Alterna entre duas classes
    document.getElementById('minhaDiv').classList.length;
    document.getElementById('minhaDiv').classList.item(0);      // pega a primeira classe se houver mais
    document.getElementById('minhaDiv').classList.contains('meuEstilo1');   // retorna true
    
## className
Define ou retorna o valor do atributo de classe de um elemento:

    <p id="minhaDiv1" class="meuEstilo">Teste</p>
    <p id="minhaDiv2">Teste</p>

    document.getElementById('minhaDiv1').className;     // meuEstilo se tiver mais retorna todas
    document.getElementById('minhaDiv2').className = 'meuEstilo';
    document.getElementById('minhaDiv2').className += ' outroEstilo';       // adicona outro estilo
    
## clientHeight
Retorna a altura de um elemento, incluindo preenchimento:

    <div id="minhaDiv" style="height:400px;width:400px;"></div>

    var elem = document.getElementById('minhaDiv');
    console.log('Altura é: ' + elem.clientHeight + 'px');       // retorna Altura é: 400px
    
## clientLeft
Retorna a largura da borda esquerda de um elemento:

    <div id="minhaDiv" style="height:400px;width:400px;border-left:15px solid red;"></div>

    var elem = document.getElementById('minhaDiv');
    console.log('Largura é: ' + elem.clientLeft + 'px');    // retorna Largura 15px
    
## clientTop
Retorna a largura da borda superior de um elemento:
    
    <div id="minhaDiv" style="height:400px;width:400px;border-top:15px solid red;"></div>

    var elem = document.getElementById('minhaDiv');
    console.log('Largura é: ' + elem.clientTop + 'px');         // retorna Largura é 15px
    
## clientWidth
Retorna a largura de um elemento, incluindo preenchimento :

    <div id="minhaDiv" style="height:400px;width:400px;"></div>

    var elem = document.getElementById('minhaDiv');
    console.log('Largura é: ' + elem.clientHeight + 'px');      // retorna Largura é 400px
    
## contentEditable
Define ou retorna se o conteúdo de um elemento é editável ou não:

    <p id="p" contenteditable="true">Tente digitar aqui!</p>
    <button onclick="toggle()" id="btn">Disabilita a edição do p</button>
    
    var button = document.getElementById('btn');
    var x = document.getElementById('p');

    function toggle() {
        if (p.contentEditable == 'true') {
            p.contentEditable = 'false';
            button.innerHTML = 'Habilitado para ser editado!';
        } else {
            p.contentEditable = 'true';
            button.innerHTML = 'Desabilitado para ser editado!';
        }
    }
