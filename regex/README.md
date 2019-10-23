# Regex 

Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares também são `objetos`. Elas podem ser utilizadas com os métodos ***exec*** e ***test*** do objeto **`RegExp`**, e com os métodos ***match***, ***replace***, ***search***, e ***split*** do objeto **`String`**.

Há duas maneiras de construir uma expressão regular:

- Usando uma expressão literal, que consiste em um padrão fechado entre barras que são compiladas quando o script é carregado, como o exemplo a seguir:

      let regexp = /ab+c/;                      indicado quando o padrão não vai ser alterado
      
- Ou chamando o construtor do objeto RegExp, que a compilação da expressão regular é realizada em tempo de execução:
         
      let regexp = new RegExp("ab+c");          indicado quando o padrão for ser alterado

<h3><u>Sites para testar regex</u></h3>

- **https://regex101.com**
- **https://regexr.com**
- **https://www.regextester.com**
- **https://www.regexpal.com**

![](https://github.com/leandrobeandrade/javascript-references/blob/master/regex/regex.png)
