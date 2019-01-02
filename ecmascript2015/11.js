let obj = { 
    name: 'Willian',
    age: 26
};

let proxy = new Proxy(obj, {
    get(target, name) {
        console.log('Alguém está o pedindo o nome =D');
        return target[name];
    },
    set(target, name, value) {
        console.log('Alguém está mudando o nome!');
        target[name] = value.toUpperCase();
    }
});

let mySet = new Set(['willian', 'jonas', 'godoy']);
mySet.add('marcio');
mySet.add('marcio');
mySet.add('marcio');
mySet.add('willian');
mySet.delete('willian');
console.log(mySet.has('willian'));
console.log(mySet.has('marcio'));
console.log(mySet[1]);
let it = mySet.values();

console.log(it.next());
for (name of it) {
    console.log(name);
}
