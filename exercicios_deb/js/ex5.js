const primeiroNumero = parseInt(prompt('Digite o primeiro número inteiro: '));
const segundoNumero = parseInt(prompt('Digite o segundo número inteiro: '));

let soma = 0;
let quantidade = 0;

for (let i = primeiroNumero; i <= segundoNumero; i++) {
    soma += i;
    quantidade++;
}

const media = soma / quantidade;

document.write(`A média aritmética dos números entre ${primeiroNumero} e ${segundoNumero} é: ${media}` + `<br>`);
