## Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada.

    class Ponto {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        static distancia(a, b) {
            const dx = a.x - b.x;
            const dy = a.y - b.y;

            return Math.sqrt(dx*dx + dy*dy);
        }
    }

    const p1 = new Ponto(5, 5);
    const p2 = new Ponto(10, 10);

    console.log(Ponto.distancia(p1, p2));      <= Chamado o método após a instanciação da classe

testes
