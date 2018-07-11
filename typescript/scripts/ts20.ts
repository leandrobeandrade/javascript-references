@curso

class Pessoa {
	nome: string;
}

function curso(target:any) {
	Object.defineProperty(target.prototype,"curso",{value: () => "Curso de Typescript"});	// passagem por valor
}

let pe = new Pessoa();
console.log(pe.curso());


@Curso({
	curso: 'Curso de Javascript'
})

class Professor {
	nome: string;
}

function Curso(config:any) {
	return (target:any) => {
		Object.defineProperty(target.prototype,"curso",{value: () => config.curso});	// passagem por parâmetro

	}
}

let prof = new Professor();
console.log(prof.curso());
