# Agrupadores

Uma parte de uma expressão regular delimitada por (). Servem para facilitar a aplicação de quantificadores, para indicar trechos repetidos de uma regex (através de metacarateres numéricos, como \1) ou para extração de partes específicas do texto através dos métodos.

    let str = 'Nº 1234';
    let regexp = /(Nº\s)[0-9]{4}/;
    let ret = regexp.exec(str);
    console.log(ret);   // retorna ["Nº ", "Nº 1234"]

- delimitando grupos

      let str = 'São Paulo - SP';
      let regexp = new RegExp('(.+)-(.+)');
      let ret = regexp.exec(str);
      console.log(ret); // retorna ["São Paulo - SP", "São Paulo ", " SP"]
      
- referenciando grupos
   
      let str = 'Custa 1000';
      let regexp = /(\d+)/;
      let ret = str.replace(regexp, 'R$ $1');
      console.log(ret); // retorna Custa R$ 1000
      
- ignorando grupos

      let str = 'https://google.com.br';
      let regexp = /(https?):\/\/(.*)/;     // sem ignorar
      let ret = regexp.exec(str);
      console.log(ret); // retorna ["https://google.com.br", "https", "google.com.br"]
      
      let str = 'https://google.com.br';
      let regexp = /(?:https?):\/\/(.*)/;   // ignorando
      let ret = regexp.exec(str);
      console.log(ret); // retorna ["https://google.com.br", "google.com.br"]
      
- nomeando grupos

      let str = '17/01/1984';
      let regexp = /(?<dia>\d{2})\/(?<mes>\d{2})\/(?<ano>\d{4})/;
      let ret = regexp.exec(str);
      console.log(ret.groups.dia);  // retorna 17
      console.log(ret.groups.mes);  // retorna 01
      console.log(ret.groups.ano);  // retorna 1984
      
- referênciando grupos dentro de padrão

      let str = "<img src='test.jpg'>";
      let regexp = /["](.*)["]/;
      let ret = regexp.exec(str);
      console.log(ret);	// retorna ["'test.jpg'", "test.jpg"]

      let str = "<img src='tes't.jpg'>";
      let regexp = /(['])(.*?)\1/;
      let ret = regexp.exec(str);
      console.log(ret); // ["'tes'", "'", "tes"]
      
- referênciando grupos dentro de padrão por nomes

      let str = "<img src='tes't.jpg'>";
      let regexp = /(?<aspas>['])(.*?)\k<aspas>/;
      let ret = regexp.exec(str);
      console.log(ret); // retorna ["'tes'", "'", "tes"]
      
- aninhando grupos

      let str = '<a href="https://google.com">Google</a>';
      let regexp = /<a (href="(.*)")>(.*)<\/a>/;
      let ret = str.match(regexp); 
      console.log(ret); // retorna
      // ["<a href="https://google.com">Google</a>", "href="https://google.com"", "https://google.com", "Google"]
