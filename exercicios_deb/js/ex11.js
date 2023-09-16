let dentroIntervalo = 0;
let foraIntervalo = 0;

for (let i = 1; i <= 10; i++) {
    const valor = parseFloat(prompt(`Digite o ${i}º valor:`));

    if (!isNaN(valor)) {
        if (valor >= 24 && valor <= 42) {
            dentroIntervalo++;
        } else {
            foraIntervalo++;
        }
    } else {
        document.write(`Valor inválido. Por favor, digite um número.` + `<br>`);
        i--; // Para permitir que o usuário insira novamente um valor inválido.
    }
}

document.write(`Quantidade de valores dentro do intervalo: ${dentroIntervalo}` + `<br>`);
document.write(`Quantidade de valores fora do intervalo: ${foraIntervalo}` + `<br>`);