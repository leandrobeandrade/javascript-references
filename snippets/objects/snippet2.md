> Desestruturação

    const pessoa = {nome: 'Fulano', sobrenome: 'Silva', idade: 30};
    const {nome, sobrenome} = pessoa;
    console.log(nome);  // Fulano
    console.log(sobrenome);  // Silva

    const carro = {marca: 'Toyota', modelo: 'Camry', ano: 2022};
    const {marca, ano} = carro;
    console.log(marca);  // Toyota
    console.log(ano);  // 2022

    const filme = {nome: 'Avatar', genero: undefined};
    const {nome: _nome, genero = 'Fantasia'} = filme;  // nome: _nome (Alias), genero = 'Fantasia' (valor default)
    console.log(_nome);  // Avatar
    console.log(genero);  // Fantasia

    const dados = {usuario: {id: 10, nome: 'Fulano'}, pontos: [94, 85, 95]};
    const {usuario: {id, nome}, pontos: [primeiro, segundo]} = dados;
    console.log(id);  // 10
    console.log(nome);  // Fulano
    console.log(primeiro);  // 94

    const array = [{a: 1, b:2}, {a: 3, b:4}];
    const [{a: priA, b: priB}, {a: segA, b: segB}] = array;
    console.log(priA);  // 1
    console.log(priB);  // 2
    console.log(segA);  // 3
    console.log(segA);  // 4

    const heroi = {nome: 'Batman', realNome: 'Bruce Wayne', compania: 'WayneCorp'};

    const {nome, ...resto} = heroi;
    console.log(nome);  // Batman
    console.log(resto);  // {realNome: 'Bruce Wayne', compania: 'WayneCorp'}

    let nome;  // desestruturação com variável existente
    const heroi = {nome: 'Batman',};

    ({ nome } = heroi);
    console.log(nome);  // Batman

    
    
