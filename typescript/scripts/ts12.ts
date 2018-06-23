let element1 = document.getElementById('btn2');
console.log(element1);

let element2 = document.getElementsByClassName('main');
console.log(element2);

let element3 = document.querySelector('#btn2');
console.log(element3);

let element4 = document.querySelector('.main');
console.log(element4);

let elements1 = document.querySelectorAll('.main');
console.log(elements1);

let elements2 = document.getElementsByTagName('div');
console.log(elements2);

let elements3 = document.getElementsByName('p');
console.log(elements3);



let test = document.getElementById('test');
test.innerHTML = 'Testando Typescript';
//test.textContent = 'Testando Typescript';

let novadiv = document.createElement('div');
novadiv.textContent = 'Typescript + Javascript';
test.appendChild(novadiv);
test.insertBefore(novadiv,test.firstChild); 
