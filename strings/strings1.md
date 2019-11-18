# length
Retorna o tamanho da string

    let texto = 'É Javascript, e mais javascript!'; 
    console.log(texto.length);  // retorna 32

# replace()
Substitui a primeira ocorrência encontrada por outra especificada ou várias com regex sendo case sensitive

    let texto = 'É Javascript, e mais javascript!';
    console.log(texto.replace('Javascript', 'Ecmascript'));     // retorna É Ecmascript, e mais Javascript!

    console.log(texto.replace('javascript', 'Ecmascript'));     // retorna É Javascript, e mais Ecmascript!

    console.log(texto.replace(\javascript\gi, 'Ecmascript'));   // retorna É Ecmascript, e mais Ecmascript!
    
# indexOf()
Retorna a posição da primeira ocorrência especificada e aceita um segundo parâmetro por onde deve começar a busca

    let texto = 'É Javascript, e mais Javascript!';
    console.log(texto.indexOf('Jasvascript'));      // retorna 2

    console.log(texto.indexOf('Javascript', 3));    // retorna 21 

# lastIndexOf()
Retorna a posição da última ocorrência especificada e aceita um segundo parâmetro por onde deve começar a busca
    
    let texto = 'É Javascript, e mais Javascript!';
    console.log(texto.lastIndexOf('Javascript'));       // retorna 21

    console.log(texto.lastIndexOf('Javascript', 9));    // retorna 2

# search()
Retorna a posição da primeira ocorrência especificada encontrada sendo case sensitive

    let texto = 'É Javascript, e mais javascript!';
    console.log(texto.search('Javascript'));    // retorna 2

    console.log(texto.search(/javascript/i));   // retorna 2

# charAt()
Retorna o caractere especificado a partir de uma string

    let texto = 'É Javascript, e mais javascript!';
    console.log(texto.charat(0));                   // retorna É

    console.log(texto.charAt(texto.length -1));     // retorna !

    console.log(texto.charAt(texto.length -2));     // retorna t

# includes()
Determina se uma string pode ser encontrada dentro de outra string, retorna true ou false, aceita segundo parâmetro para posição

    let texto = 'Ser, ou não ser, eis a questão.';

    console.log(texto.includes('Ser'));         // retorna true
    console.log(texto.includes('questão'));     // retorna true
    console.log(texto.includes('não existe'));  // retorna false
    console.log(texto.includes('Ser', 1));      // retorna false
    console.log(texto.includes('SER'));         // retorna false
    
# startsWith()
Determina se uma string começa com os mesmo caracteres de outra string, retorna true ou false, aceita segundo parâmero para posição

    let texto = 'Ser, ou não ser, eis a questão.';

    console.log(texto.startsWith('Ser'));           // retorna true
    console.log(texto.startsWith('questão.', 23));  // retorna true
    console.log(texto.startsWith('não existe'));    // retorna false
    console.log(texto.startsWith('Ser', 0));        // retorna true
    console.log(texto.startsWith('SER'));           // retorna false
    
# endsWith()
Determina se uma string termina com os caracteres da string especificada, retorna true ou false, aceita segundo parâmero para posição

    let texto = 'Ser, ou não ser, eis a questão.';

    console.log(texto.endsWith('Ser'));         // retorna false
    console.log(texto.endsWith('questão.'));    // retorna true
   	console.log(texto.endsWith('não existe'));  // retorna false
    console.log(texto.endsWith('Ser', 0));      // retorna false
    console.log(texto.endsWith('não ser', 15)); // retorna true
