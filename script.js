let numeroCartas = Number("");

function verificadorQtdeCartas() {
    if (numeroCartas % 2 !== 0 || numeroCartas < 4 || numeroCartas > 14 || isNaN(numeroCartas)) {
        return true;
    }

    else {
        return false;
    }
}

function quantidadeCartas() {
    while (verificadorQtdeCartas()) {

        numeroCartas = Number(prompt("Escolha a quantidade de cartas para jogar: "))

    }
    distribuirCartas()
}
quantidadeCartas()

function distribuirCartas() {

    const selecionarCartas = [];
    const cartas = document.querySelectorAll('.card');
    let contador = 4;
    console.log(cartas);

    while (cartas > contador) {
        cartas.innerHTML = `${selecionarCartas[contador]}`;
        contador++;
    }
}

