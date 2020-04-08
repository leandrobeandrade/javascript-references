# addEventListener()

O método addEventListener() anexa um manipulador de eventos a um elemento sem substituir os manipuladores de eventos existentes, facilitando o controle de como o evento reage à bubling de eventos.

Ao usar o método addEventListener(), o JavaScript é separado da marcação HTML, para melhor legibilidade e permite adicionar ouvintes de eventos mesmo quando você não controla a marcação HTML.

Você pode adicionar vários ouvintes de eventos ao mesmo elemento Html assim também como remover facilmente um ouvinte de evento usando o método **removeEventListener()**.

## Sintaxe

    element.addEventListener(event, listener, boolean);

- **event:** tipo de evento que deve ser ouvido (click, mouseenter, keyup, etc...)
- **listener:** função que executará algo conforme o evento
- **boolean:** Opcional, especifica se o addEventListener responderá a eventos no sentido de cima para baixo (capture phase) ou de baixo para cima (bubling phase)

### Exemplos práticos

    document.addEventListener('click', function() {
        alert('Alô Mundo!')
    })

    document.addEventListener('click', Alerta)

    function Alerta() { alert('Alô Mundo!') }

> Vários ouvintes

    <button id="btn">Testar</button>

    var btn = document.getElementById('btn');
    btn.addEventListener('click', Funcao1);
    btn.addEventListener('click', Funcao2);

    function Funcao1() {
        alert('Executando Funcao1');
    }

    function Funcao2() {
        alert('Executando Funcao2');
    }

> Especificando a ordem

    <div id="div">
        <h2>Bubbling (dentro para fora)</h2>
        <button id="btn">Botão 1</button>
    </div><br>

    document.getElementById('btn').addEventListener('click', () => {
        alert('Primeiro o clique do botão');
    }, false);

    document.getElementById('div').addEventListener('click', () => {
        alert('Depois da div');
    }, false);

    <div id="div">
        <h2>Capturing (fora para dentro)</h2>
        <p id="btn">Botão 2</p>
    </div>

    document.getElementById('btn').addEventListener('click', () => {
        alert('Depois do botão');
    }, true);

    document.getElementById('div').addEventListener('click', () => {
        alert('Primeiro o clique da div');
    }, true);

# removeEventListener()

Remove os manipuladores de eventos que foram anexados ao método addEventListener()

    <button onclick="removeHandler()" id="btn">Apertar</button>
    <div id="div" style="width:400px;height:400px;"></div>

    document.getElementById('div').addEventListener('mouseover', Funcao);

    function Funcao() { console.log('Disparando...') }

    function removeHandler() {
        document.getElementById('div').removeEventListener('mouseover', Funcao);
    }
