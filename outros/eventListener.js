var btn = document.getElementById('btn');

btn.addEventListener('click', funcao1);
btn.addEventListener('click', funcao2);
btn.removeEventListener('click', funcao1);
btn.addEventListener('click', funcao3);

function funcao1() {
	alert('alert - 1');
}
function funcao2() {
	alert('alert - 2');
}
function funcao3() {
	alert('alert - 3');
}
