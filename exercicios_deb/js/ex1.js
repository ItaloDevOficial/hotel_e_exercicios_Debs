let primeiroValor = parseFloat(prompt('Digite o primeiro valor: '));

let segundoValor;
for (;;) {
    segundoValor = parseFloat(prompt('Digite o segundo valor (maior que zero): '));

    if (!isNaN(segundoValor) && segundoValor > 0) {
    break;
    } else {
    alert('O segundo valor deve ser maior que zero. Tente novamente.');
    }
}

const resultado = primeiroValor / segundoValor;
document.write(`O resultado da divisão é: ${resultado}`);
