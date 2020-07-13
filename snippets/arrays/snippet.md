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