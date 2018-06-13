let p = document.createElement('p');
let ola: string = 'Começando com Typescript';
p.textContent = ola; 
document.body.appendChild(p);

/*-------------*/

let numer: number = 10;                               // tipo NUMBER
let boole: boolean = true;                            // tipo BOOLEAN
let nulos: null;                                      // tipo NULL
let indef: undefined;                                 // tipo UNDEFINED
let annys: any = 'tyufsd'+ 10;                        // tipo ANY - qualquer tipo
let text1: string = 'Testando';                       // tipo STRING		
let text2: string = "Testando";							
let text3: string = `${text2}`;							

console.log(numer);
console.log(boole);
console.log(nulos);
console.log(indef);
console.log(annys);
console.log(text1);
console.log(text2);
console.log(text3);

/*-------------*/

function func(): void {}                                // tipo VOID

console.log(func);

/*-------------*/

let lista1: number[] = [1,2,3];                         // tipo VETOR
let lista2: Array<number> = [1,2,3];

console.log(lista1);
console.log(lista2);

/*-------------*/

let tupla: [string, number];                            // tipo TUPLA
tupla = ['Qualquer texto!', 2018];

console.log(tupla[0].length);
console.log(tupla[1].valueOf);

/*-------------*/

enum Dia{SEGUNDA, TERCA, QUARTA=5, QUINTA, SEXTA};      // tipo ENUM
let dia1: Dia = Dia.SEGUNDA;
let dia2 = Dia[1];

console.log(dia1);
console.log(dia2);
console.log(`${Dia.QUARTA} | ${Dia.QUINTA}`); 
