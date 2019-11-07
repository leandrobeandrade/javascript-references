# slice()
Retorna a parte extraída da string em uma nova string

    let texto = 'É Javascript, e mais javascript!';
    console.log(texto.slice(0));        // retorna É Javascript, e mais javascript!
    
    console.log(texto.slice(0, 12));    // retorna É Javascript
    
    console.log(texto.slice(12, -1));   // retorna , e mais javascript

    console.log(texto.slice(-3));       // retorna pt!

    console.log(texto.slice(0, -1))     // retorna É Javascript, e mais javascript!

# substr()
Retorna parte de uma string começando na localização especificada pelo número especificado de caracteres
    
    let texto = 'É Javascript, e mais javascript!';
    console.log(texto.substr(0, 12));                  // retorna É Javascript

    console.log(texto.substr(12, texto.length));       // retorna , e mais javascript!

    console.log(texto.substr(12, texto.length -1));    // retorna , e mais javascript!

    console.log(texto.substr(-20));                    // retorna , e mais javascript!

    console.log(texto.substr(12, texto.length -1));    // retorna pt!

    console.log(texto.substr(12, texto.length -1));    // retorna , e mais javascript!

    console.log(texto.substr(-32, 1));                 // retorna , É

# substring()
Extrai uma parte de uma string a partir da posição indicada
    
    let texto = 'É Javascript, e mais javascript!';
    console.log(texto.substring(2));                // retorna Javascript, e mais javascript!

    console.log(texto.substring(2, 13));            // retorna Javascript,

    console.log(texto.substring(31));               // retorna !

    console.log(texto.substring(-3));               // retorna É Javascript, e mais javascript!

    console.log(texto.substring(texto.length -1));  // retorna !

# split()
Divide uma string em um array de substrings e retrona o novo array 

    let texto = 'É Javascript';
    console.log(texto.split());         // retorna ["É Javascript"]

    console.log(texto.split(''));       // retorna ["É", " ", "J", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

    console.log(texto.split(' '));      // retorna ["É", "Javascript"]

    console.log(texto.split(' ', 2));   // retorna ["É", "Javascript"]

    console.log(texto.split('', 2));    // retorna ["É", " "]

    console.log(texto.split('a'));      // retorna ["É J", "v", "script"]

# concat()
Retorna o resultado da junção de várias strings em uma só

    let t1 = 'Javascript ';
    let t2 = 'é muito ';
    let t3 = 'legal mesmo!';

    console.log(t1.concat(t2, t3));     // retorna Javascript é muito legal mesmo!

# repeat()
Repete a string determinada vezes

    let texto = 'Javascript ';
    console.log(texto.repeat(2));   // retorna Javascript Javascript 
