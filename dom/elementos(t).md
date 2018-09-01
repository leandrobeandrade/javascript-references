## tabIndex
Define ou retorna o valor do atributo tabindex de um elemento:

    <p><a id="ancora1" href="https://www.meusite.com">Link 1</a></p>
    <p><a id="ancora2" href="https://www.meusite.com">Link 2</a></p>
    <p><a id="ancora3" href="https://www.meusite.com">Link 3</a></p>
    <button onclick="myFunction()">Mudar Valores</button>
    
    function myFunction() {
      document.getElementById("myAnchor1").tabIndex = "3";
      document.getElementById("myAnchor2").tabIndex = "2";
      document.getElementById("myAnchor3").tabIndex = "1";
    }

## tagName
Retorna o nome da tag de um elemento:

    <p id="meuP">Testando!</p>

    function myFunction() {
      var x = document.getElementById("meuP").tagName;
      console.log(x); // p
    }


## textContent
Define ou retorna o conteúdo textual de um nó e seus descendentes:
  
    <button onclick="myFunction()" id="btn">Apertar/button>
    <p>Testando...</p>
    
    function myFunction() {
      var x = document.getElementById("btn").textContent;
      document.getElementsByTagName("p")[0].textContent = "Trocando o texto dp p";
      console.log(x);  // Apertar
    }

## title
Define ou retorna o valor do atributo de título de um elemento:

    <p><abbr id="myAbbr" title="World Wide Web Consortium">W3C</abbr> foi fundada em 1994.</p>
    <button onclick="myFunction()">Apertar</button>
    
    function myFunction() {
      var x = document.getElementById("myAbbr").title;
      console.log(x);   // World Wide Web Consortium
    }
