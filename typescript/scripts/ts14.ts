let key1 = 'key1';
let key2 = 'key2';

console.log(sessionStorage.getItem(key1));						// não faz nada
console.log(sessionStorage.getItem(key2));

sessionStorage.setItem(key1, 'Valor 1');
sessionStorage.setItem(key2, 'Valor 2');
console.log(sessionStorage.getItem(key1));
console.log(sessionStorage.getItem(key2));

/*for(let i=0; sessionStorage.length; i++) {
	console.log(sessionStorage.getItem(sessionStorage.key1[i]));
} */


let key3 = 'key1';
let key4 = 'key2';

console.log(localStorage.getItem(key1));						// não faz nada
console.log(localStorage.getItem(key2));

localStorage.setItem(key3, 'Valor 3');
localStorage.setItem(key4, 'Valor 4');
console.log(localStorage.getItem(key3));
console.log(localStorage.getItem(key4));

//localStorage.clear();
