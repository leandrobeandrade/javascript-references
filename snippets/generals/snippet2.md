### Verifica se usuário está na página

    const verificaVisibilidade = () => {
      if(document.visibilityState === 'visible') console.log('Visualização OK');
      else console.log('Visibilidade Não OK');
    }

    document.addEventListener('visibilitychange', verificaVisibilidade);

### Operador coalescência nula no lugar de condições

    if(name === null || name === undefined) name = 'Usuário não cadastrado';  // RUIM

    name ??= 'Usuário não cadastrado';  // BOA

### Map no lugar de chave dinâmicas em objetos

    const object = {};  // RUIM
    object[dynamicKey] = value;

    const map = new Map();  // BOA
    map.set(dynamicKey, value);

### Método groupBy()

    const oportunidades = [
        { id: 1, name: 'Project A', status: 'open', value: 50 },
        { id: 2, name: 'Project B', status: 'close', value: 80 },
        { id: 3, name: 'Project C', status: 'open', value: 30 }
    ];

    const oportunidadesAgrupadas = Object.groupBy(oportunidades, ({status}) => status);
    console.log(oportunidadesAgrupadas);  // retorna
    /*
        {
            close: [
                { id: 2, name: 'Project B', status: 'close', value: 80 }
            ]
            open: [
                { id: 1, name: 'Project A', status: 'open', value: 50 },
                { id: 3, name: 'Project C', status: 'open', value: 30 }
            ]
        }
    */

    
