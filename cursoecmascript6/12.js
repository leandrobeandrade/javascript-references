let obj1 = {
    name: 'Willian',
    age: 26
};

let obj2 = {
    name: 'Jonas',
    age: 22
};

let ws = new WeakSet([obj1, obj2]);

ws.add({type: "obj"});

let obj3 = {
    name: 'Marcio',
    age: 18
};
let obj4 = {
    name: 'Carlos',
    age: 44
};

let wm = new WeakMap();
wm.set(obj3, 'Info do Marcio');
wm.set(obj4, 'Info do Carlos');