var defer = new Promise((resolve, reject) => { 
	setTimeout(() => {
		if (true) {
			resolve('Hello! It works!');
		} else {
			reject('Error!');
		}
	}, 2000);
});

defer
.then((data) => {
	console.log(data);
	return 'foo';
})
.then((data) => console.log(data))
.catch((err) => console.log(err));

const currency = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve({ currency: 'euro', value: 3.50 });
	}, 5000);
});
const countries = new Promise((resolve, reject) => {
	resolve(['Ireland', 'England', 'Scotland']);
});


/* Promise
.all([currency, countries])
.then(responses => {
    console.log(responses);
}) */

Promise
.race([currency, countries])
.then(responses => {
	console.log(responses);
})
