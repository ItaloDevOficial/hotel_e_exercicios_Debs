// Variáveis globais para armazenar informações do hotel
let hotelNome = "";
let nomeUsuario = "";

// Função para mostrar mensagem de boas-vindas
function mostrarBoasVindas() {
    alert(`Bem-vindo ao Hotel ${hotelNome}, ${nomeUsuario}. É um imenso prazer tê-lo por aqui!`);
}

// Função para mostrar mensagem de despedida
function mostrarDespedida() {
    alert(`Muito obrigado e até logo, ${nomeUsuario}.`);
}

// Função para mostrar erro
function mostrarErro(mensagem) {
    alert(mensagem);
}

// Função para validar um número positivo
function validarNumeroPositivo(numero) {
    return !isNaN(numero) && numero >= 0;
}

// Função para calcular o valor total da hospedagem
function calcularValorHospedagem(diaria, dias) {
    return diaria * dias;
}

// Função para reservar um quarto
function reservarQuarto() {
    const diaria = parseFloat(prompt("Qual o valor da diária no hotel?"));

    if (!validarNumeroPositivo(diaria)) {
        mostrarErro("Valor inválido");
        return;
    }

    const dias = parseInt(prompt("Quantos dias de hospedagem?"));

    if (!validarNumeroPositivo(dias) || dias > 30) {
        mostrarErro("Quantidade de dias inválida");
        return;
    }

    const nomeHospede = prompt("Qual o nome do hóspede?");
    const confirmacao = prompt(`${nomeUsuario}, você confirma a reserva para ${nomeHospede} por ${dias} dias? (S/N)`);

    if (confirmacao.toUpperCase() === "S") {
        const valorTotal = calcularValorHospedagem(diaria, dias);
        alert(`${nomeUsuario}, reserva efetuada para ${nomeHospede}. O valor total é de R$ ${valorTotal.toFixed(2)}.`);
    } else {
        alert(`${nomeUsuario}, reserva não efetuada.`);
    }
}

// Função para cadastrar hóspedes
function cadastrarHospedes() {
    const diaria = parseFloat(prompt("Qual o valor da diária no hotel?"));

    if (!validarNumeroPositivo(diaria)) {
        mostrarErro("Valor inválido");
        return;
    }

    let gratuidades = 0;
    let meiasHospedagens = 0;
    let valorTotal = 0;

    while (true) {
        const nomeHospede = prompt("Qual o nome do hóspede?");

        if (nomeHospede.toUpperCase() === "PARE") {
            break;
        }

        const idadeHospede = parseInt(prompt(`Qual a idade de ${nomeHospede}?`));

        if (idadeHospede < 6) {
            gratuidades++;
            alert(`${nomeHospede} possui gratuidade.`);
        } else if (idadeHospede > 60) {
            meiasHospedagens++;
            alert(`${nomeHospede} paga meia.`);
            valorTotal += (diaria / 2);
        } else {
            valorTotal += diaria;
        }

        alert(`${nomeHospede} cadastrada(o) com sucesso.`);
    }

    alert(`${nomeUsuario}, o valor total das hospedagens é: R$ ${valorTotal.toFixed(2)}.`);
    alert(`${gratuidades} gratuidade(s) e ${meiasHospedagens} meia(s).`);
}

// Função para cadastrar e pesquisar hóspedes
function cadastrarEPesquisarHospedes() {
    const hospedes = [];

    while (true) {
        const opcao = parseInt(prompt("Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Sair"));

        switch (opcao) {
            case 1:
                const nomeHospede = prompt("Qual o nome do hóspede?");
                hospedes.push(nomeHospede);
                alert(`Hóspede ${nomeHospede} cadastrada(o) com sucesso!`);
                break;
            case 2:
                const nomePesquisa = prompt("Qual o nome do hóspede a ser pesquisado?");
                if (hospedes.includes(nomePesquisa)) {
                    alert(`Hóspede ${nomePesquisa} foi encontrado.`);
                } else {
                    alert(`Hóspede ${nomePesquisa} não foi encontrado.`);
                }
                break;
            case 3:
                return;
            default:
                mostrarErro("Opção inválida.");
        }
    }
}

// Função para calcular o custo de garçons para um evento
function calcularCustoGarcons() {
    const numGarcons = parseInt(prompt("Quantos garçons serão necessários?"));
    const numHoras = parseInt(prompt("Qual a duração do evento em horas?"));
    const custoPorGarcomPorHora = 10.5;

    const custoTotal = numGarcons * numHoras * custoPorGarcomPorHora;

    alert(`Custo total: R$ ${custoTotal.toFixed(2)}`);

    const confirmacao = prompt("Gostaria de efetuar a reserva? S/N");
    if (confirmacao.toUpperCase() === "S") {
        alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
    } else {
        alert(`${nomeUsuario}, reserva não efetuada.`);
    }
}

// Função para calcular o custo de comida para um evento
function calcularCustoComida() {
    const capacidadeMaximaSalao = 350;
    const precoCafePorLitro = 0.8;
    const precoAguaPorLitro = 0.4;
    const precoSalgadoPorCento = 34;

    const numConvidados = parseInt(prompt("Qual o número de convidados para o evento?"));

    if (numConvidados > capacidadeMaximaSalao || numConvidados < 0) {
        mostrarErro("Quantidade de convidados superior à capacidade máxima.");
        return;
    }

    const litrosCafe = numConvidados * 0.2;
    const litrosAgua = numConvidados * 0.5;
    const centosSalgados = numConvidados * 7;

    const custoCafe = litrosCafe * precoCafePorLitro;
    const custoAgua = litrosAgua * precoAguaPorLitro;
    const custoSalgados = centosSalgados * (precoSalgadoPorCento / 100);

    const custoTotal = custoCafe + custoAgua + custoSalgados;

    alert(`O evento precisará de ${litrosCafe.toFixed(2)} litros de café, ${litrosAgua.toFixed(2)} litros de água e ${centosSalgados} salgados.`);
    alert(`O custo total do evento será de R$ ${custoTotal.toFixed(2)}`);

    const confirmacao = prompt("Gostaria de efetuar a reserva? S/N");
    if (confirmacao.toUpperCase() === "S") {
        alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
    } else {
        alert(`${nomeUsuario}, reserva não efetuada.`);
    }
}

// Função para determinar o auditório mais adequado
function determinarAuditorio() {
    const capacidadeLaranja = 150;
    const capacidadeColorado = 350;

    const numConvidados = parseInt(prompt("Qual o número de convidados para o seu evento?"));

    if (numConvidados < 0 || numConvidados > capacidadeColorado) {
        mostrarErro("Número de convidados inválido.");
        return;
    }

    if (numConvidados <= capacidadeLaranja) {
        const cadeirasAdicionais = capacidadeLaranja - numConvidados;
        const mensagem = cadeirasAdicionais > 0
            ? `Use o auditório Laranja (inclua mais ${cadeirasAdicionais} cadeiras)`
            : "Use o auditório Laranja";
        alert(mensagem);
    } else {
        alert("Use o auditório Colorado");
    }

    const confirmacao = prompt("Gostaria de efetuar a reserva? S/N");
    if (confirmacao.toUpperCase() === "S") {
        alert(`${nomeUsuario}, reserva efetuada com sucesso.`);
    } else {
        alert(`${nomeUsuario}, reserva não efetuada.`);
    }
}

// Função para verificar disponibilidade do restaurante
function verificarDisponibilidadeRestaurante() {
    const diaSemana = prompt("Qual o dia do seu evento?").toLowerCase();
    const horaEvento = parseInt(prompt("Qual é a hora do seu evento?"));

    const horarioDisponivel =
        (diaSemana !== "sabado" && diaSemana !== "domingo" && horaEvento >= 7 && horaEvento <= 23) ||
        ((diaSemana === "sabado" || diaSemana === "domingo") && horaEvento >= 7 && horaEvento <= 15);

    if (horarioDisponivel) {
        const nomeEmpresa = prompt("Qual o nome da empresa?");
        alert(`Restaurante reservado para ${nomeEmpresa}: ${diaSemana} às ${horaEvento}hs.`);
    } else {
        alert("Restaurante indisponível");
    }
}

// Função para determinar o combustível mais econômico
function determinarCombustivelMaisEconomico() {
    const precoAlcoolWayneOil = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
    const precoGasolinaWayneOil = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
    const precoAlcoolStarkPetrol = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    const precoGasolinaStarkPetrol = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

    const tanqueCarro = 42;

    const custoAlcoolWayneOil = tanqueCarro * precoAlcoolWayneOil;
    const custoGasolinaWayneOil = tanqueCarro * precoGasolinaWayneOil;
    const custoAlcoolStarkPetrol = tanqueCarro * precoAlcoolStarkPetrol;
    const custoGasolinaStarkPetrol = tanqueCarro * precoGasolinaStarkPetrol;

    let combustivelRecomendado = "";
    let postoMaisBarato = "";

    if (custoAlcoolWayneOil * 1.3 < custoGasolinaWayneOil) {
        combustivelRecomendado = "álcool";
        postoMaisBarato = "Wayne Oil";
    } else {
        combustivelRecomendado = "gasolina";
        postoMaisBarato = "Wayne Oil";
    }

    if (custoAlcoolStarkPetrol * 1.3 < custoGasolinaStarkPetrol) {
        if (combustivelRecomendado === "álcool") {
            postoMaisBarato = "Wayne Oil e Stark Petrol";
        } else {
            combustivelRecomendado = "álcool";
            postoMaisBarato = "Stark Petrol";
        }
    }

    alert(`${nomeUsuario}, é mais barato abastecer com ${combustivelRecomendado} no posto ${postoMaisBarato}.`);
}

// Função para calcular o custo do serviço de ar condicionado
function calcularCustoArCondicionado() {
    let menorOrcamento = null;
    let nomeMenorOrcamento = "";

    while (true) {
        const nomeEmpresa = prompt("Qual o nome da empresa?");
        const valorPorAparelho = parseFloat(prompt("Qual o valor do serviço por aparelho?"));
        const quantidadeAparelhos = parseInt(prompt("Quantidade de aparelhos em manutenção?"));
        const percentualDesconto = parseFloat(prompt("Percentual de desconto?"));
        const quantidadeMinimaDesconto = parseInt(prompt("Quantidade mínima de aparelhos para desconto?"));

        if (quantidadeAparelhos < quantidadeMinimaDesconto) {
            percentualDesconto = 0;
        }

        const totalCalculado = (valorPorAparelho * quantidadeAparelhos) * (1 - percentualDesconto / 100);

        if (menorOrcamento === null || totalCalculado < menorOrcamento) {
            menorOrcamento = totalCalculado;
            nomeMenorOrcamento = nomeEmpresa;
        }

        alert(`O serviço de ${nomeEmpresa} custará R$ ${totalCalculado.toFixed(2)}.`);

        const continuar = prompt("Deseja informar novos dados? (S/N)");
        if (continuar.toUpperCase() !== "S") {
            break;
        }
    }

    alert(`O orçamento de menor valor é o de ${nomeMenorOrcamento} por R$ ${menorOrcamento.toFixed(2)}.`);
}

// Função principal para o menu inicial
function inicio() {
    const opcoes = [
        "1. Reservar Quarto",
        "2. Cadastrar Hóspedes",
        "3. Cadastrar e Pesquisar Hóspedes",
        "4. Calcular Custo Garçons para Evento",
        "5. Calcular Custo Comida para Evento",
        "6. Determinar Auditório Adequado",
        "7. Verificar Disponibilidade do Restaurante",
        "8. Determinar Combustível Mais Econômico",
        "9. Calcular Custo de Serviço de Ar Condicionado",
        "10. Sair"
    ];

    while (true) {
        console.log("Escolha uma opção:");
        opcoes.forEach((opcao) => console.log(opcao));

        const escolha = parseInt(prompt(`
        Menu Principal:
        1) Reservas de Quartos
        2) Cadastrar Hospedes
        3) Cadastro e Pesquisa de Hospedes
        4) Eventos
        5) Buffet
        6) Auditório
        7) Horarios
        8) Passeios
        9) Manutenção
        0) Sair
        Escolha uma opção:`));


        switch (escolha) {
            case 1:
                reservarQuarto();
                break;
            case 2:
                cadastrarHospedes();
                break;
            case 3:
                cadastrarEPesquisarHospedes();
                break;
            case 4:
                calcularCustoGarconsEvento();
                break;
            case 5:
                calcularCustoComidaEvento();
                break;
            case 6:
                determinarAuditorio();
                break;
            case 7:
                verificarDisponibilidadeRestaurante();
                break;
            case 8:
                determinarCombustivelMaisEconomico();
                break;
            case 9:
                calcularCustoArCondicionado();
                break;
            case 10:
                console.log(`Muito obrigado e até logo, ${nomeUsuario}.`);
                return;
            default:
                mostrarErro("Opção inválida.");
        }
    }
}

// Início do programa
const nomeHotel = prompt("Digite o nome do hotel:");
const senhaEsperada = "2678";

let nome_Usuario = "";
let senhaUsuario = "";

while (true) {
    nome_Usuario = prompt(`Digite o nome do usuário do hotel ${nomeHotel}:`);
    senhaUsuario = prompt("Digite a senha (2678):");

    if (senhaUsuario === senhaEsperada) {
        break;
    } else {
        mostrarErro("Senha incorreta.");
        
    }
}

alert(`Bem vindo ao Hotel ${nomeHotel}, ${nome_Usuario}. É um imenso prazer ter você por aqui!`);
inicio();

// Função para mostrar mensagens de erro
function mostrarErro(mensagem) {
    alert(`Erro: ${mensagem}`);
}
