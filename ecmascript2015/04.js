var data = {
	name: 'Willian',
	surname: 'Justen',
	age: 25,
	blog: 'https://willianjusten.com.br',
	social: {
		twitter: '@Willian_Justen',
		facebook: '/willianjusten'
	}
};

//										 JAVASCRIPT
// const name = data.name;
// const surname = data.surname;
// const twitter = data.social.twitter;
// console.log(name);
// console.log(surname);
// console.log(twitter);

// 										 ECMASCRIPT			    
const { name, surname } = data;
console.log(name);
console.log(surname);
const { facebook, twitter } = data.social;
console.log(facebook);
console.log(twitter);                                   
const { facebook: fb } = data.social;
const { twitter: tw} = data.social;
console.log(fb);
console.log(tw);
const { city = 'Dublin' } = data;
console.log(city);