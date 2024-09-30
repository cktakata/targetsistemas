/*
5) Dois veículos, um carro e um caminhão, saem respectivamente de cidades opostas pela mesma rodovia. O carro, de Ribeirão Preto em direção a Barretos, a uma velocidade constante de 90 km/h, e o caminhão, de Barretos em direção a Ribeirão Preto, a uma velocidade constante de 80 km/h. Quando eles se cruzarem no percurso, qual estará mais próximo da cidade de Ribeirão Preto?

a) Considerar a distância de 125km entre a cidade de Ribeirão Preto <-> Barretos.
b) Considerar 3 pedágios como obstáculo e que o carro leva 5 minutos a mais para passar em cada um deles, pois ele não possui dispositivo de cobrança de pedágio.
c)Explique como chegou no resultado.
*/

// Dados do problema
const distanciaTotal = 125; // km
const velocidadeCarro = 90; // km/h
const velocidadeCaminhao = 80; // km/h
const tempoPedagios = 15 / 60; // 15 minutos em horas

// Função para calcular a distância percorrida até o cruzamento
function calcularDistancias() {
    // Tempo até o cruzamento (em horas)
    const tempoCruzamento = distanciaTotal / (velocidadeCarro + velocidadeCaminhao);

    // Ajustando o tempo do carro para incluir o tempo dos pedágios
    const tempoCarroTotal = tempoCruzamento + tempoPedagios;

    // Distâncias percorridas
    const distanciaCarro = velocidadeCarro * tempoCarroTotal;
    const distanciaCaminhao = velocidadeCaminhao * tempoCruzamento;

    // Distâncias até Ribeirão Preto
    const distanciaCarroRP = distanciaTotal - distanciaCarro;
    const distanciaCaminhaoRP = distanciaTotal - distanciaCaminhao;

    return {
        distanciaCarroRP: distanciaCarroRP.toFixed(2),
        distanciaCaminhaoRP: distanciaCaminhaoRP.toFixed(2),
        carroMaisProximo: distanciaCarroRP < distanciaCaminhaoRP
    };
}

// Executa a função e exibe os resultados
const resultado = calcularDistancias();
console.log(`Distância do carro até Ribeirão Preto: ${resultado.distanciaCarroRP} km`);
console.log(`Distância do caminhão até Ribeirão Preto: ${resultado.distanciaCaminhaoRP} km`);
console.log(`O carro está mais próximo de Ribeirão Preto? ${resultado.carroMaisProximo ? "Sim" : "Não"}`);

/*
Resposta:

Distância do carro até Ribeirão Preto: 36.32 km
Distância do caminhão até Ribeirão Preto: 66.18 km
O carro está mais próximo de Ribeirão Preto? Sim

Justificativa

Conclusão
O carro estará mais próximo da cidade de Ribeirão Preto no momento em que eles se cruzarem.

Isso ocorre porque, mesmo levando mais tempo devido aos pedágios, o carro percorre uma distância maior em relação à distância total de 125 km, fazendo com que sua posição final seja mais próxima de Ribeirão Preto.
*/