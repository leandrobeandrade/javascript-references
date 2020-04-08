## firstChild
Retorna o primeiro nó filho de um elemento:

    <ul id="lista">
        <li>Palmeiras</li>
        <li>Grêmio</li>
    </ul>

    var elem = document.getElementById('lista').firstChild.innerHTML;
    console.log(elem);    // retorna Palmeiras
    
## firstElementChild
Retorna o primeiro elemento filho de um elemento:

    <ul id="lista">
        <li>Palmeiras</li>
        <li>Grêmio</li>
    </ul>

    var elem = document.getElementById('lista').firstElementChild.innerHTML;
    console.log(elem);    // retorna Palmeiras

---

## innerHTML 
Define ou retorna o conteúdo de um elemento:

    <p id="demo">Testando</p>
    <p id="teste"></p>
    
    var demo = document.getElementById('demo').innerHTML;   // captura o texto Testando
    document.getElementById('teste').innerHTML = demo;      // insere o texto Testando no outro p
    
## innerText
Define ou retorna o conteúdo de texto de um nó e seus descendentes:

    <p id="demo">Testando <b>JavaScript!</b></p>
    
    var x = document.getElementById('demo').innerText;
    console.log(x);   // retorna Testando JavaScript!

## isContentEditable
Retorna *true* se o conteúdo de um elemento é editável, caso contrário, *false*:

    <p id="p" contenteditable="true">Área editável</p>
    
    var x = document.getElementById('p').isContentEditable;
    console.log(x);   // retorna true