class clickHandler {
	constructor() {

		let main = document.getElementById('main');
		let btn1 = document.getElementById('btn1');
		let btn2 = document.getElementById('btn2');

		if(main !== null && btn1 !== null && btn2 !== null) {
			main.addEventListener('click', clickHandler.alertEventMain, true);	// true/false - useCapture 
			btn1.addEventListener('click', clickHandler.alertEventBtn1, true);
			btn2.addEventListener('click', clickHandler.alertEventBtn2, true);
		}
	}

	static alertEventMain(e: any): void {
		alert('Clicado o main');
		e.stopPropagation();
	}

	static alertEventBtn1(): void {
		alert('Clicado o btn1');
	}

	static alertEventBtn2(): void {
		alert('Clicado o btn2');
	}

}

const click = new clickHandler();
