# Exemplo de uso com Ajax

    01      let get = function(url, callback) {
    02	        let http = new XMLHttpRequest();
    03		    http.onreadystatechange = function() {
    04			    if(http.readyState == 4 && http.status == 200) {
    05				    callback(http.responseText, http.status);
			        }
		        };
    08		    http.open('Get', 'url', true);
    09		    http.send();
	        };

    12      get('ajax.json', function(data, status) { 
    13		    if(status == 200) console.log(data);
                else console.log('Erro!');
	        });

- 01 => Declara a função get() com 2 parâmetros
- 02 => Cria um novo objeto do tipo XMLHttpRequest e armazenando na variável http
- 03 => Define uma função a ser chamada quando a propriedade readyState for alterada
- 04 => Mantém o status do XMLHttpRequest.
        
    readyState
    - **0:** solicitação não inicializada
    - **1:** conexão do servidor estabelecida
    - **2:** solicitação recebida
    - **3:** solicitação de processamento
    - **4:** solicitação concluída e resposta pronta
    
    status
    - **200:** "OK"
    - **403:** "Forbidden"
    - **404:** "Page not found"
    - **500** "Internal Server Error"
- 05 => Declara a função de callback com a resposta e o status
- 08 => Especifica o método open()
- 09 => Envia a requisição
- 12 => Executa a função get()
- 13 => Se status da requisição for ok mostra os dados requisitados senão mostra o erro 