> Desestruturação

    const coord = [5, 10, -3, 1];
    let [x, y, z] = coord;
    console.log(x);  // 5
    console.log(y);  // 10
    console.log(z);  // -3

    const [nome, , pais] = ['Fulano', 'Silva', 'Brasil'];
    console.log(nome);  // Fulano
    console.log(pais);  // Brasil

    const [,,terceiro] = ['maçã', 'banana', 'laranja'];
    console.log(terceiro);  // laranja

    const nums = [1, 2, 3, 4, 5];
    const [primeiro, segundo, ...outros] = nums;
    console.log(primeiro);  // 1
    console.log(primeiro);  // 2
    console.log(primeiro);  // [3 4 5]
    
