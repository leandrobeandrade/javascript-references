# Exemplo de uso com Ajax

	let get = function(url, callback) {								// 01
    	let http = new XMLHttpRequest();							        // 02
    	http.onreadystatechange = function() {						        	// 03
   			if(http.readyState == 4 && http.status == 200) {				// 04
   				callback(http.responseText, http.status);				// 05
			}
		};
    	http.open('Get', 'url', true);									// 08
    	http.send();											// 09
	};

	get('ajax.json', function(data, status) { 							// 12
   		if(status == 200) console.log(data);							// 13
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
    - **500:** "Internal Server Error"
    
- 05 => Declara a função de callback com a resposta e o status
- 08 => Especifica o método open()
- 09 => Envia a requisição
- 12 => Executa a função get()
- 13 => Se status da requisição for ok mostra os dados requisitados senão mostra o erro
