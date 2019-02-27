namespace Validacao { 
	let emailRegex: RegExp = /^([a-z0-9\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
	let urlRegex: RegExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;

	export class emailValidador {
		valido(str:string): boolean {
			return emailRegex.test(str);
		}
	}

	export class urlValidador {
		valido(str:string): boolean {         				
			return urlRegex.test(str);
		} 
	}
} 
