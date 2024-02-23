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

### Desestruturação

    const object = { a:1, b:2, c:3 };
    const { b = 99 } = object;
    console.log(b);  // 2

    const { d = 99 } = object;
    console.log(d);  // 99
