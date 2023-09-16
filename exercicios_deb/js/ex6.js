let alunosAprovados = 0;

for (; ;) {
    const nota1 = parseFloat(prompt('Digite a primeira nota do aluno: '));
    const nota2 = parseFloat(prompt('Digite a segunda nota do aluno: '));

    const media = (nota1 + nota2) / 2;

    console.log(`A média final do aluno é: ${media}` + `<br>`);

    if (media >= 9.5) {
        alunosAprovados++;
    }

    const resposta = prompt('Calcular a média de outro aluno? (S/N)' + `<br>`).toletterCase();

    if (resposta !== 's') {
        break;
    }
}

document.write(`Quantidade de alunos aprovados: ${alunosAprovados}` + `<br>`);