## lang 
Define ou retorna o valor do atributo lang de um elemento:

    console.log(document.documentElement.lang);   // retorna pt-br
  
## lastChild
Retorna o último nó filho de um elemento, não podendo haver espaços entre os elementos no arquivo HTML:

    <ul id="lista"><li>Palmeiras</li><li>Grêmio</li></ul>

    let elem = document.getElementById('lista').lastChild.innerHTML;
    console.log(elem);   // retorna Grêmio

## lastElementChild
Retorna o último elemento filho de um elemento, não podendo haver espaços entre os elementos no arquivo HTML:

    <ul id="lista"><li>Café</li><li>Chá</li></ul>

    let elem = document.getElementById('lista').lastElementChild.innerHTML;
    console.log(elem);   // retorna Grêmio

## namespaceURI
Retorna o URI do namespace de um elemento:

    let x = document.documentElement.namespaceURI; 
    console.log(x);   // retorna www.seusite.com

## nextSibling
Retorna o próximo nó no mesmo nível da árvore de nós, não podendo haver espaços entre os elementos no arquivo HTML:

    <ul><li id="item1">Palmeiras(primeiro li)</li><li id="item2">Grêmio(segundo li)</li></ul>
    
    let elem = document.getElementById('item1').nextSibling.innerHTML; 
    console.log(elem);   // retorna Grêmio (segundo li)

## nextElementSibling
Retorna o próximo elemento no mesmo nível da árvore de nós, não podendo haver espaços entre os elementos no arquivo HTML:

    <ul><li id="item1">Palmeiras (primeiro li)</li><li id="item2">Grêmio (segundo li)</li></ul>
    
    let elem = document.getElementById('item1').nextElementSibling.innerHTML;
    console.log(elem);   // retorna Grêmio (segundo li)

## nodeName
Retorna o nome de um nó:

    <p>Testando!</p>

    let elem = document.getElementsByTagName('p')[0].nodeName;
    console.log(elem);   // retorna p

## nodeType
Retorna o tipo de nó de um nó e retorna **1** para um nó de elemento, **2** um nó de atributo, **3** um nó de texto, **8** um nó de comentário:

    <p>Testando!</p>

    let x = document.getElementsByTagName('p')[0].nodeType;
    console.log(x);   // retorna p

## nodeValue
Define ou retorna o valor de um nó:

    <p>Testando!</p>

    let elem = document.getElementsByTagName('p')[0];
    let nod = elem.childNodes[0].nodeValue;  
    console.log(nod);   // retorna Testando!
