const N = parseInt(prompt('Digite um valor N (maior que zero): '));

if (N <= 0 || isNaN(N)) {
    document.write('Valor inválido. Por favor, digite um valor maior que zero.' + `<br>`);
} else {
    for (let i = 1; i <= N; i++) {
        document.write(i);
    }
}