const numeroDeNotas = 6;
let notas = [];
let soma = 0;

for (let i = 1; i <= numeroDeNotas; i++) {
    let nota = parseFloat(prompt(`Digite a nota ${i} (entre 0 e 10): ` + `<br>`));

    if (isNaN(nota) || nota < 0 || nota > 10) {
        document.write('Nota inválida. Digite uma nota entre 0 e 10.' + `<br>`);
        i--; 
    } else {
        notas.push(nota);
        soma += nota;
    }
}

const media = soma / numeroDeNotas;

document.write(`A média das ${numeroDeNotas} notas é: ${media}` + `<br>`);