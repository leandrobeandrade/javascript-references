#### Qualquer atributo de qualquer elemento no qual o nome do atributo inicia com data- é um atributo data. 

    <article
      id="teste"
      data-colunas="3"
      data-identificacao="12314"
      data-nome-usuario="Fulano">
      ...
    </article>
    
Para obter o atributo data através do objeto dataset, acesse a propriedade utilizando a parte do nome do atributo após
o prefixo **data-** (note que o hífen é convertido para camelCase).

    var article = document.getElementById('teste');
 
    article.dataset.colunas // "3"
    article.dataset.identificacao // "12314"
    article.dataset.nomeUsuario // "Fulano"
    
- Cada propriedade é uma String e pode ser lida e escrita. No exemplo acima a atribuição **article.dataset.columns = 5**
iria alterar esse atributo para "5".

#### CSS

> Note que os atributos data são atributos em HTML puro, e você pode inclusive acessá-los via CSS. 

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
