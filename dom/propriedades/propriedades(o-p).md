## offsetHeight
Retorna a altura de um elemento, incluindo preenchimento, borda e barra de rolagem: 

    <div style="height:250px;width:400px;padding:10px;margin:15px;border:5px solid red;
    background-color:lightblue;"></div>
    
    let elem = document.querySelectorAll('div');
    let txt = 'Altura incluindo preenchimento e borda: ' + elem.offsetHeight + 'px';
    console.log(txt);  // retorna 280px de altura

## offsetWidth
Retorna a largura de um elemento, incluindo preenchimento, borda e barra de rolagem:

    <div style="height:250px;width:400px;padding:10px;margin:15px;border:5px solid red;
    background-color:lightblue;"></div>
    
    let elem = document.querySelectorAll('div');
    let txt = "Largura incluindo preenchimento e borda: " + elem.offsetWidth + "px<br>";
    console.log(txt);  // retorna 280px de largura

## offsetLeft
Retorna a posição de deslocamento horizontal de um elemento:

    <div style="left:100px;margin:10px;padding:10px;width:300px;position:relative;border:5px solid"></div>
    
    let div = document.querySelectorAll('div');
    console.log(div.offsetLeft);  // retorna 180px de deslocamento à esquerda
    
## offsetParent
Retorna o container de deslocamento de um elemento:

    <div>Testando</div>
    
    let div = document.querySelectorAll('div')[0];
    console.log(div.offsetParent);  // retorna <body>...</body>

## offsetTop
Retorna a posição de deslocamento vertical de um elemento:

    <div style="top:100px;margin:10px;padding:10px;width:300px;position:relative;border:5px solid"></div>
    
    let div = document.querySelectorAll('div')[0];
    console.log(div.offsetTop + 'px');  // retorna 110px

## ownerDocument
Retorna o elemento raiz (objeto de documento) para um elemento:

    <p>Testando!</p>
    
    let x = document.querySelectorAll('p")'ownerDocument.nodeType;  
    console.log(x);  // retorna 9
    
---    
    
## parentNode
Retorna o nó pai de um elemento:

    <ul>
        <li id="lista">Palmeiras</li>
        <li>Grêmio</li>
    </ul>
    
    let elem = document.getElementById('lista').parentNode.nodeName;
    console.log(elem);  // retorna ul

## parentElement
Retorna o nó do elemento pai de um elemento:

    <ul>
        <li id="lista">Palmeiras</li>
        <li>Grêmio</li>
    </ul>
    
    let x = document.getElementById('lista').parentElement.nodeName;
    console.log(x);  // retorna ul


## previousSibling
Retorna o nó anterior no mesmo nível da árvore de nós, não podendo haver espaços entre os elementos no arquivo HTML:

    <ul><li id="item1">Palmeiras</li><li id="item2">Grêmio</li></ul>
    
    let elem = document.getElementById('item').previousSibling.innerHTML;
    console.log(elem);  // retorna Palmeiras


## previousElementSibling
Retorna o elemento anterior no mesmo nível da árvore do nó, não podendo haver espaços entre os elementos no arquivo HTML:

    <ul><li id="item1">Palmeiras</li><li id="item2">Grêmio</li></ul>
    
    let x = document.getElementById('item2').previousElementSibling.innerHTML; 
    console.log(x);  // retorna Palmeiras
