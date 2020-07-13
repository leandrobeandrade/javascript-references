# Definições

AJAX significa **Asynchronous JavaScript And XML** (JavaScript assíncrono e XML). Em poucas palavras, é o uso do objeto XMLHttpRequest para se comunicar com os servidores. Ele pode enviar e receber informações em vários formatos, incluindo arquivos JSON, XML, HTML e texto. A característica mais atraente do AJAX é sua natureza `assíncrona`, o que significa que ele pode se comunicar com o servidor, trocar dados e atualizar a página sem precisar atualizar a página.

Os dois principais recursos do AJAX permitem que você faça o seguinte:

- Faça solicitações ao servidor sem recarregar a página
- Receba e trabalhe com dados do servidor

Para fazer uma solicitação HTTP ao servidor com JavaScript, você precisa de uma instância de um objeto com a funcionalidade necessária, ou seja o objeto **XMLHttpRequest**. 

Depois de fazer uma solicitação, você receberá uma resposta de volta. Nesse estágio, você precisa informar ao objeto de solicitação XMLHttp qual função JavaScript manipulará a resposta, configurando a propriedade **`onreadystatechange`** do objeto e nomeando-o após a função para chamar quando a solicitação mudar de estado, assim:

    httpRequest.onreadystatechange = nomeDaFuncao;

Como alternativa, em vez de fornecer um nome de função, você pode usar a técnica JavaScript para definir funções dinamicamente (chamadas "funções anônimas") para definir as ações que processarão a resposta, assim:

    httpRequest.onreadystatechange = function() {
        // Resposta do servidor
    };

Em seguida, depois de declarar o que acontece quando você recebe a resposta, você precisa realmente fazer a solicitação, chamando os métodos **open()** e **send()** do objeto de solicitação HTTP, assim:

    httpRequest.open('GET', 'http://www.example.org/some.file', true);
    httpRequest.send();

> O primeiro parâmetro da chamada para open() é o método de solicitação HTTP - GET, POST, HEAD ou outro método suportado pelo seu servidor. Mantenha o método em maiúsculas, conforme o padrão HTTP, caso contrário, alguns navegadores (como o Firefox) podem não processar a solicitação.

> O segundo parâmetro é o URL para o qual você está enviando a solicitação. Como um recurso de segurança, você não pode chamar URLs em domínios de terceiros por padrão. Certifique-se de usar o nome de domínio exato em todas as suas páginas ou você receberá um erro de "permissão negada" ao ligar para open(). Uma armadilha comum é acessar seu site por domain.tld, mas tentar ligar para páginas com www.domain.tld. Se você realmente precisar enviar uma solicitação para outro domínio, consulte Controle de acesso HTTP (CORS).

> O terceiro parâmetro opcional define se a solicitação é assíncrona. Se verdadeiro (o padrão), a execução do JavaScript continuará e o usuário poderá interagir com a página enquanto a resposta do servidor ainda não chegou. Este é o primeiro A do AJAX.

O parâmetro para o método send() pode ser qualquer dado que você deseja enviar para o servidor, se estiver postando a solicitação. Os dados do formulário devem ser enviados em um formato que o servidor possa analisar, como uma string de consulta ou outros formatos, como dados de várias partes / formulário, JSON, XML e assim por diante.

Observe que se você deseja enviar dados para o POST, pode ser necessário definir o tipo MIME da solicitação. Por exemplo, use o seguinte antes de chamar send() para dados do formulário enviados como uma string de consulta:

    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');