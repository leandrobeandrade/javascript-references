const list = document.querySelectorAll('#list li'); 
const listArray = Array.from(list);

console.log(listArray);

const name = listArray.map((name) => name.textContent);
const names = listArray.map((name) => name.tagName);

console.log(name, names);

const array = Array.of(1,10,"teste", {name:"Lea"}, [2,3,4]);
console.log(array);
