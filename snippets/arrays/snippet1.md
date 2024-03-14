> Métodos encadeados

    const names = ['Ka', 'Ali', 'Le', 'Mu']; 
    const love = names.filter(name => name === 'Ali').map(name => `Eu amo ${name}`);
    console.log(love);

> Agrupar objetos com chaves iguais:

    const data = [
        { grupo: 'Teste', conteudo: { 1: 'a' } },
        { grupo: 'Teste', conteudo: { 2: 'b' } },
        { grupo: 'Outro', conteudo: { 3: 'c' } }
    ];

    // Exemplo forEach()
    const newData = {};
    data.forEach(value => {
        const { grupo, conteudo } = value;
        if (newData[grupo] === undefined) newData[grupo] = [conteudo];
        else newData[grupo].push(conteudo);
    });

    console.log(newData);  // retorna { Outro: [ { 3: 'c' } ], Teste: [ { 1: 'a' }, { 2: 'b' } ] }

    // Exemplo reduce()
    const newData = data.reduce((acumulador, atual) => {
        const { grupo, conteudo } = atual;
  
        if (!acumulador[grupo]) acumulador[grupo] = [conteudo];
        else acumulador[grupo].push(conteudo);
  
        return acumulador;
    }, {});

    console.log(newData);  // retorna {  Teste: [ { 1: 'a' }, { 2: 'b' } ], Outro: [ { 3: 'c' } ] }
    
 > Agrupar objetos em arrays de dois em dois:

    const objetos = [
        {id: 1, title: "Titulo 1"},
        {id: 2, title: "Titulo 2"},
        {id: 3, title: "Titulo 3"},
        {id: 4, title: "Titulo 4"}, 
        {id: 5, title: "Titulo 5"},
        {id: 6, title: "Titulo 6"},
        {id: 7, title: "Titulo 7"},
        {id: 8, title: "Titulo 8"}
    ];
    
    function agrupa(lista, quantidade) {
        const tam = lista.length;
        let i = 0;
        let novoIndice = -1;
        const novaLista = [];

        for (i; i < tam; i++) {
            if (i === 0 || i % quantidade === 0) {
                novoIndice++;
                novaLista.push([]);
            }
            novaLista[novoIndice].push(lista[i]);
        }

        return novaLista;
    }

    console.log(agrupa(objetos, 2));
