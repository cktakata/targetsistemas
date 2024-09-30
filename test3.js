/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora de todos os dias de um ano, faça um programa, na linguagem que desejar, que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do ano;
- O maior valor de faturamento ocorrido em um dia do ano;
- Número de dias no ano em que o valor de faturamento diário foi superior à média anual.

a) Considerar o vetor já carregado com as informações de valor de faturamento.

b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média.

c) Utilize o algoritmo mais veloz que puder definir.
*/

const faturamentoDiario = [
    // Exemplo de dados de faturamento: 
    // Coloque os valores de faturamento diário, com 0 representando dias sem faturamento.
    0, 1500, 0, 2000, 2500, 0, 3000, 3500, 4000, 0, 
    // ... (adicione os valores restantes para um ano, totalizando 365 valores)
];

// Função para calcular o faturamento
function calcularFaturamento(faturamentoDiario) {
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let totalFaturamento = 0;
    let diasComFaturamento = 0;

    for (const faturamento of faturamentoDiario) {
        if (faturamento > 0) {
            // Atualiza menor e maior faturamento
            if (faturamento < menorValor) {
                menorValor = faturamento;
            }
            if (faturamento > maiorValor) {
                maiorValor = faturamento;
            }

            // Soma o faturamento e conta os dias com faturamento
            totalFaturamento += faturamento;
            diasComFaturamento++;
        }
    }

    // Calcula a média, evitando divisão por zero
    const mediaFaturamento = diasComFaturamento > 0 ? totalFaturamento / diasComFaturamento : 0;

    // Conta dias com faturamento superior à média
    let diasAcimaDaMedia = 0;
    for (const faturamento of faturamentoDiario) {
        if (faturamento > mediaFaturamento) {
            diasAcimaDaMedia++;
        }
    }

    return {
        menorValor,
        maiorValor,
        mediaFaturamento,
        diasAcimaDaMedia,
    };
}

// Executa a função e exibe os resultados
const resultado = calcularFaturamento(faturamentoDiario);
console.log(`Menor Faturamento: ${resultado.menorValor}`);
console.log(`Maior Faturamento: ${resultado.maiorValor}`);
console.log(`Dias acima da média: ${resultado.diasAcimaDaMedia}`);
