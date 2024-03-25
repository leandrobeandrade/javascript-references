 let times = ['Palmeiras', 'Grêmio', 'Vasco', 'Atlético-MG'];
 ---
**length =>** retorna o tamanho, ou seja, a quantidade de elementos no array

    console.log(times.length)   // retorna 4

**[x] =>** retorna o elemento na posição indicada pelo índice informado

    console.log(times[0]+' - '+times[3]);   // retorna Palmeiras - Atlético-MG

**at() =>** Recebe um valor inteiro e retorna o item referente ao index dele, permitindo valores positivos ou negativos. Valores negativos contam apartir do último item do array

    let index = 2;
    console.log(`O índice ${index} retorna o time ${times.at(index)}`);
    
**indexOf() =>** retorna o índice do primeiro elemento encontrado no array

    console.log(times.indexOf('Vasco'));  // retorna 2

**lastIndexOf() =>** Retorna o ultimo índice que um certo elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente. O array é pesquisado de trás para frente, começando pelo fromIndex

    let array = [2, 5, 9, 2];
    console.log(array.lastIndexOf(2));      // retorna 3
    console.log(array.lastIndexOf(7));      // retorna -1
    console.log(array.lastIndexOf(2, 3));   // retorna 3
    console.log(array.lastIndexOf(2, 2));   // retorna 0
    console.log(array.lastIndexOf(2, -2));  // retorna 0
    console.log(array.lastIndexOf(2, -1));  // retorna 3
    
**push() =>** adiciona um ou mais elementos no final do array

    time.push('Coritiba');
    console.log(times);  // retorna  ["Palmeiras", "Grêmio", "Vasco", "Atlético-MG", "Coritiba"]
    
    // adiciona elementos na posição indicada
    times[5] = 'Bahia';
    console.log(times);  // retorna ["Palmeiras", "Grêmio", "Vasco", "Atlético-MG", "Coritiba", "Bahia"]

**unshift() =>** adiciona um ou mais elementos no início do array

    times.unshift('Ceará');
    console.log(times); // retorna ["Ceará", "Palmeiras", "Grêmio", "Vasco", "Atlético-MG", "Coritiba", "Bahia"]

**pop() =>** retira o último elemento do array

    times1.pop();
    console.log(times); // retorna ["Ceará", "Palmeiras", "Grêmio", "Vasco", "Atlético-MG", "Coritiba"]

**shift() =>** retira o primeiro elemento do array

    times.shift();
    console.log(times); // retorna ["Palmeiras", "Grêmio", "Vasco", "Atlético-MG", "Coritiba"]

**splice(x,x,x) =>** retorna uma lista com os elementos removidos, posição do elemento(parametro 1), quantidade de elementos (parametro 2), elemento para ser inserido (parametro 3 - opcional)
    
    // adiciona sem retirar elementos
    times.splice(1, 0, 'Ceará')
    console.log(times); // retorna ["Palmeiras", "Ceará", "Grêmio", "Vasco", "Atlético-MG", "Coritiba"]

    // adiciona retirando elementos
    times.splice(1, 1, 'Remo')
    console.log(times); // retorna ["Palmeiras", "Remo", "Grêmio", "Vasco", "Atlético-MG", "Coritiba"]

    // não adiciona elementos só retira
    times.splice(1, 1)  // retorna ["Palmeiras", "Grêmio", "Vasco", "Atlético-MG", "Coritiba"]

**slice(x) =>** recorta a quantidade de elementos (parametro) do array

    // retira do início para o final e retorna o restante dos alementos
    times.slice(2);
    console.log(times); // retorna ["Vasco", "Atlético-MG", "Coritiba"]

    // retira do final para o início e retorna os elementos cortados
    times.slice(-2)
    console.log(times); // retorna ["Atlético-MG", "Coritiba"]

**concat() =>** junta os elementos do array

    times.concat(["Ceará", "Remo"])
    console.log(times); // retorna ["Palmeiras", "Grêmio", "Vasco", "Atlético-MG", "Coritiba", "Ceará", "Remo"]

**sort() =>** retorna o array em ordem alfabética (string) ou do menor decimal para o maior decimal (number)

    times.sort();  // retorna ["Atlético-MG", "Coritiba", "Grêmio", "Palmeiras", "Vasco"]
    console.log([45,12,3,100,111]);  // retorna [100, 111, 12, 3, 45]

**reverse() =>** retorna o array com os elementos posicionados ao inverso do array original

    times.reverse();
    console.log(times); // ["Vasco", "Palmeiras", "Grêmio", "Coritiba", "Atlético-MG"]

**toString() =>** retorna uma string com os valores do array

    times.toString();
    console.log(times); // retorna "Vasco,Palmeiras,Grêmio,Coritiba,Atlético-MG"

**join(x) =>** retorna uma string com o que for declarado como parametro seprando os valores do array

    times.join('-');
    console.log(times); // retorna "Vasco-Palmeiras-Grêmio-Coritiba-Atlético-MG"
    
**includes() =>** retorna true ou false fazendo uma busca no array

    console.log(times.include('Palmeiras')); // retrona true

**isArray(x) =>** testa se o elemento passado como parametro é um array

    console.log(Array.isArray(times));  // retorna true
