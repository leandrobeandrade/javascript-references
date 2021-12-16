## attributes
Retorna um objeto com as informações dos atributos em um elemento Html especificado

    <button class="btn" id="bt" onclick="myFunction()">Testar</button>
    
    let btn = document.getElementById('bt');
    let x = btn.attributes; 
    console.log(x); // retorna {0: class, 1: id, 2: onclick, class: class, id: id, onclick: onclick, length: 3}

## attributes.name
Retorna o nome de um atributo na posição especificada

    <button class="btn" id="bt" onclick="myFunction()">Testar</button>
    
    let btn = document.getElementById('bt');
    let x = btn.attributes[0].name; 
    console.log(x); // retorna class

## attributes.value 
Define ou retorna o valor do atributo na posição especificada

    <button class="btn" id="bt" onclick="myFunction()">Testar</button>
    
    let btn = document.getElementById('bt');
    let x = btn.attributes[0].value;
    console.log(x); // retorna btn

## attributes.specified 
Retorna *true* se o atributo for especificado, caso contrário, retorna *false*

    <button class="btn" id="bt" onclick="myFunction()">Testar</button>
    
    let btn = document.getElementById('bt');
    let x = btn.getAttributeNode("onclick").specified;
    console.log(x); // retorna true
    
## attributes.getNamedItem()
Retorna um nó de atributo especificado de um NamedNodeMap
    
    <button class="btn" id="bt" onclick="myFunction()">Testar</button>
    
    let btn = document.getElementById('bt');
    let x = btn.attributes.getNamedItem("onclick"); 
    console.log(x); // retorna onclick="myFunction()"

## attributes.item()
Retorna o nó do atributo em um índice especificado em um NamedNodeMap
    
    <button class="btn" id="bt" onclick="myFunction()">Testar</button>
    
    let btn = document.getElementById('bt');
    let x = btn.attributes.item(0);  
    console.log(x); // retorna class="btn"

## attributes.length 
Retorna o número de nós de atributos em um NamedNodeMap

    <button class="btn" id="bt" onclick="myFunction()">Testar</button>
    
    let btn = document.getElementById('bt');
    let x = btn.attributes.length;
    console.log(x); // retorna 3
    
## attributes.createAttribute()
Cria um atributo em um elemento Html especificado

    <button id="bt" onclick="myFunction()">Testar</button>
    
    let btn = document.getElementById('bt');
    let x = btn.attributes.createAttribute('style');
    x.value = "margin: 20px"
    console.log(x); // retorna <button id="bt" onclick="myFunction()" style="margin: 20px">Testar</button>

## attributes.removeNamedItem()
Remove um nó de um atributo especificado

    <button class="btn" id="bt" onclick="myFunction()">Testar</button>
    
    let btn = document.getElementById('bt');
    let x =  btn.attributes.removeNamedItem("class");
    console.log(x); // retorna class="btn"
    console.log(btn); // retorna <button id="bt" onclick="myFunction()">Testar</button>
   

## attributes.setNamedItem()
Define o nó do atributo especificado (por nome)

    <button id="bt" onclick="myFunction()">Testar</button>
    
    let btn = document.getElementById('bt');
    let attr = document.createAttribute('style');
    attr.value = 'margin: 20px';
    btn.attributes.setNamedItem(attr);
    console.log(btn); // retorna <button id="bt" onclick="myFunction()" style="margin: 20px">Testar</button>
