# data
Qualquer atributo de qualquer elemento no qual o nome do atributo inicia com data- é um atributo data 

    <article id="elemento" data-colunas="3" data-identificacao="12314" data-nome-usuario="Fulano"></article>
    
> Para obter o atributo data através do objeto dataset, acesse a propriedade utilizando a parte do nome do atributo após o prefixo **data-** (note que o hífen é convertido para camelCase)

    let article = document.getElementById('elemento');
 
    console.log(article.dataset.colunas);       // retorna 3
    console.log(article.dataset.identificacao); // retorna 12314
    console.log(article.dataset.nomeUsuario);   // retorna Fulano
    
> Cada propriedade é uma string e pode ser lida e escrita

    article.dataset.colunas = 5;
    console.log(article.colunas);   // retorna 5

## data - Css
Atributos data são atributos em HTML puro, e você pode inclusive acessá-los via CSS

    article::before {
      content: attr(data-nome);
    }
    
Pode-se também usar os seletores de atributos em CSS para alterar estilos de acordo com o atributo data:

    article[data-colunas='3'] {
      width: 400px;
    }
    article[data-colunas='4'] {
      width: 600px;
    }
