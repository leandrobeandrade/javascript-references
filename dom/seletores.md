### document.getElementById(); 
Manipula um elemento pelo seu id: 
+ `<p id="teste">Teste</p>`
+ `document.getElementById('teste');`

### document.getElementsByClassName();
Manipula uma coleção de elementos pela sua classe, acessadas pelo índice do elemento que quer se manipular:
+ `<p class="teste">Teste</p>`
+ `<p class="teste">Teste</p>`
+ `document.getElementsByClassName('teste')[0]; | document.getElementsByClassName('teste')[1];`

### document.getElementsByTagName();
Manipula uma tag específica que pode ser acessada pelo seu índice na árvore DOM:
+ `<p>Teste<p>`
+ `<p>Teste<p>`
+ `document.getElementsByTagName('p')[0]; | document.getElementsByTagName('p')[1];`

### document.getElementsByName();
Obtem todos os elementos com o nome especificado:
+ `Cats:<input name="animal" type="checkbox" value="Cats">`
+ `Dogs:<input name="animal" type="checkbox" value="Dogs">`
+ `document.getElementsByName('animal').length;`
+ `document.getElementsByName('animal')[0].tagName;`

### document.querySelector();
Manipula um elemento através do seu seletor, mas, apenas o primeiro elemento, mesmo se houver mais:
+ `<p>Teste<p>`
+ `<p id="teste">Teste<p>`
+ `<p class="teste">Teste<p>`
+ `document.querySelector('p'); | document.querySelector('#teste'); | document.querySelector('.teste');`

### document.querySelectorAll();
Manipula um elemento ou coleção de elementos através do seu seletor, acessados pelo índice ou não:
+ `<p>Teste<p>`
+ `<p id="teste">Teste<p>`
+ `<p class="teste">Teste<p>`
+ `document.querySelectorAll('p')[0]; | document.querySelectorAll('#teste, .teste'); | document.querySelector('p.teste');`
