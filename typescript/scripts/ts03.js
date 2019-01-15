function nome(pessoa, salario) { 
    console.log(pessoa.nome);
    console.log(salario);
}
var pessoas = { nome: 'Fulano' };
var salario = { nome: 'Ciclano', salario: 1800 };
nome(salario, salario.salario);
nome(pessoas, salario.salario);
nome({ nome: 'Beltrano' }, 2300);
var diretor = { nome: 'Ciclano', salario: 1800, bonus: 5 };
diretor.nome = 'OutroQualquer';
nome(diretor, diretor.bonus); 
 
