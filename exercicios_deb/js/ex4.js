let soma = 0;
let quantidade = 0;

for (let i = 15; i <= 100; i++) {
    soma += i;
    quantidade++;
}

const media = soma / quantidade;

document.write(`A média aritmética dos números entre 15 e 100 é: ${media}`);