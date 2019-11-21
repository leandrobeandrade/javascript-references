## document.getElementById(); 
Manipula um elemento pelo seu id

    <p id="p1">paragrafo 01</p>
    
    let p = document.getElementById('p1');
    console.log(p); // retorna <p id="p1">paragrafo 01</p>

## document.getElementsByClassName()
Manipula uma coleção de elementos pela sua classe, acessadas pelo índice do elemento que quer se manipular

    <p id="p1" class="p1">paragrafo 01</p>
    <p id="p2" class="p1">paragrafo 02</p>
    
    let p = document.getElementsByClassName('p1'); 
    console.log(p); // retorna [p#p1.p1, p#p2.p1, p1: p#p1.p1, p2: p#p2.p1 length: 2]
    console.log(p)[0]; // retorna <p id="p1" class="p1">paragrafo 01</p>

## document.getElementsByTagName()
Manipula uma tag específica que pode ser acessada pelo seu índice

    <p id="p1" class="p1">paragrafo 01</p>
    <p id="p2" class="p1">paragrafo 02</p>
    
    let p = document.getElementsByTagName('p');
    console.log(p); // retorna [p#p1.p1, p#p2.p1, p1: p#p1.p1, p2: p#p2.p1 length: 2]
    console.log(p[0]); // retorna <p id="p1" class="p1">paragrafo 01</p>

## document.getElementsByName()
Obtem todos os elementos com o nome especificado

    Cats:<input name="animal" type="checkbox" value="Cats">
    Dogs:<input name="animal" type="checkbox" value="Dogs">
    
    let nome = document.getElementsByName('animal');
    console.log(nome.length);   // retorna 2
    console.log(nome[0].tagName);   // retorna INPUT

## document.querySelector()
Manipula um elemento através do seu seletor, mas, apenas o primeiro elemento, mesmo se houver mais:

    <p>paragrafo 01<p>
    <p id="p2">paragrafo 02<p>
    <p class="p3">paragrafo 03<p>
    <p class="p3">paragrafo 04<p>
    
    let p1 = document.querySelector('p');
    let p2 = document.querySelector('#teste');
    let p3 = document.querySelector('.teste');
    
    console.log(p1); // retorna <p>paragrafo 01<p>
    console.log(p2); // retorna <p id="p2">paragrafo 02<p>
    console.log(p3); // retorna <p class="p3">paragrafo 03<p> - só o primeiro elemento p com a classe p3 

## document.querySelectorAll();
Manipula um elemento ou coleção de elementos através do seu seletor como Css, acessados pelo seu índice ou não

    <p>paragrafo<p>
    <p id="p2">paragrafo 02<p>
    <p class="p3">paragrafo 03<p>
    <p class="p3">paragrafo 04<p>
    
    let ps = document.querySelectorAll('p');
    let p1 = document.querySelectorAll('p')[0];
    let p2 = document.querySelectorAll('#p2');
    let p3 = document.querySelector('p.p3'); // retorna <p class="p3">paragrafo 03<p> - só o primeiro p com a classe p3
    
    console.log(ps); // retorna [p, p, p#p2, p, p.p3, p, p.p3, p]
    console.log(p1); // retorna <p>paragrafo<p>
    console.log(p2); // retorna <p id="p2">paragrafo 02<p>
    console.log(p3); // retorna <p class="p3">paragrafo 03<p> - apenas o primeiro elemento p com a classe p3
    
    for(let i=0; i<p3.length; i++) {
        console.log(p3[i]);  // retorna <p class="p3">paragrafo 03</p> <p class="p3">paragrafo 04</p>
    }
