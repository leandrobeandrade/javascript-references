# Boolean

Um Booleano JavaScript representa um de dois valores: **verdadeiro** ou **falso**. Tudo que possuir um valor atrelado e que seja diferente de `null` e `undefined`, incluindo um objeto Boolean que o valor seja false, é considerado como true, sendo o objeto **`Boolean`** um objeto wrapper para um valor booleano.:

    let a = Boolean(100);               // true
    let b = Boolean(3.14);              // true
    let c = Boolean(-15);               // true
    let d = Boolean('Olá');             // true
    let e = Boolean('false');           // true
    let f = Boolean(false);             // true
    let g = Boolean(1 + 7 + 3.14);      // true
    
> Não confundir os valores `primitivos` booleanos **true** e **false** com os valores true and false do objeto Boolean.
