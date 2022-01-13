## scrollHeight
Retorna a altura inteira de um elemento, incluindo preenchimento:

    <button onclick="show()">Apertar</button>
    <div id="teste" style="margin-top:10px;height:250px;width:250px;overflow:auto;">
        <div id="conteudo" style="height:800px;width:2000px;padding:10px;background-color:coral;">
            Testando...
        </div>
    </div>
    
    function show() {
        let elem = document.getElementById('conteudo');
        let y = elem.scrollHeight;
        console.log('Altura é: ' + y + 'px'); // retorna Altura é: 820px      
    }

## scrollIntoView()
Rola o elemento especificado para a área visível da janela do navegador:

    <button onclick="show()">Apertar</button>
    <div id="teste" style="height:250px;width:250px;overflow:auto;background:green;">
        <div id="conteudo" style="height:800px;width:2000px;padding:10px;background-color:coral;">
            Testando...
        </div>
    </div>
    
    function show() {
        let elem = document.getElementById('conteudo');
        elem.scrollIntoView();
    }

## scrollLeft
Define ou retorna o número de pixels que o conteúdo de um elemento é rolado horizontalmente:

    <button onclick="show()">Apertar</button>
    <div id="teste" style="height:250px;width:250px;overflow:auto;">
        <div id="conteudo" style="height:800px;width:2000px;padding:10px;background-color:coral;">
            Testando...
        </div>
    </div>
    
    function show() {
        let elem = document.getElementById("teste");
        let x = elem.scrollLeft;
        console.log(x);
    }

## scrollTop
Define ou retorna o número de pixels que o conteúdo de um elemento é rolado verticalmente:

    <button onclick="show()">Apertar</button>
    <div id="teste" style="height:250px;width:250px;overflow:auto;">
        <div id="conteudo" style="height:800px;width:2000px;padding:10px;background-color:coral;">
            Testando...
        </div>
    </div>
    
    function show() {
        let elem = document.getElementById("teste");
        let x = elem.scrollTop;
        console.log(x);
    }

## scrollWidth
Retorna toda a largura de um elemento, incluindo preenchimento:

    <button onclick="show()">Apertar</button>
    <div id="teste" style="margin-top:10px;height:250px;width:250px;overflow:auto;">
        <div id="conteudo" style="height:800px;width:2000px;padding:10px;background-color:coral;">
            Testando...
        </div>
    </div>
    
    function show() {
        let elem = document.getElementById("conteudo");
        let x = elem.scrollWidth;
        console.log('Largura é: ' + x + 'px'); // retorna Largura é: 2020px      
    }

## style
Define ou retorna o valor da propriedade style de um elemento:

    <h1 id="myH1">How to change the style of a header</h1>
    <button onclick="show()">Apertar</button>
    
    function show() {
        document.getElementById("h1").style.color = 'red';
    }

---

## tabIndex 
Define ou retorna o valor da propriedade tabindex de um elemento:

    <p><a id="ancora1" href="https://www.meusite.com">Link 1</a></p>
    <p><a id="ancora2" href="https://www.meusite.com">Link 2</a></p>
    <p><a id="ancora3" href="https://www.meusite.com">Link 3</a></p>
    <button onclick="show()">Mudar Valores</button>
    
    function show() {
      document.getElementById('myAnchor1').tabIndex = '3';
      document.getElementById('myAnchor2').tabIndex = '2';
      document.getElementById('myAnchor3').tabIndex = '1';
    }

## tagName
Retorna o nome da tag de um elemento:

    <p id="meuP">Testando!</p>

    function show() {
      let x = document.getElementById('meuP').tagName;
      console.log(x); // retorna p
    }

## textContent
Define ou retorna o conteúdo textual de um nó e seus descendentes:
  
    <button onclick="show()" id="btn">Apertar/button>
    <p>Testando...</p>
    
    function show() {
      let texto = document.getElementById('btn').textContent;
      document.getElementsByTagName('p')[0].textContent = 'Trocando o texto do p';
      console.log(texto);  // retorna Apertar
    }

## title
Define ou retorna o valor da propriedade de título de um elemento:

    <p><abbr id="myAbbr" title="World Wide Web Consortium">W3C</abbr> foi fundada em 1994.</p>
    <button onclick="show()">Apertar</button>
    
    function show() {
      let tit = document.getElementById('myAbbr').title;
      console.log(tit);   // retorna World Wide Web Consortium
    }
